using System;
using System.Drawing;
using System.IO;
using OpenTK;
using OpenTK.Graphics;
using OpenTK.Graphics.OpenGL;
using OpenTK.Input;

namespace Trabalho_PingPong
{
    internal class Program : GameWindow
    {
        int xBola = 0; // Posição
        int yBola = 0; // Posição
        int tBola = 20; // Tamanho
        int vBolax = 3; // Velocidade da bola no x
        int vBolay = 3; // Velocidade da bola em y

        int yJogador1 = 0; // Posição
        int yJogador2 = 0; // Posição
        int tJogador = 20; // Tamanho
        int pJogador1 = 0;
        int pJogador2 = 0;

        int xjogador1()
        {
            return -ClientSize.Width / 2 + larguraJogadores() / 2;
        }
        int xjogador2()
        {
            return ClientSize.Width / 2 - larguraJogadores() / 2;
        }

        int larguraJogadores()
        {
            return tJogador;
        }
        int alturaJogadores()
        {
            return 3 * tJogador;
        }
        protected override void OnUpdateFrame(FrameEventArgs e)
        {
            
            xBola = xBola + vBolax;
            yBola = yBola + vBolay;

            //Placar:
            Console.WriteLine("Jogador 1: " + pJogador1);
            Console.WriteLine("Jogador 2: " + pJogador2);
            /* // Lógica
            //Aqui ele detecta quando a bol chega a borda da janela
            if (xBola + tBola / 2 > ClientSize.Width / 2)
            {
                vBolax = -vBolax; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            if (xBola - tBola / 2 < -ClientSize.Width / 2)
            {
                vBolax = -vBolax; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            //
            if (yBola + tBola / 2 > ClientSize.Height / 2)
            {
                vBolay = -vBolay; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            if (yBola - tBola / 2 < -ClientSize.Height / 2)
            {
                vBolay = -vBolay; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            */

            //Aqui ele detecta quando a bol chega a borda da janela
            if (xBola + tBola / 2 > xjogador2() - larguraJogadores() / 2 && yBola - tBola / 2 < yJogador2 + alturaJogadores() / 2 && yBola + tBola / 2 > yJogador2 - alturaJogadores() / 2)
            {
                vBolax = -vBolax; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            if (xBola - tBola / 2 < xjogador1() + larguraJogadores() / 2 && yBola - tBola / 2 < yJogador1 + alturaJogadores() / 2 && yBola + tBola / 2 > yJogador1 - alturaJogadores() / 2)
            {
                vBolax = -vBolax; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            //
            if (yBola + tBola / 2 > ClientSize.Height / 2)
            {
                vBolay = -vBolay; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }
            if (yBola - tBola / 2 < -ClientSize.Height / 2)
            {
                vBolay = -vBolay; // Aqui eu inverto a velocidade da bola quando a bola tocar na borda
            }

            //  Pontos Marcados
            if (xBola < -ClientSize.Width / 2 || xBola > ClientSize.Width / 2)
            {
                //xBola = 0;
                //yBola = 0;
                if (xBola < -ClientSize.Width / 2)
                {
                    pJogador2++;
                    xBola = 0;
                    yBola = 0;
                }
                else if (xBola > ClientSize.Width / 2)
                {
                    pJogador1++;
                    xBola = 0;
                    yBola = 0;
                }
            }
            Console.WriteLine("Pontos Jogador 1: " + pJogador1);
            Console.WriteLine("Pontos Jogador 2: " + pJogador2);

            // Desenha o texto "pong" no meio da janela

            TextPrinter printer = new TextPrinter();
            printer.Begin();
            printer.Print("pong", new Font("Arial", 40.0f), Color4.White, new RectangleF(-50.0f, -10.0f, 100.0f, 100.0f), TextPrinterOptions.Default);

            // Jogadores
            // Jogador 1
            if (Keyboard.GetState().IsKeyDown(Key.Up))
            {
                yJogador1 = yJogador1 + 5;
            }
            if (Keyboard.GetState().IsKeyDown(Key.Down))
            {
                yJogador1 -= 5;
            }
            //Jogador 2
            if (Keyboard.GetState().IsKeyDown(Key.W))
            {
                yJogador2 = yJogador2 + 5;
            }
            if (Keyboard.GetState().IsKeyDown(Key.S))
            {
                yJogador2 -= 5;
            }
            // Evitar que os Jogadores saiam da tela
            if (yJogador1 + alturaJogadores() / 2 > ClientSize.Height / 2)
            {
                yJogador1 = ClientSize.Height / 2 - alturaJogadores() / 2;
            }
            if (yJogador1 - alturaJogadores() / 2 < -ClientSize.Height / 2)
            {
                yJogador1 = -ClientSize.Height / 2 + alturaJogadores() / 2;
            }

            if (yJogador2 + alturaJogadores() / 2 > ClientSize.Height / 2)
            {
                yJogador2 = ClientSize.Height / 2 - alturaJogadores() / 2;
            }
            if (yJogador2 - alturaJogadores() / 2 < -ClientSize.Height / 2)
            {
                yJogador2 = -ClientSize.Height / 2 + alturaJogadores() / 2;
            }
        }
        protected override void OnRenderFrame(FrameEventArgs e) // Onde o mundo é desenhado
        {
            //Console.WriteLine(ClientSize.Width + " " + ClientSize.Height); // Serve pra descobrir a dimenção da janela
            GL.Viewport(0,0,ClientSize.Width, ClientSize.Height);

            Matrix4 projection = Matrix4.CreateOrthographic(ClientSize.Width,ClientSize.Height, 0.0f, 1.0f);
            GL.MatrixMode(MatrixMode.Projection);
            GL.LoadMatrix(ref projection);
            GL.Clear(ClearBufferMask.ColorBufferBit);

            DesenharBola(xBola,yBola, tBola, tBola, 1.0f, 1.0f, 1.0f);
            DesenharRetangulo(xjogador1(), yJogador1, larguraJogadores(), alturaJogadores(), 1.0f, 0.0f, 0.0f);
            DesenharRetangulo(xjogador2(), yJogador2, larguraJogadores(), alturaJogadores(), 0.0f, 0.0f, 1.0f);

            //DesenharRetangulo(-310, 0, 20, 40);
            //DesenharRetangulo(310, 0, 20, 40);
            SwapBuffers();
        }
        void DesenharBola(int x, int y, int largura, int altura, float r, float g, float b)
        {
            GL.Color3(r, g, b);
            GL.Begin(PrimitiveType.Quads);
            GL.Vertex2(-0.5f * largura - x, -0.5f * altura + y);
            GL.Vertex2(0.5f * largura - x, -0.5f * altura + y);
            GL.Vertex2(0.5f * largura - x, 0.5f * altura + y);
            GL.Vertex2(-0.5f * largura - x, 0.5f * altura + y);
            GL.End();
        }
        void DesenharRetangulo(int x, int y, int largura, int altura, float r, float g, float b)
        {
            GL.Color3(r, g, b);
            GL.Begin(PrimitiveType.Quads);
            GL.Vertex2(-0.5f * largura - x, -0.5f * altura + y);  
            GL.Vertex2(0.5f * largura - x, -0.5f * altura + y);
            GL.Vertex2(0.5f * largura - x, 0.5f * altura + y);
            GL.Vertex2(-0.5f * largura - x , 0.5f * altura + y);
            GL.End();   
        }
        static void Main(string[] args)
        {
            new Program().Run();
        }
    }
}
