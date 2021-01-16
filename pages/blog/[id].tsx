import BlogLayout from "../../components/BlogLayout";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./blog_content.module.css";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

interface Post {
  title: string;
  tags: [];
  content: [];
}
interface Content {
  content: any;
}

const BlogPost: React.FC<Post> = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data, error } = useSWR(`/api/blog/${id}`, fetcher);

  return (
    <>
      <BlogLayout>
        <div className="hero parallax-img darken blog-post">
          <div className="full-height w-100">
            <div className="hero-body mt-5">
              <div className="content">
                {!data ? (
                  <>Loading...</>
                ) : error ? (
                  <>Error</>
                ) : (
                  <div className="mt-5 text-light">
                    <h1 className="headline-4">{data.title}</h1>
                    {data.tags.map((tag: string, idx: number) => (
                      <h4
                        className="text-light bg-black p-1 u-text-center tag mr-1"
                        key={idx}
                      >
                        {tag}
                      </h4>
                    ))}
                    <div className="text-light u-flex u-flex-column">
                      <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </BlogLayout>
    </>
  );
};

export default BlogPost;
