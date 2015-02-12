class ProjectTest < ActiveSupport::TestCase
  test 'get all projects' do
    projects = Curriculums::Project.all

    assert projects.size > 0
    projects.each do |project|
      refute project.name.blank?, "name should not be blank"
      refute project.repo.blank?, "repo should not be blank"
    end
  end

  test 'should create new project' do
    args = "name", "url", "repo"
    project = Curriculums::Project.new *args

    assert project.name == args[0], "Did not initialize project (name) properly"
    assert project.url == args[1], "Did not initialize project (url) properly"
    assert project.repo == args[2], "Did not initialize project (repo) properly"
  end
end
