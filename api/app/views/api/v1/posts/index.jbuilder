json.array! @posts do |post|
  json.id post.id
  json.title post.title
  json.createdAt post.created_at.strftime("%b %d, %Y")
  json.category post.category.name
  json.content post.content
  json.authorName "ToanNN"

  if post.image.attached?
    json.image_url ENV.fetch("APPLICATION_URL", "http://localhost:3000") + url_for(post.image)
  else
    json.image_url nil
  end
end
