class Ship < ActiveRecord::Base
	belongs_to :pilot, class_name: "User"

	validates :name, length: { maximum: 25 }
	validates :description, length: { maximum: 5000 }
end
