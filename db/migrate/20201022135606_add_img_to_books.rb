class AddImgToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :img, :string
  end
end
