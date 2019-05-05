var movies = [
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

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object,
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
    propTypes: {
        title: React.PropTypes.string,
    },
    render() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string,
    },

    render: function() {
        return (
           React.createElement('p', {}, this.props.desc)
        )
    },
})

var MovieSrc = React.createClass({
    propTypes: {
        images: React.PropTypes.string,
    },
    render() {
        return (
            React.createElement('img', {}, this.props.images)
        )
    },
});

var MoviesList = React.createClass({
    render: function() {
        return React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
            React.createElement('ul', {}, moviesElements)
        )
    }
});

var moviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {key: movie.id,movie: movie})
});

var element =React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));