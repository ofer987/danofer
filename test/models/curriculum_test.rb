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
      refute skill.blank?
    end
  end
end
