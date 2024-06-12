require 'faker'

name_categories = ["Category_1", "Category_2", "Category_3", "Category_4", "Category_5"]
name_categories.each do |n|
  Category.find_or_create_by!(name: n)
end

image_paths = [
  Rails.root.join('app/assets/images/image_1.jpg'),
  Rails.root.join('app/assets/images/image_2.jpg'),
  Rails.root.join('app/assets/images/image_3.jpg'),
  Rails.root.join('app/assets/images/image_4.jpg')
  Rails.root.join('app/assets/images/image_5.jpg')
]

Category.ids.each do |id|
  post = Post.find_or_create_by!(
    title: Faker::Game.title,
    content: Faker::Lorem.paragraph(number: 100),
    category_id: id
  )
  image_path = image_paths.sample
  post.image.attach(io: File.open(image_path), filename: File.basename(image_path))
end
