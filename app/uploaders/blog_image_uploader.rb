# encoding: utf-8

class BlogImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  MiniMagick.processor = :gm

  storage :file

  def store_dir
    'blog_images'
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   # For Rails 3.1+ asset pipeline compatibility:
  #   ActionController::Base.helpers.asset_path("fallback/" + [version_name, "default.png"].compact.join('_'))
  #
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  version :large do
    process :resize_to_fit => [930, 620]
  end

  version :medium, :from_version => :large do
    process :resize_to_fit => [690, 460]
  end

  version :small, :from_version => :medium do
    process :resize_to_fit => [435, 290]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
