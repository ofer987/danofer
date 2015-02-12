module Curriculums
  class Project
    attr_reader :name, :url, :repo
    def self.all
      projects_file = File.join(this_directory, "projects.txt")

      File.readlines(projects_file).map do |line|
        Project.new *line.split
      end
    end

    def initialize *args
      @name, @url, @repo = args
    end

    private

    def self.this_directory
      File.dirname(__FILE__)
    end
  end
end
