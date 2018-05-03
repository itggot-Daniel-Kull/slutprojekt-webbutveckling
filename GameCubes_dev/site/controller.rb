ignore (/\/_.*/)
ignore (/.*.sass-cache.*/)
layout ('layout.html.erb')
ignore ('minify.rb')

before 'main_page.html.erb' do
    @title = "Gaming time"
end

