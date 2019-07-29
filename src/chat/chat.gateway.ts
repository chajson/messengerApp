import { SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WsResponse, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()

export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() wws: Server;

    private logger: Logger = new Logger('AppGateway');

    afterInit(server: Server ) { // log when server starts
        this.logger.log('Initialized');
    }

    handleDisconnect(client: Socket ) {
        this.logger.log(`Client disconected: ${client.id}`); // log when sb disconect
    }

    handleConnection(client: Socket, ...args: any[]) { // log when sb conect
        this.logger.log(`Client connected: ${client.id}`);
    }

    @SubscribeMessage('msgToServer')   // dercorator to handle with event
    handleMessage(client: Socket, text: string): void {
        this.wws.emit('msgToClient', text);
        // return { event: 'msgToClient', data: text };
    }

}
