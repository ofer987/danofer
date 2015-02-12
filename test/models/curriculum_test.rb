require 'test_helper'

class CurriculumTest < ActiveSupport::TestCase
  setup do
  end

  test 'should get resume' do
    cv = Curriculum.new

    refute cv.resume.blank?, 'no curriculum vitae'
  end

  test 'should get cover letter' do
    cv = Curriculum.new

    refute cv.cover_letter.blank?, 'no cover letter'
  end

  test 'should return skills' do
    skills = Curriculum.new.skills

    assert skills.size > 0
    skills.each do |skill|
      refute skill.blank?, "skill should not be blank"
    end
  end

  test 'should return clients' do
    clients = Curriculum.new.clients

    assert clients.size > 0
    clients.each do |client|
      refute client.url.blank?, "url should not be blank. client is #{client}"
      refute client.image.blank?, "image should not be blank. client is #{client}"
    end
  end

  test 'should return projects' do
    projects = Curriculum.new.projects

    assert projects.size > 0
    projects.each do |project|
      refute project.name.blank?, "name should not be blank. project is #{project}"
      refute project.repo.blank?, "repo should not be blank. project is #{project}"
      refute project.description.blank?, "descripion should not be blank. project is #{project}"
    end
  end
end
