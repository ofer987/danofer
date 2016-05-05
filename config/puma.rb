case Rails.env
when 'development'
  workers Integer(ENV['WEB_CONCURRENCY'] || 2)
  threads_count = Integer(ENV['MAX_THREADS'] || 1)
  threads threads_count, threads_count

  preload_app!

  rackup      DefaultRackup
  port        ENV['PORT']     || 3000
  environment ENV['RACK_ENV'] || 'development'

  on_worker_boot do
    # Worker specific setup for Rails 4.1+
    # See: https://devcenter.heroku.com/articles/deploying-rails-applications-with-the-puma-web-server#on-worker-boot
    ActiveRecord::Base.establish_connection
  end
else
  workers Integer(ENV['WEB_CONCURRENCY'] || 1)
  threads_count = Integer(ENV['MAX_THREADS'] || 1)
  threads threads_count, threads_count

  app_dir = File.expand_path("../..", __FILE__)
  shared_dir = "#{app_dir}/shared"

  # Set up socket location
  bind "unix://#{shared_dir}/sockets/puma.sock"

  # Logging
  stdout_redirect "#{shared_dir}/log/puma.stdout.log", "#{shared_dir}/log/puma.stderr.log", true

  # Set master PID and state locations
  pidfile "#{shared_dir}/pids/puma.pid"
  state_path "#{shared_dir}/pids/puma.state"
  activate_control_app

  preload_app!

  rails_env = ENV['RAILS_ENV'] || 'development'
  environment rails_env

  on_worker_boot do
    require "active_record"
    ActiveRecord::Base.connection.disconnect! rescue ActiveRecord::ConnectionNotEstablished
    ActiveRecord::Base.establish_connection(YAML.load_file("#{app_dir}/config/database.yml")[rails_env])
  end
end
