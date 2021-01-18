const blog_data = [
  {
    id: 1,
    title: "Why should you use React?",
    subtitle:
      "First post on the series on why use React instead. First off, components.",
    img_url: "https://source.unsplash.com/u2Ru4QBXA5Q/1200x900/",
    col_length: 4,
    tags: ["01", "NextJS", "TypeScript", "React"],
    read_length: "2 min. read.",
    content: `
        <h3> Because Components? </h3>
        <p>
        One of the best analogy that I have read/heard regarding components is that it is very similar to the concept of LEGO. At the start you have a bunch of different and sometimes similar pieces, then you connect those pieces to make a new thing.
        </p>

        <img src="https://source.unsplash.com/kn-UmDZQDjM/900x400/" class="blog-img" />
        <p>
        Combining those pieces and the actual pieces itself are much similar to React's components.
        You create pieces, you connect them together and then voila, you will have something of a new thing which involves those components you have used.
        </p>

        For example: <br />
        <p>
        In a website, there are cards, buttons, headers, and other stuff that are similar. These things are present in most if not all pages of your website.  Those components can be built once and then reused for all other pages by simply importing them and placing them within your pages.
        </p>
        <p>
        Another example would be when you are creating a dashboard. That sidebar will be available to all your webpages. You can also show those cards with bar graphs with similar settings but different data using only one component that can be reused whenever.
        </p>
        <blockquote class="bg-dark bg-gray-900 white">
        This would save us an enormous amount of time especially when maintaining and changing a setting or design of that single component across all instance of its usage.
        That would mean that you will only change one area while all of the instances will also be changed accordingly.
        </blockquote>
        <p>
        <img src="https://source.unsplash.com/ipmwlGIXzcw/900x400/" class="blog-img" />
        The possibilities start to be endless with just the components, this also means that it is rendered quite amazingly fast using a diffing algorithm.
        This would be a whole new topic so this is better explained in this <a href="https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e">link.</a>
        </p>
        `,
  },
];

export default blog_data;
