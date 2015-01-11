class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
    	t.string :name
    	t.text :description
    	t.belongs_to :pilot

      t.timestamps null: false
    end
  end
end
