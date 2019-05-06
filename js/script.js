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
        movie: React.PropTypes.object.isRequired,
    },

    render() {

        var movie = this.props.movie;

        return React.createElement('li', {},
                React.createElement(MovieTitle, {title: movie.title}),
                React.createElement(MovieDesc, {desc: movie.desc}),
                React.createElement(MovieImage, {src: movie.src})
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

    render() {
        return (
           React.createElement('p', {}, this.props.desc)
        )
    },
})

var MovieImage = React.createClass({
    propTypes: {
        src: React.PropTypes.string
    },
    render() {
        return (
            React.createElement('img', {src: this.props.src, alt: movies.title})
        )
    },
});

var MoviesList = React.createClass({
    render() {
        var moviesElements = movies.map(function (movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        })

        return React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
        )
    }
});

var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));