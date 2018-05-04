ignore (/\/_.*/)
ignore (/.*.sass-cache.*/)
layout ('layout.html.erb')
ignore ('minify.rb')

before 'main_page.html.erb' do
    @title = "Gaming time"
end

before 'how_to_play.html.erb' do
    @title = "How to play"
end

before 'stuff.html.erb' do
    @title = "Random stuff"
end

before 'about.html.erb' do
    @title = "About"
end
