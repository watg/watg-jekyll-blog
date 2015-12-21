require 'nokogiri'
require 'open-uri'
require 'uri'

module Jekyll
  class RemoteHeaderTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      output = Header.partial
      if output
        output.to_s
      else
        "Something went wrong in RemoteHeaderTag"
      end
    end
  end
end

# so the reason I have put this here is so that it's not instantiated every time the site is built - as it is pulled into every page
# what needs to happen next is to adjust the CSS so that we hide the search, bag and cart functionality

# this could either be done in nokogiri or on the WATG side (as the jquery currently in core is only called once :( ))
# Tis nearly there though!
class Header
  # Well this needs a change
  URL = "http://localhost:3000/watg_blog_header"
  def self.partial
    @doc ||= Nokogiri::HTML(open(URL))
  end
end

Liquid::Template.register_tag('remote_header', Jekyll::RemoteHeaderTag)
