require 'rmagick'
include Magick

class ImageConverter < Nanoc::Filter
  identifier :convert_image
  type :binary

  def run(filename, params = {})
    image = ImageList.new(filename)
    image.resize_to_fit!(params[:width]) if params[:width]
    image.format = params[:format].to_s
    image.write(output_filename)
  end
end
