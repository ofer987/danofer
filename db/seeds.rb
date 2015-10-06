# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Presentation.create(name: 'How to be a HomeStar Runner with Vim', unique_name: 'keyboard', presented_at: '2015-04-30', filename: 'presentations/keyboard_vim.pdf', location: '49 Spadina Avenue, Suite 206, Toronto, Ontario')
Presentation.create(name: 'Documentation', unique_name: 'documentation', presented_at: '2015-06-24', filename: 'presentations/documentation.pdf', location: '500 King Street West, 4th Floor, Toronto, Ontario')
Presentation.create(name: 'Learning by Inspecting Troubled Code', unique_name: 'bad_ruby', presented_at: '2015-10-06', filename: 'presentations/bad_ruby.pdf', location: 'Bitmaker Labs, 220 King Street West, Suite 200, Toronto, Ontario')
