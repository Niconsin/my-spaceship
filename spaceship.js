function my_spaceship(path) {
    var x = 0;
    var y = 0;
    var facing = "up";
    var result = "";
    //ARL
    for (i = 0; i < path.length; i++) {
        if (path[i] == "A") {
            if (facing == "up") {
                y--;
            }
            else if (facing == "right") {
                x++;
            }
            else if (facing == "down") {
                y++;
            }
            else if (facing == "left") {
                x++;
            }
        }
        else if (path[i] == "R") {
            if (facing == "up") {
                facing = "right";
            }
            else if (facing == "right") {
                facing = "down";
            }
            else if (facing == "down") {
                facing = "left";
            }
            else if (facing == "left") {
                facing = "up";
            }
        }
        else if (path[i] == "L") {
            if (facing == "up") {
                facing = "left";
            }
            else if (facing == "left") {
                facing = "down";
            }
            else if (facing == "down") {
                facing = "right";
            }
            else if (facing == "right") {
                facing = "up";
            }
        }
    }
    result = "{x: " + x + ", " + "y: " + y + ", " + "direction: " + "'" + facing + "'" + "}" ;
    return result;
}

console.log(my_spaceship("RAALALL"))