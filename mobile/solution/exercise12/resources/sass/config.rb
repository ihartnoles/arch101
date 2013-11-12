# Get the directory that this configuration file exists in
dir = File.dirname(__FILE__)

# Load the sencha-touch framework automatically.
load File.join(dir, '..', '..', '../touch', 'resources', 'themes')

# Compass configurations
sass_path = dir
css_path = File.join(dir, "..", "css")

# Require any additional compass plugins here.
# images_dir = "../images"

images_path = File.join(dir, "..", "images")
fonts_path =  File.join(dir, "..", "fonts")


output_style = :expanded
environment = :production
