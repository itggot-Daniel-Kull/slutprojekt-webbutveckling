ignore (/\/_.*/)
ignore (/.*.sass-cache.*/)
layout ('layout.html.erb')
ignore ('minify.rb')

before 'index.html.erb' do
    @title = "Gaming time"
    @page = "index";
end

before 'how_to_play.html.erb' do
    @title = "How to play"
    @page = "how_to_play";
end

before 'stuff.html.erb' do
    @title = "Random stuff"
    @page = "stuff";
end

before 'about.html.erb' do
    @title = "About"
    @page = "about";
end
