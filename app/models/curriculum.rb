class Curriculum
  def resume
    markdown_from_file("20150205.markdown")
  end

  def cover_letter
    markdown_from_file("cover-20150205.markdown")
  end

  def skills
    skills_file = File.join(this_directory, 'curriculums', 'skills.txt')
    File.readlines(skills_file)
  end

  def clients
    Curriculums::Client.all
  end

  def projects
    Curriculums::Project.all
  end

  def story
    markdown_from_file('story.md')
  end

  private

  def this_directory
   File.dirname(__FILE__)
  end

  def markdown_from_file(path)
    absolute_path = File.join(this_directory, 'curriculums', path)

    read_markdown(absolute_path)
  end

  def read_markdown(file_path)
    # load curriculm markdown
    cv_markdown = File.read file_path, mode: 'rt'
    markdown_processor = MyMarkdown.new cv_markdown

    # return html
    markdown_processor.content
  end
end
