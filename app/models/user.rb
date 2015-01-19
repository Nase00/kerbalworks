class User < ActiveRecord::Base
  has_many :ships, foreign_key: "pilot_id"

  validates_presence_of :username, :email, :password

  has_secure_password

	before_save { self.email = email.downcase }

	VALID_USERNAME_REGEX = /\s/
  validates :username,  presence: true,
  											length: { minimum: 3, maximum: 20 },
  											format: { without: VALID_USERNAME_REGEX }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
end
