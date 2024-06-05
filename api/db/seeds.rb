require 'faker'

name_categories = ["Name_1", "Name_2", "Name_3"]
name_categories.each do |n|
  Category.find_or_create_by!(name: n)
end

Category.ids.each do |id|
  Post.find_or_create_by!(
    title: Faker::Game.title,
    content: Faker::Lorem.paragraph,
    category_id: id
  )
end
