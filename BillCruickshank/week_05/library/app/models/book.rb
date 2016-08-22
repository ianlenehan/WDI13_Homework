# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :text
#  pub_date   :text
#  cover      :text
#  created_at :datetime
#  updated_at :datetime
#  author_id  :integer
#

class Book < ActiveRecord::Base
  belongs_to :author
end
