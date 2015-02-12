class ClientTest < ActiveSupport::TestCase
  test 'get all clients' do
    clients = Curriculums::Client.all

    assert clients.size > 0
    clients.each do |client|
      refute client.url.blank?, "url should not be blank"
      refute client.image.blank?, "image should not be blank"
    end
  end

  test 'should create new client' do
    args = "url", "image"
    client = Curriculums::Client.new *args

    assert client.url == args[0], "Did not initialize client properly"
    assert client.image == args[1], "Did not initialize client properly"
  end
end
