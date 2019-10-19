class AddDaysToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :days, :integer, :default => 0
  end
end
