require 'rails_helper'

RSpec.describe User, :type => :model do
  let(:user) { User.new(name: "Jebidiah", email: 'test@aol.com', youtube: 'space', twitter: 'Whee', password: 'test')}

  describe "validates presence" do
    it { expect(user).to validate_presence_of(:name) }
    it { expect(user).to validate_presence_of(:email) }
  end

  describe "validates uniqueness" do
    it { expect(user).to validate_uniqueness_of(:username) }
  end

  describe "excepts associations" do
    it { expect(user).to have_many(:answers) }
    it { expect(user).to have_many(:questions) }
    it { expect(user).to have_many(:votes) }
    it { expect(user).to have_many(:responses) }
    it { expect(user).to have_many(:tags) }
  end

  describe "restricts email format" do
    it { expect(user).to allow_value('text@email.com').for(:email) }
    it { expect(user).to_not allow_value('textemail.com').for(:email) }
  end

  describe "restricts username format" do
    it { expect(user).to allow_value('username').for(:username) }
    it { expect(user).to_not allow_value('user name').for(:username) }
    it { expect(user).to_not allow_value(' ').for(:username) }
  end

  describe "has secure password" do
    it { expect(user).to have_secure_password }
  end
end