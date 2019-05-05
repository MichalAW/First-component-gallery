var movies = React.createClass({
    render: function() {
        [
            {
                id: 1,
                title: 'Harry Potter',
                desc: 'film o czarodzieju',
                src: './images/potter.jpg'
            },
            {
                id: 2,
                title: 'Król Lew',
                desc: 'Film o królu sawanny',
                src: './images/lion.jpg'
            },
            {
                id: 3,
                title: 'Władca Pierścieni',
                desc: 'film o władcy pierścieni',
                src: './images/lord.jpg'
            },
            {
                id: 4,
                title: 'Gra o tron',
                desc: 'Film o królewskich rodach',
                src: './images/game.jpg'
            }
        ];
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render() {
        var movie = this.props.movie;
        return React.createElement('li', {},
                React.createElement(MovieTitle, {title: movies.title}),
                React.createElement(MovieDesc, {desc: movies.desc}),
                React.createElement(MovieSrc, {src: movies.src})
        );
    }
});

var MovieTitle = React.createClass({

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
           React.createElement('p', {}, this.props.desc)
        )
    },
})

var moviesElements = movies.map(function (movies) {
    return React.createElement('li', {key: movies.id},
        React.createElement('h2', {}, movies.title),
        React.createElement('p', {}, movies.desc),
        React.createElement('img', {src: movies.src, alt: movies.title}),
    );
});

var MoviesList = React.createClass({
    render: function() {
        return React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, movie.moviesElements)
        )
    }
});

var element =React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));