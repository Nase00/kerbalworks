class CreateShips < ActiveRecord::Migration
  def change
    create_table :ships do |t|
    	t.belongs_to :pilot, null: false

      t.timestamps
    end
  end
end
