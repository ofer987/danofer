module Curriculums
  class Client
    attr_reader :url, :image
    def self.all
      clients_file = File.join(this_directory, "clients.txt")

      File.readlines(clients_file).map do |line|
        Client.new *line.split
      end
    end

    def initialize *args
      @url, @image = args
    end

    private

    def self.this_directory
      File.dirname(__FILE__)
    end
  end
end
