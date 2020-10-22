class Book < ApplicationRecord
  attr_accessible :content, :author, :page, :location, :title, :tags_attributes

  belongs_to :user
  has_many :comments, :dependent => :destroy
  has_many :book_tags
  has_many :tags, through: :book_tags

  validates :title, :presence => true, :length => { :minimum => 3 }
  validates :author,  :presence => true
  validates :page, :presence => true
  validates :content,  inclusion: { allow_blank: true }
  validates :location,  inclusion: { allow_blank: true }

  accepts_nested_attributes_for :tags, :allow_destroy => :true,
  :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }
end
