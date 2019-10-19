class AddInternationalToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :international, :boolean, :default => false
    add_column :users, :swim, :boolean, :default => false
    add_column :users, :hot, :boolean, :default => false
    add_column :users, :cold, :boolean, :default => false
    add_column :users, :business, :boolean, :default => false
  end
end
