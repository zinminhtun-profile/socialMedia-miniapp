import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Home from ".";
jest.mock("../api", () => ({
    useStateAPI: () => {
    return {
      graphql: {
        user: {
          username: 'lacorgi',
          profile_pic_url:'https://instagram.frgn2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/11856603_940548069324829_395577565_a.jpg?_nc_ht=instagram.frgn2-2.fna.fbcdn.net&_nc_ohc=x9xpMGBtW6kAX9zSbLt&tp=1&oh=11d9e13bcde344737f46f67d10ad4202&oe=601736B6',
          biography:'Corgi Brothers in Los Angeles \nHello@lacorgi.co\n↓ Try 10 lb of Darwin’s food with code LaCorgi2020',
          external_url:'http://www.darwinspet.com/?inf=lacorgi',
          edge_followed_by:{
            count: 504374
          },
          edge_follow:{
            count: 566
          },
          edge_owner_to_timeline_media:{
            count: 567,
            edges:[
              {
                node:{
                  shortcode:'CJfBm3eDRy2',
                  display_url:'https://instagram.frgn2-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/135013644_2757166547930483_9128297663152784898_n.jpg?_nc_ht=instagram.frgn2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=GFYtMXkEc8sAX-IkwOY&tp=1&oh=22be75aa44e484b53f65163b51192249&oe=5FF1293D',
                  edge_liked_by:{
                    count:'11949'
                  },
                  edge_media_to_comment:{
                    count:'113'
                  }
                },
                node:{
                  shortcode:'CJezdUCDxkA',
                  display_url:'https://instagram.frgn2-2.fna.fbcdn.net/v/t51.2885-15/e35/134134624_443702736809925_2382270069284390730_n.jpg?_nc_ht=instagram.frgn2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sknToQz_l78AX-QgXdU&tp=1&oh=ca6757f268c04234d95922e6b2f76330&oe=6018CF28',
                  edge_liked_by:{
                    count:13147
                  },
                  edge_media_to_comment:{
                    count:59
                  }
                },
                node:{
                  shortcode:'CJZ7HRBDVHu',
                  display_url:'https://instagram.frgn2-2.fna.fbcdn.net/v/t51.2885-15/e35/134240664_1001325337060956_2791058147868264786_n.jpg?_nc_ht=instagram.frgn2-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=qa5GuL8r_FYAX91x88s&tp=1&oh=a7bf5ed8d5320d650e7c5bb11978012d&oe=5FF19AD6',
                  edge_liked_by:{
                    count:34399
                  },
                  edge_media_to_comment:{
                    count:315
                  }
                },
                node:{
                  shortcode:'CJWyToCjFW4',
                  display_url:'https://instagram.frgn2-1.fna.fbcdn.net/v/t51.2885-15/e35/133842743_826706391510666_3065958165998460618_n.jpg?_nc_ht=instagram.frgn2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=dyGEs_jJ-2wAX-uqg9A&tp=1&oh=35e744ed1a2d9bf389f65d5896fd28c9&oe=5FF11400',
                  edge_liked_by:{
                    count:4555
                  },
                  edge_media_to_comment:{
                    count:96
                  }
                },
              }
              
            ]
          }
        }
      }
       
    };
  },
}));
describe("Home Component Test", () => {
  test("renders Home component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
          <Home /> 
      </Router>
    );
    const linkElement = screen.getByTestId("profile");
    expect(linkElement).toBeInTheDocument();
  });
});