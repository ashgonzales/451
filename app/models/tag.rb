class Tag < ApplicationRecord
  belongs_to :book
  has_many :book_tags
  has_many :book, through: :book_tags

  validates :name, uniqueness: true
end
