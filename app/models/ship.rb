class Ship < ActiveRecord::Base
	belongs_to :pilot, class_name: "User"
end
