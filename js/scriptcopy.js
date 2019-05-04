var Movie = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
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
        var movie = this.props.movie;

        return React.createElement('li', {},
            React.createElement(MovieTitle, {
                title: movie.title
            }),
            React.createElement(MovieDesc, {
                desc: movie.desc
            }),
            React.createElement(MovieSrc, {
                src: movie.src
            })
        );
    }
});

// var Movie = React.createClass({
//     propTypes: {
//         movie: React.PropTypes.object.isRequired,
//     },
//     render() {

//         var movie = this.props.movie;

//         return React.createElement('li', {},
//                 React.createElement(MovieTitle, {title: movie.title}),
//                 React.createElement(MovieDesc, {desc: movie.desc}),
//                 React.createElement(MovieSrc, {src: movie.src})
//         );
//     }
// });

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

var MoviesList = React.createClass({
    propTypes: {
        element: React.PropTypes.object.isRequired,
    },
    
    render: function() {
        return React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów', this.props.element),
                React.createElement('ul', {}, movie.this.props.element)
        )
    }
});

var element =React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));