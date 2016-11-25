## angular2-seed


## Aufgabenstellung

Es soll eine Liste von Benutzern innerhalb eines Events angezeigt werden. Ein Benutzer besitzt eine Rolle und einen Namen. Die Liste der Benutzer sowie eine Liste aller verfügbarer Rollen können jeweils über einen im Projekt bereits verfügbaren Service abgefragt werden. Desweiteren soll es dem Anwender auch möglich sein die Rolle eines oder mehrerer Benutzer innerhalb der Liste ändern zu können und die Änderungen über den Service zu Persistieren.

Zusatzaufgabe: Über ein modales Fenster soll es dem Anwender ermöglicht werden neue Benutzer hinzuzufügen, die auch wiederum über den Service zu persistieren sind. Beim Anlegen eines Benutzers können dummy Daten verwendet werden.


*Ein Event und dessen Funktionsweise soll erst einmal als eine Art Black Box angenommen werden und ist für das Bestehen der Aufgabe nicht von Bedeutung.

### Aufgabe 1:
Entwerfen Sie zunächst ein visuelles Konzept. Bitte achten Sie darauf, dass auf das visuelle Konzept viel Wert gelegt wird.


### Aufgabe 2:
Implementieren Sie die obige Aufgabenstellung unter Verwendung des in Aufgabe 1 erstellten Konzepts. Hierzu verwenden Sie bitte das folgende Projekt als Basis:


Beachten Sie bitte desweiteren folgende Punkte:
Die Darstellung eines einzigen Benutzer soll über eine Komponente erfolgen.
Responsive Design (mobile, tablet, PC)
Das Event, für welches die Benutzer angezeigt werden, soll über eine parametrisierte Route ansteuerbar sein.

Kurze Dokumentation zum Service:
- getBroadcasterForEvent(event_tag:string):Promise<any>
- Liefert eine Liste von Benutzern für das Event
- getEvents():Promise<any>
- Liefert alle events
- saveEvent(event:any):Promise<any>
- Speichert ein Event
- getRoles():Promise<any>
- Liefert alle verfügbaren rollen.

## angular2-seed


## Test

Make a list of USERS within an EVENT (event as an entity). Each user has a role. A list of roles and users available can be requested within a provided service in this project.
The user of your interface should be able to see all users and make changes for the roles. Save all changes to the persistance layer with the service.

Optional: Within a modal window it should be possible to add new users to the list. Use dummy data for unknown fields.


*The entity EVENT is more a black box. You don't have to worry about its meaning.

### Task 1:
Design a visual concept for the interface. Please keep in mind that this Task is very important for us. 


### Task 2:
Implement your concept from task 1 into the provided project structure.


Please keep following aspects in mind:
The USERs should be implemented as a module.
Responsive Design (mobile, tablet, PC)
The EVENT for which the users have to be edited should be reached as a URL parameter. 
Example: localhost/#/events/eventname/users

Short documentation for the service:
- getBroadcasterForEvent(event_tag:string):Promise<any>
- Returns a list of users for the event

- getEvents():Promise<any>
- returns all events
- saveEvent(event:any):Promise<any>
- saves an event
- getRoles():Promise<any>
- returns all roles.


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script