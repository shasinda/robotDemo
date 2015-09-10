
var Direction = {
    NORTH: { name: 'North', x:  0, y: -1, right: 'EAST',  left: 'WEST'},
    SOUTH: { name: 'South', x:  0, y:  1, right: 'WEST',  left: 'EAST'},
    EAST:  { name: 'East',  x:  1, y:  0, right: 'SOUTH', left: 'NORTH'},
    WEST:  { name: 'West',  x: -1, y:  0, right: 'NORTH', left: 'SOUTH'}
}

exports.Robot = function Robot() {
    var self = this

    self.x = 0
    self.y = 0
    self.heading = Direction.NORTH

    self.place = function(x,y,heading) {
        self.x = x
        self.y = y
        self.heading = heading
    }

    self.right = function() {
        self.heading = Direction[self.heading.right]
    }

    self.left = function() {
        self.heading = Direction[self.heading.left]
    }

    self.move = function () {
        self.x = self.x + self.heading.x
        self.y = self.y + self.heading.y
    }

    self.report = function() {
        return [self.x, self.y, self.heading.name].join(',')
    }

}
exports.Direction = Direction