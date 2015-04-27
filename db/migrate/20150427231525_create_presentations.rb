class CreatePresentations < ActiveRecord::Migration
  def change
    create_table :presentations do |t|
      t.string :name
      t.datetime :presented_at
      t.string :location
      t.string :filename

      t.timestamps null: false
    end
  end
end
