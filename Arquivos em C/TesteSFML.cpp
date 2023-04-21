#include<SFML/Graphics.hpp>
#include<string>

int main() {
    //Declare variables

    float dx, dy, speed = 5;
    dx = 0;
    dy = 0;

    //difficult
    float a = 1.2;

    //Creat Net
    sf::RectangleShape net(sf::Vector2f(1, 400));
    net.setOutlineColor(sf::Color::White);
    net.setPosition(150, 0);

    //Create Window
    sf::RenderWindow window(sf::VideoMode(300, 400), "Pong");
    window.setFramerateLimit(30);

    //Create a rectangle to represent the ball
    sf::RectangleShape ball(sf::Vector2f(10, 10));
    ball.setFillColor(sf::Color::White);
    ball.setPosition(100, 100);

    //Create a rectangle to represent the player
    sf::RectangleShape player(sf::Vector2f(10, 40));
    player.setFillColor(sf::Color::Red);
    player.setPosition(0, 180);

    //Create a rectangle to represent the player 2
    sf::RectangleShape player2(sf::Vector2f(10, 40));
    player2.setFillColor(sf::Color::Blue);
    player2.setPosition(290, 180);

    //Game Loop
    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed) window.close();
        }

        //Get ball and Player coordinates
        sf::Vector2f bPos = ball.getPosition();
        sf::Vector2f pPos = player.getPosition();
        sf::Vector2f pPos2 = player2.getPosition();

        if (bPos.y < 0) dy = speed;
        else if (bPos.y > 400 - 10) dy = -speed;

        //Detect collisions player1
        if (bPos.x < 0) {
            dy = 0;
            dx = 0;
            ball.setPosition(145, 200);
            player2.setPosition(290, 180);
        }
        if (bPos.y >= pPos.y && bPos.y <= pPos.y + 40)
            if (bPos.x <= pPos.x + 10)
            {
                dx = speed;  // try this dx = (rand() % 3 + 4);
            }

        //Detect collisions player2

        if (bPos.x > 290) {
            dy = 0;
            dx = 0;
            ball.setPosition(145, 200);
            player2.setPosition(290, 180);
        }
        if (bPos.y >= pPos2.y && bPos.y <= pPos2.y + 40)
            if (bPos.x > pPos2.x - 10) {
                dx = -speed * a;  // try this dx = -speed * a - (rand() % 3 + 4);
            }

        //Move the ball
        ball.move(dx, dy);

        //Input detection  - Space starts game
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Space)) {
            dx = speed;
            dy = speed;

        }
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::W))
            if (pPos.y > 0)
                player.move(0, -speed);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::S))
            if (pPos.y < 400 - 40)
                player.move(0, speed);

        //2 players use this:
        /*
         if (sf::Keyboard::isKeyPressed(sf::Keyboard::Up))
            if (pPos2.y > 0)
                player2.move(0, -speed);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::Down))
            if (pPos2.y < 400 - 40)
                player2.move(0, speed);
        */

        //AI for 1 player game
        //if you play with 2 players, erase the following:
        //
        if (bPos.x > 30 && dx > 0)
            if (pPos2.y > 0)
                if (pPos2.y > bPos.y)
                    player2.move(0, -speed * a);
        if (bPos.x > 30 && dx > 0)
            if (pPos2.y < 400 - 40)
                if (pPos2.y < bPos.y)
                    player2.move(0, speed * a);
        //until here


        //Render
        window.clear();
        window.draw(net);
        window.draw(ball);
        window.draw(player);
        window.draw(player2);
        window.display();
    }
    return 0;
}

