class Curriculum
  def resume
    read_markdown "app/assets/markdown/20150205.markdown"
  end

  def cover_letter
    read_markdown "app/assets/markdown/cover-20150205.markdown"
  end

  def skills
    skills_file = File.join(this_directory, 'curriculum/skills.txt')
    File.readlines(skills_file)
  end

  private

  def this_directory
   File.dirname(__FILE__)
  end

  def read_markdown file_path
    # load curriculm markdown
    cv_markdown = File.read file_path, mode: 'rt'
    markdown_processor = MyMarkdown.new cv_markdown

    # return html
    markdown_processor.content
  end
end
