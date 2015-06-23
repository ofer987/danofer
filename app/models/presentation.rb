class Presentation < ActiveRecord::Base
  validates :unique_name, presence: true, uniqueness: true
end
