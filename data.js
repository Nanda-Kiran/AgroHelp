var defaultThreads = [
    {
        id: 1,
        title: "Diseases",        
        author: "User",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "User",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "User",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
    ,
    {
        id: 2,
        title: "Technology",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
            {
                author: "User",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "User",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}