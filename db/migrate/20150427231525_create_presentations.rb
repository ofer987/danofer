class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :name, null: false
      t.string :unique_name, unique: true, null: false
      t.datetime :presented_at, null: false
      t.string :location, null: false
      t.string :filename, null: false

      t.timestamps null: false
    end
  end
end
