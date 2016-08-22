# == Schema Information
#
# Table name: oceans
#
#  id         :integer          primary key
#  name       :text
#  area       :float
#  deepest    :float
#  percentage :float
#

class Ocean < ActiveRecord::Base
end
