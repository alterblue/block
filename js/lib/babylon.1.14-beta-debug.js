var BABYLON;
(function (BABYLON) {
    var Color3 = (function () {
        function Color3(r, g, b) {
            if (typeof r === "undefined") {
                r = 0;
            }
            if (typeof g === "undefined") {
                g = 0;
            }
            if (typeof b === "undefined") {
                b = 0;
            }
            this.r = r;
            this.g = g;
            this.b = b;
        }
        Color3.prototype.toString = function () {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}";
        };
        Color3.prototype.toArray = function (array, index) {
            if (index === undefined) {
                index = 0;
            }
            array[index] = this.r;
            array[index + 1] = this.g;
            array[index + 2] = this.b;
        };
        Color3.prototype.asArray = function () {
            var result = [];
            this.toArray(result, 0);
            return result;
        };
        Color3.prototype.multiply = function (otherColor) {
            return new Color3(this.r * otherColor.r, this.g * otherColor.g, this.b * otherColor.b);
        };
        Color3.prototype.multiplyToRef = function (otherColor, result) {
            result.r = this.r * otherColor.r;
            result.g = this.g * otherColor.g;
            result.b = this.b * otherColor.b;
        };
        Color3.prototype.equals = function (otherColor) {
            return otherColor && this.r === otherColor.r && this.g === otherColor.g && this.b === otherColor.b;
        };
        Color3.prototype.scale = function (scale) {
            return new Color3(this.r * scale, this.g * scale, this.b * scale);
        };
        Color3.prototype.scaleToRef = function (scale, result) {
            result.r = this.r * scale;
            result.g = this.g * scale;
            result.b = this.b * scale;
        };
        Color3.prototype.add = function (otherColor) {
            return new Color3(this.r + otherColor.r, this.g + otherColor.g, this.b + otherColor.b);
        };
        Color3.prototype.addToRef = function (otherColor, result) {
            result.r = this.r + otherColor.r;
            result.g = this.g + otherColor.g;
            result.b = this.b + otherColor.b;
        };
        Color3.prototype.subtract = function (otherColor) {
            return new Color3(this.r - otherColor.r, this.g - otherColor.g, this.b - otherColor.b);
        };
        Color3.prototype.subtractToRef = function (otherColor, result) {
            result.r = this.r - otherColor.r;
            result.g = this.g - otherColor.g;
            result.b = this.b - otherColor.b;
        };
        Color3.prototype.clone = function () {
            return new Color3(this.r, this.g, this.b);
        };
        Color3.prototype.copyFrom = function (source) {
            this.r = source.r;
            this.g = source.g;
            this.b = source.b;
        };
        Color3.prototype.copyFromFloats = function (r, g, b) {
            this.r = r;
            this.g = g;
            this.b = b;
        };
        Color3.FromArray = function (array) {
            return new Color3(array[0], array[1], array[2]);
        };
        Color3.FromInts = function (r, g, b) {
            return new Color3(r / 255.0, g / 255.0, b / 255.0);
        };
        Color3.Lerp = function (start, end, amount) {
            var r = start.r + ((end.r - start.r) * amount);
            var g = start.g + ((end.g - start.g) * amount);
            var b = start.b + ((end.b - start.b) * amount);
            return new Color3(r, g, b);
        };
        Color3.Red = function () {
            return new Color3(1, 0, 0);
        };
        Color3.Green = function () {
            return new Color3(0, 1, 0);
        };
        Color3.Blue = function () {
            return new Color3(0, 0, 1);
        };
        Color3.Black = function () {
            return new Color3(0, 0, 0);
        };
        Color3.White = function () {
            return new Color3(1, 1, 1);
        };
        Color3.Purple = function () {
            return new Color3(0.5, 0, 0.5);
        };
        Color3.Magenta = function () {
            return new Color3(1, 0, 1);
        };
        Color3.Yellow = function () {
            return new Color3(1, 1, 0);
        };
        Color3.Gray = function () {
            return new Color3(0.5, 0.5, 0.5);
        };
        return Color3;
    })();
    BABYLON.Color3 = Color3;
    var Color4 = (function () {
        function Color4(r, g, b, a) {
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        Color4.prototype.addInPlace = function (right) {
            this.r += right.r;
            this.g += right.g;
            this.b += right.b;
            this.a += right.a;
        };
        Color4.prototype.asArray = function () {
            var result = [];
            this.toArray(result, 0);
            return result;
        };
        Color4.prototype.toArray = function (array, index) {
            if (index === undefined) {
                index = 0;
            }
            array[index] = this.r;
            array[index + 1] = this.g;
            array[index + 2] = this.b;
            array[index + 3] = this.a;
        };
        Color4.prototype.add = function (right) {
            return new Color4(this.r + right.r, this.g + right.g, this.b + right.b, this.a + right.a);
        };
        Color4.prototype.subtract = function (right) {
            return new Color4(this.r - right.r, this.g - right.g, this.b - right.b, this.a - right.a);
        };
        Color4.prototype.subtractToRef = function (right, result) {
            result.r = this.r - right.r;
            result.g = this.g - right.g;
            result.b = this.b - right.b;
            result.a = this.a - right.a;
        };
        Color4.prototype.scale = function (scale) {
            return new Color4(this.r * scale, this.g * scale, this.b * scale, this.a * scale);
        };
        Color4.prototype.scaleToRef = function (scale, result) {
            result.r = this.r * scale;
            result.g = this.g * scale;
            result.b = this.b * scale;
            result.a = this.a * scale;
        };
        Color4.prototype.toString = function () {
            return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}";
        };
        Color4.prototype.clone = function () {
            return new Color4(this.r, this.g, this.b, this.a);
        };
        Color4.Lerp = function (left, right, amount) {
            var result = new Color4(0, 0, 0, 0);
            BABYLON.Color4.LerpToRef(left, right, amount, result);
            return result;
        };
        Color4.LerpToRef = function (left, right, amount, result) {
            result.r = left.r + (right.r - left.r) * amount;
            result.g = left.g + (right.g - left.g) * amount;
            result.b = left.b + (right.b - left.b) * amount;
            result.a = left.a + (right.a - left.a) * amount;
        };
        Color4.FromArray = function (array, offset) {
            if (typeof offset === "undefined") {
                offset = 0;
            }
            return new Color4(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
        };
        Color4.FromInts = function (r, g, b, a) {
            return new Color4(r / 255.0, g / 255.0, b / 255.0, a / 255.0);
        };
        return Color4;
    })();
    BABYLON.Color4 = Color4;
    var Vector2 = (function () {
        function Vector2(x, y) {
            this.x = x;
            this.y = y;
        }
        Vector2.prototype.toString = function () {
            return "{X: " + this.x + " Y:" + this.y + "}";
        };
        Vector2.prototype.toArray = function (array, index) {
            if (index === undefined) {
                index = 0;
            }
            array[index] = this.x;
            array[index + 1] = this.y;
        };
        Vector2.prototype.asArray = function () {
            var result = [];
            this.toArray(result, 0);
            return result;
        };
        Vector2.prototype.copyFrom = function (source) {
            this.x = source.x;
            this.y = source.y;
        };
        Vector2.prototype.add = function (otherVector) {
            return new Vector2(this.x + otherVector.x, this.y + otherVector.y);
        };
        Vector2.prototype.subtract = function (otherVector) {
            return new Vector2(this.x - otherVector.x, this.y - otherVector.y);
        };
        Vector2.prototype.negate = function () {
            return new Vector2(-this.x, -this.y);
        };
        Vector2.prototype.scaleInPlace = function (scale) {
            this.x *= scale;
            this.y *= scale;
        };
        Vector2.prototype.scale = function (scale) {
            return new Vector2(this.x * scale, this.y * scale);
        };
        Vector2.prototype.equals = function (otherVector) {
            return otherVector && this.x === otherVector.x && this.y === otherVector.y;
        };
        Vector2.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        Vector2.prototype.lengthSquared = function () {
            return (this.x * this.x + this.y * this.y);
        };
        Vector2.prototype.normalize = function () {
            var len = this.length();
            if (len === 0) return;
            var num = 1.0 / len;
            this.x *= num;
            this.y *= num;
        };
        Vector2.prototype.clone = function () {
            return new Vector2(this.x, this.y);
        };
        Vector2.Zero = function () {
            return new Vector2(0, 0);
        };
        Vector2.FromArray = function (array, offset) {
            if (!offset) {
                offset = 0;
            }
            return new Vector2(array[offset], array[offset + 1]);
        };
        Vector2.CatmullRom = function (value1, value2, value3, value4, amount) {
            var squared = amount * amount;
            var cubed = amount * squared;
            var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) + (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) + ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));
            var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) + (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) + ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));
            return new Vector2(x, y);
        };
        Vector2.Clamp = function (value, min, max) {
            var x = value.x;
            x = (x > max.x) ? max.x : x;
            x = (x < min.x) ? min.x : x;
            var y = value.y;
            y = (y > max.y) ? max.y : y;
            y = (y < min.y) ? min.y : y;
            return new Vector2(x, y);
        };
        Vector2.Hermite = function (value1, tangent1, value2, tangent2, amount) {
            var squared = amount * amount;
            var cubed = amount * squared;
            var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
            var part2 = (-2.0 * cubed) + (3.0 * squared);
            var part3 = (cubed - (2.0 * squared)) + amount;
            var part4 = cubed - squared;
            var x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
            var y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);
            return new Vector2(x, y);
        };
        Vector2.Lerp = function (start, end, amount) {
            var x = start.x + ((end.x - start.x) * amount);
            var y = start.y + ((end.y - start.y) * amount);
            return new Vector2(x, y);
        };
        Vector2.Dot = function (left, right) {
            return left.x * right.x + left.y * right.y;
        };
        Vector2.Normalize = function (vector) {
            var newVector = vector.clone();
            newVector.normalize();
            return newVector;
        };
        Vector2.Minimize = function (left, right) {
            var x = (left.x < right.x) ? left.x : right.x;
            var y = (left.y < right.y) ? left.y : right.y;
            return new Vector2(x, y);
        };
        Vector2.Maximize = function (left, right) {
            var x = (left.x > right.x) ? left.x : right.x;
            var y = (left.y > right.y) ? left.y : right.y;
            return new Vector2(x, y);
        };
        Vector2.Transform = function (vector, transformation) {
            var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]);
            var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]);
            return new Vector2(x, y);
        };
        Vector2.Distance = function (value1, value2) {
            return Math.sqrt(Vector2.DistanceSquared(value1, value2));
        };
        Vector2.DistanceSquared = function (value1, value2) {
            var x = value1.x - value2.x;
            var y = value1.y - value2.y;
            return (x * x) + (y * y);
        };
        return Vector2;
    })();
    BABYLON.Vector2 = Vector2;
    var Vector3 = (function () {
        function Vector3(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Vector3.prototype.toString = function () {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + "}";
        };
        Vector3.prototype.asArray = function () {
            var result = [];
            this.toArray(result, 0);
            return result;
        };
        Vector3.prototype.toArray = function (array, index) {
            if (index === undefined) {
                index = 0;
            }
            array[index] = this.x;
            array[index + 1] = this.y;
            array[index + 2] = this.z;
        };
        Vector3.prototype.addInPlace = function (otherVector) {
            this.x += otherVector.x;
            this.y += otherVector.y;
            this.z += otherVector.z;
        };
        Vector3.prototype.add = function (otherVector) {
            return new Vector3(this.x + otherVector.x, this.y + otherVector.y, this.z + otherVector.z);
        };
        Vector3.prototype.addToRef = function (otherVector, result) {
            result.x = this.x + otherVector.x;
            result.y = this.y + otherVector.y;
            result.z = this.z + otherVector.z;
        };
        Vector3.prototype.subtractInPlace = function (otherVector) {
            this.x -= otherVector.x;
            this.y -= otherVector.y;
            this.z -= otherVector.z;
        };
        Vector3.prototype.subtract = function (otherVector) {
            return new Vector3(this.x - otherVector.x, this.y - otherVector.y, this.z - otherVector.z);
        };
        Vector3.prototype.subtractToRef = function (otherVector, result) {
            result.x = this.x - otherVector.x;
            result.y = this.y - otherVector.y;
            result.z = this.z - otherVector.z;
        };
        Vector3.prototype.subtractFromFloats = function (x, y, z) {
            return new Vector3(this.x - x, this.y - y, this.z - z);
        };
        Vector3.prototype.subtractFromFloatsToRef = function (x, y, z, result) {
            result.x = this.x - x;
            result.y = this.y - y;
            result.z = this.z - z;
        };
        Vector3.prototype.negate = function () {
            return new Vector3(-this.x, -this.y, -this.z);
        };
        Vector3.prototype.scaleInPlace = function (scale) {
            this.x *= scale;
            this.y *= scale;
            this.z *= scale;
        };
        Vector3.prototype.scale = function (scale) {
            return new Vector3(this.x * scale, this.y * scale, this.z * scale);
        };
        Vector3.prototype.scaleToRef = function (scale, result) {
            result.x = this.x * scale;
            result.y = this.y * scale;
            result.z = this.z * scale;
        };
        Vector3.prototype.equals = function (otherVector) {
            return otherVector && this.x === otherVector.x && this.y === otherVector.y && this.z === otherVector.z;
        };
        Vector3.prototype.equalsWithEpsilon = function (otherVector) {
            return Math.abs(this.x - otherVector.x) < BABYLON.Engine.Epsilon && Math.abs(this.y - otherVector.y) < BABYLON.Engine.Epsilon && Math.abs(this.z - otherVector.z) < BABYLON.Engine.Epsilon;
        };
        Vector3.prototype.equalsToFloats = function (x, y, z) {
            return this.x === x && this.y === y && this.z === z;
        };
        Vector3.prototype.multiplyInPlace = function (otherVector) {
            this.x *= otherVector.x;
            this.y *= otherVector.y;
            this.z *= otherVector.z;
        };
        Vector3.prototype.multiply = function (otherVector) {
            return new Vector3(this.x * otherVector.x, this.y * otherVector.y, this.z * otherVector.z);
        };
        Vector3.prototype.multiplyToRef = function (otherVector, result) {
            result.x = this.x * otherVector.x;
            result.y = this.y * otherVector.y;
            result.z = this.z * otherVector.z;
        };
        Vector3.prototype.multiplyByFloats = function (x, y, z) {
            return new Vector3(this.x * x, this.y * y, this.z * z);
        };
        Vector3.prototype.divide = function (otherVector) {
            return new Vector3(this.x / otherVector.x, this.y / otherVector.y, this.z / otherVector.z);
        };
        Vector3.prototype.divideToRef = function (otherVector, result) {
            result.x = this.x / otherVector.x;
            result.y = this.y / otherVector.y;
            result.z = this.z / otherVector.z;
        };
        Vector3.prototype.MinimizeInPlace = function (other) {
            if (other.x < this.x) this.x = other.x;
            if (other.y < this.y) this.y = other.y;
            if (other.z < this.z) this.z = other.z;
        };
        Vector3.prototype.MaximizeInPlace = function (other) {
            if (other.x > this.x) this.x = other.x;
            if (other.y > this.y) this.y = other.y;
            if (other.z > this.z) this.z = other.z;
        };
        Vector3.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        };
        Vector3.prototype.lengthSquared = function () {
            return (this.x * this.x + this.y * this.y + this.z * this.z);
        };
        Vector3.prototype.normalize = function () {
            var len = this.length();
            if (len === 0) return;
            var num = 1.0 / len;
            this.x *= num;
            this.y *= num;
            this.z *= num;
        };
        Vector3.prototype.clone = function () {
            return new Vector3(this.x, this.y, this.z);
        };
        Vector3.prototype.copyFrom = function (source) {
            this.x = source.x;
            this.y = source.y;
            this.z = source.z;
        };
        Vector3.prototype.copyFromFloats = function (x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        };
        Vector3.FromArray = function (array, offset) {
            if (!offset) {
                offset = 0;
            }
            return new Vector3(array[offset], array[offset + 1], array[offset + 2]);
        };
        Vector3.FromArrayToRef = function (array, offset, result) {
            result.x = array[offset];
            result.y = array[offset + 1];
            result.z = array[offset + 2];
        };
        Vector3.FromFloatArrayToRef = function (array, offset, result) {
            result.x = array[offset];
            result.y = array[offset + 1];
            result.z = array[offset + 2];
        };
        Vector3.FromFloatsToRef = function (x, y, z, result) {
            result.x = x;
            result.y = y;
            result.z = z;
        };
        Vector3.Zero = function () {
            return new Vector3(0, 0, 0);
        };
        Vector3.Up = function () {
            return new Vector3(0, 1.0, 0);
        };
        Vector3.TransformCoordinates = function (vector, transformation) {
            var result = Vector3.Zero();
            Vector3.TransformCoordinatesToRef(vector, transformation, result);
            return result;
        };
        Vector3.TransformCoordinatesToRef = function (vector, transformation, result) {
            var x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]) + transformation.m[12];
            var y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]) + transformation.m[13];
            var z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]) + transformation.m[14];
            var w = (vector.x * transformation.m[3]) + (vector.y * transformation.m[7]) + (vector.z * transformation.m[11]) + transformation.m[15];
            result.x = x / w;
            result.y = y / w;
            result.z = z / w;
        };
        Vector3.TransformCoordinatesFromFloatsToRef = function (x, y, z, transformation, result) {
            var rx = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]) + transformation.m[12];
            var ry = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]) + transformation.m[13];
            var rz = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]) + transformation.m[14];
            var rw = (x * transformation.m[3]) + (y * transformation.m[7]) + (z * transformation.m[11]) + transformation.m[15];
            result.x = rx / rw;
            result.y = ry / rw;
            result.z = rz / rw;
        };
        Vector3.TransformNormal = function (vector, transformation) {
            var result = Vector3.Zero();
            Vector3.TransformNormalToRef(vector, transformation, result);
            return result;
        };
        Vector3.TransformNormalToRef = function (vector, transformation, result) {
            result.x = (vector.x * transformation.m[0]) + (vector.y * transformation.m[4]) + (vector.z * transformation.m[8]);
            result.y = (vector.x * transformation.m[1]) + (vector.y * transformation.m[5]) + (vector.z * transformation.m[9]);
            result.z = (vector.x * transformation.m[2]) + (vector.y * transformation.m[6]) + (vector.z * transformation.m[10]);
        };
        Vector3.TransformNormalFromFloatsToRef = function (x, y, z, transformation, result) {
            result.x = (x * transformation.m[0]) + (y * transformation.m[4]) + (z * transformation.m[8]);
            result.y = (x * transformation.m[1]) + (y * transformation.m[5]) + (z * transformation.m[9]);
            result.z = (x * transformation.m[2]) + (y * transformation.m[6]) + (z * transformation.m[10]);
        };
        Vector3.CatmullRom = function (value1, value2, value3, value4, amount) {
            var squared = amount * amount;
            var cubed = amount * squared;
            var x = 0.5 * ((((2.0 * value2.x) + ((-value1.x + value3.x) * amount)) + (((((2.0 * value1.x) - (5.0 * value2.x)) + (4.0 * value3.x)) - value4.x) * squared)) + ((((-value1.x + (3.0 * value2.x)) - (3.0 * value3.x)) + value4.x) * cubed));
            var y = 0.5 * ((((2.0 * value2.y) + ((-value1.y + value3.y) * amount)) + (((((2.0 * value1.y) - (5.0 * value2.y)) + (4.0 * value3.y)) - value4.y) * squared)) + ((((-value1.y + (3.0 * value2.y)) - (3.0 * value3.y)) + value4.y) * cubed));
            var z = 0.5 * ((((2.0 * value2.z) + ((-value1.z + value3.z) * amount)) + (((((2.0 * value1.z) - (5.0 * value2.z)) + (4.0 * value3.z)) - value4.z) * squared)) + ((((-value1.z + (3.0 * value2.z)) - (3.0 * value3.z)) + value4.z) * cubed));
            return new Vector3(x, y, z);
        };
        Vector3.Clamp = function (value, min, max) {
            var x = value.x;
            x = (x > max.x) ? max.x : x;
            x = (x < min.x) ? min.x : x;
            var y = value.y;
            y = (y > max.y) ? max.y : y;
            y = (y < min.y) ? min.y : y;
            var z = value.z;
            z = (z > max.z) ? max.z : z;
            z = (z < min.z) ? min.z : z;
            return new Vector3(x, y, z);
        };
        Vector3.Hermite = function (value1, tangent1, value2, tangent2, amount) {
            var squared = amount * amount;
            var cubed = amount * squared;
            var part1 = ((2.0 * cubed) - (3.0 * squared)) + 1.0;
            var part2 = (-2.0 * cubed) + (3.0 * squared);
            var part3 = (cubed - (2.0 * squared)) + amount;
            var part4 = cubed - squared;
            var x = (((value1.x * part1) + (value2.x * part2)) + (tangent1.x * part3)) + (tangent2.x * part4);
            var y = (((value1.y * part1) + (value2.y * part2)) + (tangent1.y * part3)) + (tangent2.y * part4);
            var z = (((value1.z * part1) + (value2.z * part2)) + (tangent1.z * part3)) + (tangent2.z * part4);
            return new Vector3(x, y, z);
        };
        Vector3.Lerp = function (start, end, amount) {
            var x = start.x + ((end.x - start.x) * amount);
            var y = start.y + ((end.y - start.y) * amount);
            var z = start.z + ((end.z - start.z) * amount);
            return new Vector3(x, y, z);
        };
        Vector3.Dot = function (left, right) {
            return (left.x * right.x + left.y * right.y + left.z * right.z);
        };
        Vector3.Cross = function (left, right) {
            var result = Vector3.Zero();
            Vector3.CrossToRef(left, right, result);
            return result;
        };
        Vector3.CrossToRef = function (left, right, result) {
            result.x = left.y * right.z - left.z * right.y;
            result.y = left.z * right.x - left.x * right.z;
            result.z = left.x * right.y - left.y * right.x;
        };
        Vector3.Normalize = function (vector) {
            var result = Vector3.Zero();
            Vector3.NormalizeToRef(vector, result);
            return result;
        };
        Vector3.NormalizeToRef = function (vector, result) {
            result.copyFrom(vector);
            result.normalize();
        };
        Vector3.Project = function (vector, world, transform, viewport) {
            var cw = viewport.width;
            var ch = viewport.height;
            var cx = viewport.x;
            var cy = viewport.y;
            var viewportMatrix = BABYLON.Matrix.FromValues(cw / 2.0, 0, 0, 0, 0, -ch / 2.0, 0, 0, 0, 0, 1, 0, cx + cw / 2.0, ch / 2.0 + cy, 0, 1);
            var finalMatrix = world.multiply(transform).multiply(viewportMatrix);
            return Vector3.TransformCoordinates(vector, finalMatrix);
        };
        Vector3.Unproject = function (source, viewportWidth, viewportHeight, world, view, projection) {
            var matrix = world.multiply(view).multiply(projection);
            matrix.invert();
            source.x = source.x / viewportWidth * 2 - 1;
            source.y = -(source.y / viewportHeight * 2 - 1);
            var vector = BABYLON.Vector3.TransformCoordinates(source, matrix);
            var num = source.x * matrix.m[3] + source.y * matrix.m[7] + source.z * matrix.m[11] + matrix.m[15];
            if (BABYLON.Tools.WithinEpsilon(num, 1.0)) {
                vector = vector.scale(1.0 / num);
            }
            return vector;
        };
        Vector3.Minimize = function (left, right) {
            var min = left.clone();
            min.MinimizeInPlace(right);
            return min;
        };
        Vector3.Maximize = function (left, right) {
            var max = left.clone();
            max.MaximizeInPlace(right);
            return max;
        };
        Vector3.Distance = function (value1, value2) {
            return Math.sqrt(Vector3.DistanceSquared(value1, value2));
        };
        Vector3.DistanceSquared = function (value1, value2) {
            var x = value1.x - value2.x;
            var y = value1.y - value2.y;
            var z = value1.z - value2.z;
            return (x * x) + (y * y) + (z * z);
        };
        Vector3.Center = function (value1, value2) {
            var center = value1.add(value2);
            center.scaleInPlace(0.5);
            return center;
        };
        return Vector3;
    })();
    BABYLON.Vector3 = Vector3;
    var Quaternion = (function () {
        function Quaternion(x, y, z, w) {
            if (typeof x === "undefined") {
                x = 0;
            }
            if (typeof y === "undefined") {
                y = 0;
            }
            if (typeof z === "undefined") {
                z = 0;
            }
            if (typeof w === "undefined") {
                w = 1;
            }
            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;
        }
        Quaternion.prototype.toString = function () {
            return "{X: " + this.x + " Y:" + this.y + " Z:" + this.z + " W:" + this.w + "}";
        };
        Quaternion.prototype.asArray = function () {
            return [this.x, this.y, this.z, this.w];
        };
        Quaternion.prototype.equals = function (otherQuaternion) {
            return otherQuaternion && this.x === otherQuaternion.x && this.y === otherQuaternion.y && this.z === otherQuaternion.z && this.w === otherQuaternion.w;
        };
        Quaternion.prototype.clone = function () {
            return new Quaternion(this.x, this.y, this.z, this.w);
        };
        Quaternion.prototype.copyFrom = function (other) {
            this.x = other.x;
            this.y = other.y;
            this.z = other.z;
            this.w = other.w;
        };
        Quaternion.prototype.add = function (other) {
            return new Quaternion(this.x + other.x, this.y + other.y, this.z + other.z, this.w + other.w);
        };
        Quaternion.prototype.subtract = function (other) {
            return new Quaternion(this.x - other.x, this.y - other.y, this.z - other.z, this.w - other.w);
        };
        Quaternion.prototype.scale = function (value) {
            return new Quaternion(this.x * value, this.y * value, this.z * value, this.w * value);
        };
        Quaternion.prototype.multiply = function (q1) {
            var result = new Quaternion(0, 0, 0, 1.0);
            this.multiplyToRef(q1, result);
            return result;
        };
        Quaternion.prototype.multiplyToRef = function (q1, result) {
            result.x = this.x * q1.w + this.y * q1.z - this.z * q1.y + this.w * q1.x;
            result.y = -this.x * q1.z + this.y * q1.w + this.z * q1.x + this.w * q1.y;
            result.z = this.x * q1.y - this.y * q1.x + this.z * q1.w + this.w * q1.z;
            result.w = -this.x * q1.x - this.y * q1.y - this.z * q1.z + this.w * q1.w;
        };
        Quaternion.prototype.length = function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w));
        };
        Quaternion.prototype.normalize = function () {
            var length = 1.0 / this.length();
            this.x *= length;
            this.y *= length;
            this.z *= length;
            this.w *= length;
        };
        Quaternion.prototype.toEulerAngles = function () {
            var qx = this.x;
            var qy = this.y;
            var qz = this.z;
            var qw = this.w;
            var sqx = qx * qx;
            var sqy = qy * qy;
            var sqz = qz * qz;
            var yaw = Math.atan2(2.0 * (qy * qw - qx * qz), 1.0 - 2.0 * (sqy + sqz));
            var pitch = Math.asin(2.0 * (qx * qy + qz * qw));
            var roll = Math.atan2(2.0 * (qx * qw - qy * qz), 1.0 - 2.0 * (sqx + sqz));
            var gimbaLockTest = qx * qy + qz * qw;
            if (gimbaLockTest > 0.499) {
                yaw = 2.0 * Math.atan2(qx, qw);
                roll = 0;
            } else if (gimbaLockTest < -0.499) {
                yaw = -2.0 * Math.atan2(qx, qw);
                roll = 0;
            }
            return new Vector3(pitch, yaw, roll);
        };
        Quaternion.prototype.toRotationMatrix = function (result) {
            var xx = this.x * this.x;
            var yy = this.y * this.y;
            var zz = this.z * this.z;
            var xy = this.x * this.y;
            var zw = this.z * this.w;
            var zx = this.z * this.x;
            var yw = this.y * this.w;
            var yz = this.y * this.z;
            var xw = this.x * this.w;
            result.m[0] = 1.0 - (2.0 * (yy + zz));
            result.m[1] = 2.0 * (xy + zw);
            result.m[2] = 2.0 * (zx - yw);
            result.m[3] = 0;
            result.m[4] = 2.0 * (xy - zw);
            result.m[5] = 1.0 - (2.0 * (zz + xx));
            result.m[6] = 2.0 * (yz + xw);
            result.m[7] = 0;
            result.m[8] = 2.0 * (zx + yw);
            result.m[9] = 2.0 * (yz - xw);
            result.m[10] = 1.0 - (2.0 * (yy + xx));
            result.m[11] = 0;
            result.m[12] = 0;
            result.m[13] = 0;
            result.m[14] = 0;
            result.m[15] = 1.0;
        };
        Quaternion.prototype.fromRotationMatrix = function (matrix) {
            var data = matrix.m;
            var m11 = data[0],
                m12 = data[4],
                m13 = data[8];
            var m21 = data[1],
                m22 = data[5],
                m23 = data[9];
            var m31 = data[2],
                m32 = data[6],
                m33 = data[10];
            var trace = m11 + m22 + m33;
            var s;
            if (trace > 0) {
                s = 0.5 / Math.sqrt(trace + 1.0);
                this.w = 0.25 / s;
                this.x = (m32 - m23) * s;
                this.y = (m13 - m31) * s;
                this.z = (m21 - m12) * s;
                return;
            }
            if (m11 > m22 && m11 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
                this.w = (m32 - m23) / s;
                this.x = 0.25 * s;
                this.y = (m12 + m21) / s;
                this.z = (m13 + m31) / s;
                return;
            }
            if (m22 > m33) {
                s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
                this.w = (m13 - m31) / s;
                this.x = (m12 + m21) / s;
                this.y = 0.25 * s;
                this.z = (m23 + m32) / s;
                return;
            }
            s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
            this.w = (m21 - m12) / s;
            this.x = (m13 + m31) / s;
            this.y = (m23 + m32) / s;
            this.z = 0.25 * s;
        };
        Quaternion.RotationAxis = function (axis, angle) {
            var result = new Quaternion();
            var sin = Math.sin(angle / 2);
            result.w = Math.cos(angle / 2);
            result.x = axis.x * sin;
            result.y = axis.y * sin;
            result.z = axis.z * sin;
            return result;
        };
        Quaternion.FromArray = function (array, offset) {
            if (!offset) {
                offset = 0;
            }
            return new Quaternion(array[offset], array[offset + 1], array[offset + 2], array[offset + 3]);
        };
        Quaternion.RotationYawPitchRoll = function (yaw, pitch, roll) {
            var result = new Quaternion();
            Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, result);
            return result;
        };
        Quaternion.RotationYawPitchRollToRef = function (yaw, pitch, roll, result) {
            var halfRoll = roll * 0.5;
            var halfPitch = pitch * 0.5;
            var halfYaw = yaw * 0.5;
            var sinRoll = Math.sin(halfRoll);
            var cosRoll = Math.cos(halfRoll);
            var sinPitch = Math.sin(halfPitch);
            var cosPitch = Math.cos(halfPitch);
            var sinYaw = Math.sin(halfYaw);
            var cosYaw = Math.cos(halfYaw);
            result.x = (cosYaw * sinPitch * cosRoll) + (sinYaw * cosPitch * sinRoll);
            result.y = (sinYaw * cosPitch * cosRoll) - (cosYaw * sinPitch * sinRoll);
            result.z = (cosYaw * cosPitch * sinRoll) - (sinYaw * sinPitch * cosRoll);
            result.w = (cosYaw * cosPitch * cosRoll) + (sinYaw * sinPitch * sinRoll);
        };
        Quaternion.Slerp = function (left, right, amount) {
            var num2;
            var num3;
            var num = amount;
            var num4 = (((left.x * right.x) + (left.y * right.y)) + (left.z * right.z)) + (left.w * right.w);
            var flag = false;
            if (num4 < 0) {
                flag = true;
                num4 = -num4;
            }
            if (num4 > 0.999999) {
                num3 = 1 - num;
                num2 = flag ? -num : num;
            } else {
                var num5 = Math.acos(num4);
                var num6 = (1.0 / Math.sin(num5));
                num3 = (Math.sin((1.0 - num) * num5)) * num6;
                num2 = flag ? ((-Math.sin(num * num5)) * num6) : ((Math.sin(num * num5)) * num6);
            }
            return new Quaternion((num3 * left.x) + (num2 * right.x), (num3 * left.y) + (num2 * right.y), (num3 * left.z) + (num2 * right.z), (num3 * left.w) + (num2 * right.w));
        };
        return Quaternion;
    })();
    BABYLON.Quaternion = Quaternion;
    var Matrix = (function () {
        function Matrix() {
            this.m = new Float32Array(16);
        }
        Matrix.prototype.isIdentity = function () {
            if (this.m[0] != 1.0 || this.m[5] != 1.0 || this.m[10] != 1.0 || this.m[15] != 1.0) return false;
            if (this.m[1] != 0.0 || this.m[2] != 0.0 || this.m[3] != 0.0 || this.m[4] != 0.0 || this.m[6] != 0.0 || this.m[7] != 0.0 || this.m[8] != 0.0 || this.m[9] != 0.0 || this.m[11] != 0.0 || this.m[12] != 0.0 || this.m[13] != 0.0 || this.m[14] != 0.0) return false;
            return true;
        };
        Matrix.prototype.determinant = function () {
            var temp1 = (this.m[10] * this.m[15]) - (this.m[11] * this.m[14]);
            var temp2 = (this.m[9] * this.m[15]) - (this.m[11] * this.m[13]);
            var temp3 = (this.m[9] * this.m[14]) - (this.m[10] * this.m[13]);
            var temp4 = (this.m[8] * this.m[15]) - (this.m[11] * this.m[12]);
            var temp5 = (this.m[8] * this.m[14]) - (this.m[10] * this.m[12]);
            var temp6 = (this.m[8] * this.m[13]) - (this.m[9] * this.m[12]);
            return ((((this.m[0] * (((this.m[5] * temp1) - (this.m[6] * temp2)) + (this.m[7] * temp3))) - (this.m[1] * (((this.m[4] * temp1) - (this.m[6] * temp4)) + (this.m[7] * temp5)))) + (this.m[2] * (((this.m[4] * temp2) - (this.m[5] * temp4)) + (this.m[7] * temp6)))) - (this.m[3] * (((this.m[4] * temp3) - (this.m[5] * temp5)) + (this.m[6] * temp6))));
        };
        Matrix.prototype.toArray = function () {
            return this.m;
        };
        Matrix.prototype.asArray = function () {
            return this.toArray();
        };
        Matrix.prototype.invert = function () {
            this.invertToRef(this);
        };
        Matrix.prototype.invertToRef = function (other) {
            var l1 = this.m[0];
            var l2 = this.m[1];
            var l3 = this.m[2];
            var l4 = this.m[3];
            var l5 = this.m[4];
            var l6 = this.m[5];
            var l7 = this.m[6];
            var l8 = this.m[7];
            var l9 = this.m[8];
            var l10 = this.m[9];
            var l11 = this.m[10];
            var l12 = this.m[11];
            var l13 = this.m[12];
            var l14 = this.m[13];
            var l15 = this.m[14];
            var l16 = this.m[15];
            var l17 = (l11 * l16) - (l12 * l15);
            var l18 = (l10 * l16) - (l12 * l14);
            var l19 = (l10 * l15) - (l11 * l14);
            var l20 = (l9 * l16) - (l12 * l13);
            var l21 = (l9 * l15) - (l11 * l13);
            var l22 = (l9 * l14) - (l10 * l13);
            var l23 = ((l6 * l17) - (l7 * l18)) + (l8 * l19);
            var l24 = -(((l5 * l17) - (l7 * l20)) + (l8 * l21));
            var l25 = ((l5 * l18) - (l6 * l20)) + (l8 * l22);
            var l26 = -(((l5 * l19) - (l6 * l21)) + (l7 * l22));
            var l27 = 1.0 / ((((l1 * l23) + (l2 * l24)) + (l3 * l25)) + (l4 * l26));
            var l28 = (l7 * l16) - (l8 * l15);
            var l29 = (l6 * l16) - (l8 * l14);
            var l30 = (l6 * l15) - (l7 * l14);
            var l31 = (l5 * l16) - (l8 * l13);
            var l32 = (l5 * l15) - (l7 * l13);
            var l33 = (l5 * l14) - (l6 * l13);
            var l34 = (l7 * l12) - (l8 * l11);
            var l35 = (l6 * l12) - (l8 * l10);
            var l36 = (l6 * l11) - (l7 * l10);
            var l37 = (l5 * l12) - (l8 * l9);
            var l38 = (l5 * l11) - (l7 * l9);
            var l39 = (l5 * l10) - (l6 * l9);
            other.m[0] = l23 * l27;
            other.m[4] = l24 * l27;
            other.m[8] = l25 * l27;
            other.m[12] = l26 * l27;
            other.m[1] = -(((l2 * l17) - (l3 * l18)) + (l4 * l19)) * l27;
            other.m[5] = (((l1 * l17) - (l3 * l20)) + (l4 * l21)) * l27;
            other.m[9] = -(((l1 * l18) - (l2 * l20)) + (l4 * l22)) * l27;
            other.m[13] = (((l1 * l19) - (l2 * l21)) + (l3 * l22)) * l27;
            other.m[2] = (((l2 * l28) - (l3 * l29)) + (l4 * l30)) * l27;
            other.m[6] = -(((l1 * l28) - (l3 * l31)) + (l4 * l32)) * l27;
            other.m[10] = (((l1 * l29) - (l2 * l31)) + (l4 * l33)) * l27;
            other.m[14] = -(((l1 * l30) - (l2 * l32)) + (l3 * l33)) * l27;
            other.m[3] = -(((l2 * l34) - (l3 * l35)) + (l4 * l36)) * l27;
            other.m[7] = (((l1 * l34) - (l3 * l37)) + (l4 * l38)) * l27;
            other.m[11] = -(((l1 * l35) - (l2 * l37)) + (l4 * l39)) * l27;
            other.m[15] = (((l1 * l36) - (l2 * l38)) + (l3 * l39)) * l27;
        };
        Matrix.prototype.setTranslation = function (vector3) {
            this.m[12] = vector3.x;
            this.m[13] = vector3.y;
            this.m[14] = vector3.z;
        };
        Matrix.prototype.multiply = function (other) {
            var result = new Matrix();
            this.multiplyToRef(other, result);
            return result;
        };
        Matrix.prototype.copyFrom = function (other) {
            for (var index = 0; index < 16; index++) {
                this.m[index] = other.m[index];
            }
        };
        Matrix.prototype.copyToArray = function (array, offset) {
            if (typeof offset === "undefined") {
                offset = 0;
            }
            for (var index = 0; index < 16; index++) {
                array[offset + index] = this.m[index];
            }
        };
        Matrix.prototype.multiplyToRef = function (other, result) {
            this.multiplyToArray(other, result.m, 0);
        };
        Matrix.prototype.multiplyToArray = function (other, result, offset) {
            var tm0 = this.m[0];
            var tm1 = this.m[1];
            var tm2 = this.m[2];
            var tm3 = this.m[3];
            var tm4 = this.m[4];
            var tm5 = this.m[5];
            var tm6 = this.m[6];
            var tm7 = this.m[7];
            var tm8 = this.m[8];
            var tm9 = this.m[9];
            var tm10 = this.m[10];
            var tm11 = this.m[11];
            var tm12 = this.m[12];
            var tm13 = this.m[13];
            var tm14 = this.m[14];
            var tm15 = this.m[15];
            var om0 = other.m[0];
            var om1 = other.m[1];
            var om2 = other.m[2];
            var om3 = other.m[3];
            var om4 = other.m[4];
            var om5 = other.m[5];
            var om6 = other.m[6];
            var om7 = other.m[7];
            var om8 = other.m[8];
            var om9 = other.m[9];
            var om10 = other.m[10];
            var om11 = other.m[11];
            var om12 = other.m[12];
            var om13 = other.m[13];
            var om14 = other.m[14];
            var om15 = other.m[15];
            result[offset] = tm0 * om0 + tm1 * om4 + tm2 * om8 + tm3 * om12;
            result[offset + 1] = tm0 * om1 + tm1 * om5 + tm2 * om9 + tm3 * om13;
            result[offset + 2] = tm0 * om2 + tm1 * om6 + tm2 * om10 + tm3 * om14;
            result[offset + 3] = tm0 * om3 + tm1 * om7 + tm2 * om11 + tm3 * om15;
            result[offset + 4] = tm4 * om0 + tm5 * om4 + tm6 * om8 + tm7 * om12;
            result[offset + 5] = tm4 * om1 + tm5 * om5 + tm6 * om9 + tm7 * om13;
            result[offset + 6] = tm4 * om2 + tm5 * om6 + tm6 * om10 + tm7 * om14;
            result[offset + 7] = tm4 * om3 + tm5 * om7 + tm6 * om11 + tm7 * om15;
            result[offset + 8] = tm8 * om0 + tm9 * om4 + tm10 * om8 + tm11 * om12;
            result[offset + 9] = tm8 * om1 + tm9 * om5 + tm10 * om9 + tm11 * om13;
            result[offset + 10] = tm8 * om2 + tm9 * om6 + tm10 * om10 + tm11 * om14;
            result[offset + 11] = tm8 * om3 + tm9 * om7 + tm10 * om11 + tm11 * om15;
            result[offset + 12] = tm12 * om0 + tm13 * om4 + tm14 * om8 + tm15 * om12;
            result[offset + 13] = tm12 * om1 + tm13 * om5 + tm14 * om9 + tm15 * om13;
            result[offset + 14] = tm12 * om2 + tm13 * om6 + tm14 * om10 + tm15 * om14;
            result[offset + 15] = tm12 * om3 + tm13 * om7 + tm14 * om11 + tm15 * om15;
        };
        Matrix.prototype.equals = function (value) {
            return value && (this.m[0] === value.m[0] && this.m[1] === value.m[1] && this.m[2] === value.m[2] && this.m[3] === value.m[3] && this.m[4] === value.m[4] && this.m[5] === value.m[5] && this.m[6] === value.m[6] && this.m[7] === value.m[7] && this.m[8] === value.m[8] && this.m[9] === value.m[9] && this.m[10] === value.m[10] && this.m[11] === value.m[11] && this.m[12] === value.m[12] && this.m[13] === value.m[13] && this.m[14] === value.m[14] && this.m[15] === value.m[15]);
        };
        Matrix.prototype.clone = function () {
            return Matrix.FromValues(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15]);
        };
        Matrix.FromArray = function (array, offset) {
            var result = new Matrix();
            if (!offset) {
                offset = 0;
            }
            Matrix.FromArrayToRef(array, offset, result);
            return result;
        };
        Matrix.FromArrayToRef = function (array, offset, result) {
            for (var index = 0; index < 16; index++) {
                result.m[index] = array[index + offset];
            }
        };
        Matrix.FromValuesToRef = function (initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44, result) {
            result.m[0] = initialM11;
            result.m[1] = initialM12;
            result.m[2] = initialM13;
            result.m[3] = initialM14;
            result.m[4] = initialM21;
            result.m[5] = initialM22;
            result.m[6] = initialM23;
            result.m[7] = initialM24;
            result.m[8] = initialM31;
            result.m[9] = initialM32;
            result.m[10] = initialM33;
            result.m[11] = initialM34;
            result.m[12] = initialM41;
            result.m[13] = initialM42;
            result.m[14] = initialM43;
            result.m[15] = initialM44;
        };
        Matrix.FromValues = function (initialM11, initialM12, initialM13, initialM14, initialM21, initialM22, initialM23, initialM24, initialM31, initialM32, initialM33, initialM34, initialM41, initialM42, initialM43, initialM44) {
            var result = new Matrix();
            result.m[0] = initialM11;
            result.m[1] = initialM12;
            result.m[2] = initialM13;
            result.m[3] = initialM14;
            result.m[4] = initialM21;
            result.m[5] = initialM22;
            result.m[6] = initialM23;
            result.m[7] = initialM24;
            result.m[8] = initialM31;
            result.m[9] = initialM32;
            result.m[10] = initialM33;
            result.m[11] = initialM34;
            result.m[12] = initialM41;
            result.m[13] = initialM42;
            result.m[14] = initialM43;
            result.m[15] = initialM44;
            return result;
        };
        Matrix.Identity = function () {
            return Matrix.FromValues(1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0);
        };
        Matrix.IdentityToRef = function (result) {
            Matrix.FromValuesToRef(1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0, result);
        };
        Matrix.Zero = function () {
            return Matrix.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        };
        Matrix.RotationX = function (angle) {
            var result = new Matrix();
            Matrix.RotationXToRef(angle, result);
            return result;
        };
        Matrix.RotationXToRef = function (angle, result) {
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            result.m[0] = 1.0;
            result.m[15] = 1.0;
            result.m[5] = c;
            result.m[10] = c;
            result.m[9] = -s;
            result.m[6] = s;
            result.m[1] = 0;
            result.m[2] = 0;
            result.m[3] = 0;
            result.m[4] = 0;
            result.m[7] = 0;
            result.m[8] = 0;
            result.m[11] = 0;
            result.m[12] = 0;
            result.m[13] = 0;
            result.m[14] = 0;
        };
        Matrix.RotationY = function (angle) {
            var result = new Matrix();
            Matrix.RotationYToRef(angle, result);
            return result;
        };
        Matrix.RotationYToRef = function (angle, result) {
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            result.m[5] = 1.0;
            result.m[15] = 1.0;
            result.m[0] = c;
            result.m[2] = -s;
            result.m[8] = s;
            result.m[10] = c;
            result.m[1] = 0;
            result.m[3] = 0;
            result.m[4] = 0;
            result.m[6] = 0;
            result.m[7] = 0;
            result.m[9] = 0;
            result.m[11] = 0;
            result.m[12] = 0;
            result.m[13] = 0;
            result.m[14] = 0;
        };
        Matrix.RotationZ = function (angle) {
            var result = new Matrix();
            Matrix.RotationZToRef(angle, result);
            return result;
        };
        Matrix.RotationZToRef = function (angle, result) {
            var s = Math.sin(angle);
            var c = Math.cos(angle);
            result.m[10] = 1.0;
            result.m[15] = 1.0;
            result.m[0] = c;
            result.m[1] = s;
            result.m[4] = -s;
            result.m[5] = c;
            result.m[2] = 0;
            result.m[3] = 0;
            result.m[6] = 0;
            result.m[7] = 0;
            result.m[8] = 0;
            result.m[9] = 0;
            result.m[11] = 0;
            result.m[12] = 0;
            result.m[13] = 0;
            result.m[14] = 0;
        };
        Matrix.RotationAxis = function (axis, angle) {
            var s = Math.sin(-angle);
            var c = Math.cos(-angle);
            var c1 = 1 - c;
            axis.normalize();
            var result = Matrix.Zero();
            result.m[0] = (axis.x * axis.x) * c1 + c;
            result.m[1] = (axis.x * axis.y) * c1 - (axis.z * s);
            result.m[2] = (axis.x * axis.z) * c1 + (axis.y * s);
            result.m[3] = 0.0;
            result.m[4] = (axis.y * axis.x) * c1 + (axis.z * s);
            result.m[5] = (axis.y * axis.y) * c1 + c;
            result.m[6] = (axis.y * axis.z) * c1 - (axis.x * s);
            result.m[7] = 0.0;
            result.m[8] = (axis.z * axis.x) * c1 - (axis.y * s);
            result.m[9] = (axis.z * axis.y) * c1 + (axis.x * s);
            result.m[10] = (axis.z * axis.z) * c1 + c;
            result.m[11] = 0.0;
            result.m[15] = 1.0;
            return result;
        };
        Matrix.RotationYawPitchRoll = function (yaw, pitch, roll) {
            var result = new Matrix();
            Matrix.RotationYawPitchRollToRef(yaw, pitch, roll, result);
            return result;
        };
        Matrix.RotationYawPitchRollToRef = function (yaw, pitch, roll, result) {
            Quaternion.RotationYawPitchRollToRef(yaw, pitch, roll, this._tempQuaternion);
            this._tempQuaternion.toRotationMatrix(result);
        };
        Matrix.Scaling = function (x, y, z) {
            var result = Matrix.Zero();
            Matrix.ScalingToRef(x, y, z, result);
            return result;
        };
        Matrix.ScalingToRef = function (x, y, z, result) {
            result.m[0] = x;
            result.m[1] = 0;
            result.m[2] = 0;
            result.m[3] = 0;
            result.m[4] = 0;
            result.m[5] = y;
            result.m[6] = 0;
            result.m[7] = 0;
            result.m[8] = 0;
            result.m[9] = 0;
            result.m[10] = z;
            result.m[11] = 0;
            result.m[12] = 0;
            result.m[13] = 0;
            result.m[14] = 0;
            result.m[15] = 1.0;
        };
        Matrix.Translation = function (x, y, z) {
            var result = Matrix.Identity();
            Matrix.TranslationToRef(x, y, z, result);
            return result;
        };
        Matrix.TranslationToRef = function (x, y, z, result) {
            Matrix.FromValuesToRef(1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0, 0, x, y, z, 1.0, result);
        };
        Matrix.LookAtLH = function (eye, target, up) {
            var result = Matrix.Zero();
            Matrix.LookAtLHToRef(eye, target, up, result);
            return result;
        };
        Matrix.LookAtLHToRef = function (eye, target, up, result) {
            target.subtractToRef(eye, this._zAxis);
            this._zAxis.normalize();
            Vector3.CrossToRef(up, this._zAxis, this._xAxis);
            this._xAxis.normalize();
            Vector3.CrossToRef(this._zAxis, this._xAxis, this._yAxis);
            this._yAxis.normalize();
            var ex = -Vector3.Dot(this._xAxis, eye);
            var ey = -Vector3.Dot(this._yAxis, eye);
            var ez = -Vector3.Dot(this._zAxis, eye);
            return Matrix.FromValuesToRef(this._xAxis.x, this._yAxis.x, this._zAxis.x, 0, this._xAxis.y, this._yAxis.y, this._zAxis.y, 0, this._xAxis.z, this._yAxis.z, this._zAxis.z, 0, ex, ey, ez, 1, result);
        };
        Matrix.OrthoLH = function (width, height, znear, zfar) {
            var hw = 2.0 / width;
            var hh = 2.0 / height;
            var id = 1.0 / (zfar - znear);
            var nid = znear / (znear - zfar);
            return Matrix.FromValues(hw, 0, 0, 0, 0, hh, 0, 0, 0, 0, id, 0, 0, 0, nid, 1);
        };
        Matrix.OrthoOffCenterLH = function (left, right, bottom, top, znear, zfar) {
            var matrix = Matrix.Zero();
            Matrix.OrthoOffCenterLHToRef(left, right, bottom, top, znear, zfar, matrix);
            return matrix;
        };
        Matrix.OrthoOffCenterLHToRef = function (left, right, bottom, top, znear, zfar, result) {
            result.m[0] = 2.0 / (right - left);
            result.m[1] = result.m[2] = result.m[3] = 0;
            result.m[5] = 2.0 / (top - bottom);
            result.m[4] = result.m[6] = result.m[7] = 0;
            result.m[10] = -1.0 / (znear - zfar);
            result.m[8] = result.m[9] = result.m[11] = 0;
            result.m[12] = (left + right) / (left - right);
            result.m[13] = (top + bottom) / (bottom - top);
            result.m[14] = znear / (znear - zfar);
            result.m[15] = 1.0;
        };
        Matrix.PerspectiveLH = function (width, height, znear, zfar) {
            var matrix = Matrix.Zero();
            matrix.m[0] = (2.0 * znear) / width;
            matrix.m[1] = matrix.m[2] = matrix.m[3] = 0.0;
            matrix.m[5] = (2.0 * znear) / height;
            matrix.m[4] = matrix.m[6] = matrix.m[7] = 0.0;
            matrix.m[10] = -zfar / (znear - zfar);
            matrix.m[8] = matrix.m[9] = 0.0;
            matrix.m[11] = 1.0;
            matrix.m[12] = matrix.m[13] = matrix.m[15] = 0.0;
            matrix.m[14] = (znear * zfar) / (znear - zfar);
            return matrix;
        };
        Matrix.PerspectiveFovLH = function (fov, aspect, znear, zfar) {
            var matrix = Matrix.Zero();
            Matrix.PerspectiveFovLHToRef(fov, aspect, znear, zfar, matrix);
            return matrix;
        };
        Matrix.PerspectiveFovLHToRef = function (fov, aspect, znear, zfar, result) {
            var tan = 1.0 / (Math.tan(fov * 0.5));
            result.m[0] = tan / aspect;
            result.m[1] = result.m[2] = result.m[3] = 0.0;
            result.m[5] = tan;
            result.m[4] = result.m[6] = result.m[7] = 0.0;
            result.m[8] = result.m[9] = 0.0;
            result.m[10] = -zfar / (znear - zfar);
            result.m[11] = 1.0;
            result.m[12] = result.m[13] = result.m[15] = 0.0;
            result.m[14] = (znear * zfar) / (znear - zfar);
        };
        Matrix.GetFinalMatrix = function (viewport, world, view, projection, zmin, zmax) {
            var cw = viewport.width;
            var ch = viewport.height;
            var cx = viewport.x;
            var cy = viewport.y;
            var viewportMatrix = Matrix.FromValues(cw / 2.0, 0, 0, 0, 0, -ch / 2.0, 0, 0, 0, 0, zmax - zmin, 0, cx + cw / 2.0, ch / 2.0 + cy, zmin, 1);
            return world.multiply(view).multiply(projection).multiply(viewportMatrix);
        };
        Matrix.Transpose = function (matrix) {
            var result = new Matrix();
            result.m[0] = matrix.m[0];
            result.m[1] = matrix.m[4];
            result.m[2] = matrix.m[8];
            result.m[3] = matrix.m[12];
            result.m[4] = matrix.m[1];
            result.m[5] = matrix.m[5];
            result.m[6] = matrix.m[9];
            result.m[7] = matrix.m[13];
            result.m[8] = matrix.m[2];
            result.m[9] = matrix.m[6];
            result.m[10] = matrix.m[10];
            result.m[11] = matrix.m[14];
            result.m[12] = matrix.m[3];
            result.m[13] = matrix.m[7];
            result.m[14] = matrix.m[11];
            result.m[15] = matrix.m[15];
            return result;
        };
        Matrix.Reflection = function (plane) {
            var matrix = new Matrix();
            Matrix.ReflectionToRef(plane, matrix);
            return matrix;
        };
        Matrix.ReflectionToRef = function (plane, result) {
            plane.normalize();
            var x = plane.normal.x;
            var y = plane.normal.y;
            var z = plane.normal.z;
            var temp = -2 * x;
            var temp2 = -2 * y;
            var temp3 = -2 * z;
            result.m[0] = (temp * x) + 1;
            result.m[1] = temp2 * x;
            result.m[2] = temp3 * x;
            result.m[3] = 0.0;
            result.m[4] = temp * y;
            result.m[5] = (temp2 * y) + 1;
            result.m[6] = temp3 * y;
            result.m[7] = 0.0;
            result.m[8] = temp * z;
            result.m[9] = temp2 * z;
            result.m[10] = (temp3 * z) + 1;
            result.m[11] = 0.0;
            result.m[12] = temp * plane.d;
            result.m[13] = temp2 * plane.d;
            result.m[14] = temp3 * plane.d;
            result.m[15] = 1.0;
        };
        Matrix._tempQuaternion = new Quaternion();
        Matrix._xAxis = Vector3.Zero();
        Matrix._yAxis = Vector3.Zero();
        Matrix._zAxis = Vector3.Zero();
        return Matrix;
    })();
    BABYLON.Matrix = Matrix;
    var Plane = (function () {
        function Plane(a, b, c, d) {
            this.normal = new Vector3(a, b, c);
            this.d = d;
        }
        Plane.prototype.asArray = function () {
            return [this.normal.x, this.normal.y, this.normal.z, this.d];
        };
        Plane.prototype.clone = function () {
            return new Plane(this.normal.x, this.normal.y, this.normal.z, this.d);
        };
        Plane.prototype.normalize = function () {
            var norm = (Math.sqrt((this.normal.x * this.normal.x) + (this.normal.y * this.normal.y) + (this.normal.z * this.normal.z)));
            var magnitude = 0;
            if (norm != 0) {
                magnitude = 1.0 / norm;
            }
            this.normal.x *= magnitude;
            this.normal.y *= magnitude;
            this.normal.z *= magnitude;
            this.d *= magnitude;
        };
        Plane.prototype.transform = function (transformation) {
            var transposedMatrix = BABYLON.Matrix.Transpose(transformation);
            var x = this.normal.x;
            var y = this.normal.y;
            var z = this.normal.z;
            var d = this.d;
            var normalX = (((x * transposedMatrix.m[0]) + (y * transposedMatrix.m[1])) + (z * transposedMatrix.m[2])) + (d * transposedMatrix.m[3]);
            var normalY = (((x * transposedMatrix.m[4]) + (y * transposedMatrix.m[5])) + (z * transposedMatrix.m[6])) + (d * transposedMatrix.m[7]);
            var normalZ = (((x * transposedMatrix.m[8]) + (y * transposedMatrix.m[9])) + (z * transposedMatrix.m[10])) + (d * transposedMatrix.m[11]);
            var finalD = (((x * transposedMatrix.m[12]) + (y * transposedMatrix.m[13])) + (z * transposedMatrix.m[14])) + (d * transposedMatrix.m[15]);
            return new BABYLON.Plane(normalX, normalY, normalZ, finalD);
        };
        Plane.prototype.dotCoordinate = function (point) {
            return ((((this.normal.x * point.x) + (this.normal.y * point.y)) + (this.normal.z * point.z)) + this.d);
        };
        Plane.prototype.copyFromPoints = function (point1, point2, point3) {
            var x1 = point2.x - point1.x;
            var y1 = point2.y - point1.y;
            var z1 = point2.z - point1.z;
            var x2 = point3.x - point1.x;
            var y2 = point3.y - point1.y;
            var z2 = point3.z - point1.z;
            var yz = (y1 * z2) - (z1 * y2);
            var xz = (z1 * x2) - (x1 * z2);
            var xy = (x1 * y2) - (y1 * x2);
            var pyth = (Math.sqrt((yz * yz) + (xz * xz) + (xy * xy)));
            var invPyth;
            if (pyth != 0) {
                invPyth = 1.0 / pyth;
            } else {
                invPyth = 0;
            }
            this.normal.x = yz * invPyth;
            this.normal.y = xz * invPyth;
            this.normal.z = xy * invPyth;
            this.d = -((this.normal.x * point1.x) + (this.normal.y * point1.y) + (this.normal.z * point1.z));
        };
        Plane.prototype.isFrontFacingTo = function (direction, epsilon) {
            var dot = Vector3.Dot(this.normal, direction);
            return (dot <= epsilon);
        };
        Plane.prototype.signedDistanceTo = function (point) {
            return Vector3.Dot(point, this.normal) + this.d;
        };
        Plane.FromArray = function (array) {
            return new BABYLON.Plane(array[0], array[1], array[2], array[3]);
        };
        Plane.FromPoints = function (point1, point2, point3) {
            var result = new BABYLON.Plane(0, 0, 0, 0);
            result.copyFromPoints(point1, point2, point3);
            return result;
        };
        Plane.FromPositionAndNormal = function (origin, normal) {
            var result = new BABYLON.Plane(0, 0, 0, 0);
            normal.normalize();
            result.normal = normal;
            result.d = -(normal.x * origin.x + normal.y * origin.y + normal.z * origin.z);
            return result;
        };
        Plane.SignedDistanceToPlaneFromPositionAndNormal = function (origin, normal, point) {
            var d = -(normal.x * origin.x + normal.y * origin.y + normal.z * origin.z);
            return Vector3.Dot(point, normal) + d;
        };
        return Plane;
    })();
    BABYLON.Plane = Plane;
    var Viewport = (function () {
        function Viewport(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        Viewport.prototype.toGlobal = function (engine) {
            var width = engine.getRenderWidth();
            var height = engine.getRenderHeight();
            return new Viewport(this.x * width, this.y * height, this.width * width, this.height * height);
        };
        return Viewport;
    })();
    BABYLON.Viewport = Viewport;
    var Frustum = (function () {
        function Frustum() {}
        Frustum.GetPlanes = function (transform) {
            var frustumPlanes = [];
            for (var index = 0; index < 6; index++) {
                frustumPlanes.push(new Plane(0, 0, 0, 0));
            }
            Frustum.GetPlanesToRef(transform, frustumPlanes);
            return frustumPlanes;
        };
        Frustum.GetPlanesToRef = function (transform, frustumPlanes) {
            frustumPlanes[0].normal.x = transform.m[3] + transform.m[2];
            frustumPlanes[0].normal.y = transform.m[7] + transform.m[6];
            frustumPlanes[0].normal.z = transform.m[10] + transform.m[10];
            frustumPlanes[0].d = transform.m[15] + transform.m[14];
            frustumPlanes[0].normalize();
            frustumPlanes[1].normal.x = transform.m[3] - transform.m[2];
            frustumPlanes[1].normal.y = transform.m[7] - transform.m[6];
            frustumPlanes[1].normal.z = transform.m[11] - transform.m[10];
            frustumPlanes[1].d = transform.m[15] - transform.m[14];
            frustumPlanes[1].normalize();
            frustumPlanes[2].normal.x = transform.m[3] + transform.m[0];
            frustumPlanes[2].normal.y = transform.m[7] + transform.m[4];
            frustumPlanes[2].normal.z = transform.m[11] + transform.m[8];
            frustumPlanes[2].d = transform.m[15] + transform.m[12];
            frustumPlanes[2].normalize();
            frustumPlanes[3].normal.x = transform.m[3] - transform.m[0];
            frustumPlanes[3].normal.y = transform.m[7] - transform.m[4];
            frustumPlanes[3].normal.z = transform.m[11] - transform.m[8];
            frustumPlanes[3].d = transform.m[15] - transform.m[12];
            frustumPlanes[3].normalize();
            frustumPlanes[4].normal.x = transform.m[3] - transform.m[1];
            frustumPlanes[4].normal.y = transform.m[7] - transform.m[5];
            frustumPlanes[4].normal.z = transform.m[11] - transform.m[9];
            frustumPlanes[4].d = transform.m[15] - transform.m[13];
            frustumPlanes[4].normalize();
            frustumPlanes[5].normal.x = transform.m[3] + transform.m[1];
            frustumPlanes[5].normal.y = transform.m[7] + transform.m[5];
            frustumPlanes[5].normal.z = transform.m[11] + transform.m[9];
            frustumPlanes[5].d = transform.m[15] + transform.m[13];
            frustumPlanes[5].normalize();
        };
        return Frustum;
    })();
    BABYLON.Frustum = Frustum;
    var Ray = (function () {
        function Ray(origin, direction) {
            this.origin = origin;
            this.direction = direction;
        }
        Ray.prototype.intersectsBoxMinMax = function (minimum, maximum) {
            var d = 0.0;
            var maxValue = Number.MAX_VALUE;
            if (Math.abs(this.direction.x) < 0.0000001) {
                if (this.origin.x < minimum.x || this.origin.x > maximum.x) {
                    return false;
                }
            } else {
                var inv = 1.0 / this.direction.x;
                var min = (minimum.x - this.origin.x) * inv;
                var max = (maximum.x - this.origin.x) * inv;
                if (min > max) {
                    var temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            if (Math.abs(this.direction.y) < 0.0000001) {
                if (this.origin.y < minimum.y || this.origin.y > maximum.y) {
                    return false;
                }
            } else {
                inv = 1.0 / this.direction.y;
                min = (minimum.y - this.origin.y) * inv;
                max = (maximum.y - this.origin.y) * inv;
                if (min > max) {
                    temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            if (Math.abs(this.direction.z) < 0.0000001) {
                if (this.origin.z < minimum.z || this.origin.z > maximum.z) {
                    return false;
                }
            } else {
                inv = 1.0 / this.direction.z;
                min = (minimum.z - this.origin.z) * inv;
                max = (maximum.z - this.origin.z) * inv;
                if (min > max) {
                    temp = min;
                    min = max;
                    max = temp;
                }
                d = Math.max(min, d);
                maxValue = Math.min(max, maxValue);
                if (d > maxValue) {
                    return false;
                }
            }
            return true;
        };
        Ray.prototype.intersectsBox = function (box) {
            return this.intersectsBoxMinMax(box.minimum, box.maximum);
        };
        Ray.prototype.intersectsSphere = function (sphere) {
            var x = sphere.center.x - this.origin.x;
            var y = sphere.center.y - this.origin.y;
            var z = sphere.center.z - this.origin.z;
            var pyth = (x * x) + (y * y) + (z * z);
            var rr = sphere.radius * sphere.radius;
            if (pyth <= rr) {
                return true;
            }
            var dot = (x * this.direction.x) + (y * this.direction.y) + (z * this.direction.z);
            if (dot < 0.0) {
                return false;
            }
            var temp = pyth - (dot * dot);
            return temp <= rr;
        };
        Ray.prototype.intersectsTriangle = function (vertex0, vertex1, vertex2) {
            if (!this._edge1) {
                this._edge1 = BABYLON.Vector3.Zero();
                this._edge2 = BABYLON.Vector3.Zero();
                this._pvec = BABYLON.Vector3.Zero();
                this._tvec = BABYLON.Vector3.Zero();
                this._qvec = BABYLON.Vector3.Zero();
            }
            vertex1.subtractToRef(vertex0, this._edge1);
            vertex2.subtractToRef(vertex0, this._edge2);
            BABYLON.Vector3.CrossToRef(this.direction, this._edge2, this._pvec);
            var det = Vector3.Dot(this._edge1, this._pvec);
            if (det === 0) {
                return null;
            }
            var invdet = 1 / det;
            this.origin.subtractToRef(vertex0, this._tvec);
            var bu = Vector3.Dot(this._tvec, this._pvec) * invdet;
            if (bu < 0 || bu > 1.0) {
                return null;
            }
            Vector3.CrossToRef(this._tvec, this._edge1, this._qvec);
            var bv = Vector3.Dot(this.direction, this._qvec) * invdet;
            if (bv < 0 || bu + bv > 1.0) {
                return null;
            }
            return new BABYLON.IntersectionInfo(bu, bv, Vector3.Dot(this._edge2, this._qvec) * invdet);
        };
        Ray.CreateNew = function (x, y, viewportWidth, viewportHeight, world, view, projection) {
            var start = BABYLON.Vector3.Unproject(new BABYLON.Vector3(x, y, 0), viewportWidth, viewportHeight, world, view, projection);
            var end = BABYLON.Vector3.Unproject(new BABYLON.Vector3(x, y, 1), viewportWidth, viewportHeight, world, view, projection);
            var direction = end.subtract(start);
            direction.normalize();
            return new Ray(start, direction);
        };
        Ray.Transform = function (ray, matrix) {
            var newOrigin = BABYLON.Vector3.TransformCoordinates(ray.origin, matrix);
            var newDirection = BABYLON.Vector3.TransformNormal(ray.direction, matrix);
            return new Ray(newOrigin, newDirection);
        };
        return Ray;
    })();
    BABYLON.Ray = Ray;
    (function (Space) {
        Space[Space["LOCAL"] = 0] = "LOCAL";
        Space[Space["WORLD"] = 1] = "WORLD";
    })(BABYLON.Space || (BABYLON.Space = {}));
    var Space = BABYLON.Space;
    var Axis = (function () {
        function Axis() {}
        Axis.X = new BABYLON.Vector3(1, 0, 0);
        Axis.Y = new BABYLON.Vector3(0, 1, 0);
        Axis.Z = new BABYLON.Vector3(0, 0, 1);
        return Axis;
    })();
    BABYLON.Axis = Axis;;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var screenshotCanvas;
    var fpsRange = 60;
    var previousFramesDuration = [];
    var fps = 60;
    var deltaTime = 0;
    var cloneValue = function (source, destinationObject) {
            if (!source) return null;
            if (source instanceof BABYLON.Mesh) {
                return null;
            }
            if (source instanceof BABYLON.SubMesh) {
                return source.clone(destinationObject);
            } else if (source.clone) {
                return source.clone();
            }
            return null;
        };
    var Tools = (function () {
        function Tools() {}
        Tools.GetFilename = function (path) {
            var index = path.lastIndexOf("/");
            if (index < 0) return path;
            return path.substring(index + 1);
        };
        Tools.GetDOMTextContent = function (element) {
            var result = "";
            var child = element.firstChild;
            while (child) {
                if (child.nodeType == 3) {
                    result += child.textContent;
                }
                child = child.nextSibling;
            }
            return result;
        };
        Tools.ToDegrees = function (angle) {
            return angle * 180 / Math.PI;
        };
        Tools.ToRadians = function (angle) {
            return angle * Math.PI / 180;
        };
        Tools.ExtractMinAndMaxIndexed = function (positions, indices, indexStart, indexCount) {
            var minimum = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            var maximum = new BABYLON.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
            for (var index = indexStart; index < indexStart + indexCount; index++) {
                var current = new BABYLON.Vector3(positions[indices[index] * 3], positions[indices[index] * 3 + 1], positions[indices[index] * 3 + 2]);
                minimum = BABYLON.Vector3.Minimize(current, minimum);
                maximum = BABYLON.Vector3.Maximize(current, maximum);
            }
            return {
                minimum: minimum,
                maximum: maximum
            };
        };
        Tools.ExtractMinAndMax = function (positions, start, count) {
            var minimum = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            var maximum = new BABYLON.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
            for (var index = start; index < start + count; index++) {
                var current = new BABYLON.Vector3(positions[index * 3], positions[index * 3 + 1], positions[index * 3 + 2]);
                minimum = BABYLON.Vector3.Minimize(current, minimum);
                maximum = BABYLON.Vector3.Maximize(current, maximum);
            }
            return {
                minimum: minimum,
                maximum: maximum
            };
        };
        Tools.MakeArray = function (obj, allowsNullUndefined) {
            if (allowsNullUndefined !== true && (obj === undefined || obj == null)) return undefined;
            return Array.isArray(obj) ? obj : [obj];
        };
        Tools.GetPointerPrefix = function () {
            var eventPrefix = "pointer";
            if (!navigator.pointerEnabled) {
                eventPrefix = "mouse";
            }
            return eventPrefix;
        };
        Tools.QueueNewFrame = function (func) {
            if (window.requestAnimationFrame) window.requestAnimationFrame(func);
            else if (window.msRequestAnimationFrame) window.msRequestAnimationFrame(func);
            else if (window.webkitRequestAnimationFrame) window.webkitRequestAnimationFrame(func);
            else if (window.mozRequestAnimationFrame) window.mozRequestAnimationFrame(func);
            else if (window.oRequestAnimationFrame) window.oRequestAnimationFrame(func);
            else {
                window.setTimeout(func, 16);
            }
        };
        Tools.RequestFullscreen = function (element) {
            if (element.requestFullscreen) element.requestFullscreen();
            else if (element.msRequestFullscreen) element.msRequestFullscreen();
            else if (element.webkitRequestFullscreen) element.webkitRequestFullscreen();
            else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
        };
        Tools.ExitFullscreen = function () {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msCancelFullScreen) {
                document.msCancelFullScreen();
            }
        };
        Tools.CleanUrl = function (url) {
            url = url.replace(/#/mg, "%23");
            return url;
        };
        Tools.LoadImage = function (url, onload, onerror, database) {
            url = Tools.CleanUrl(url);
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function () {
                onload(img);
            };
            img.onerror = function (err) {
                onerror(img, err);
            };
            var noIndexedDB = function () {
                    img.src = url;
                };
            var loadFromIndexedDB = function () {
                    database.loadImageFromDB(url, img);
                };
            if (database && database.enableTexturesOffline && BABYLON.Database.isUASupportingBlobStorage) {
                database.openAsync(loadFromIndexedDB, noIndexedDB);
            } else {
                if (url.indexOf("file:") === -1) {
                    noIndexedDB();
                } else {
                    try {
                        var textureName = url.substring(5);
                        var blobURL;
                        try {
                            blobURL = URL.createObjectURL(BABYLON.FilesInput.FilesTextures[textureName], {
                                oneTimeOnly: true
                            });
                        } catch (ex) {
                            blobURL = URL.createObjectURL(BABYLON.FilesInput.FilesTextures[textureName]);
                        }
                        img.src = blobURL;
                    } catch (e) {
                        Tools.Log("Error while trying to load texture: " + textureName);
                        img.src = null;
                    }
                }
            }
            return img;
        };
        Tools.LoadFile = function (url, callback, progressCallBack, database, useArrayBuffer) {
            url = Tools.CleanUrl(url);
            var noIndexedDB = function () {
                    var request = new XMLHttpRequest();
                    var loadUrl = Tools.BaseUrl + url;
                    request.open('GET', loadUrl, true);
                    if (useArrayBuffer) {
                        request.responseType = "arraybuffer";
                    }
                    request.onprogress = progressCallBack;
                    request.onreadystatechange = function () {
                        if (request.readyState == 4) {
                            if (request.status == 200 || BABYLON.Tools.ValidateXHRData(request, !useArrayBuffer ? 1 : 6)) {
                                callback(!useArrayBuffer ? request.responseText : request.response);
                            } else {
                                throw new Error("Error status: " + request.status + " - Unable to load " + loadUrl);
                            }
                        }
                    };
                    request.send(null);
                };
            var loadFromIndexedDB = function () {
                    database.loadFileFromDB(url, callback, progressCallBack, noIndexedDB, useArrayBuffer);
                };
            if (url.indexOf("file:") !== -1) {
                var fileName = url.substring(5);
                BABYLON.Tools.ReadFile(BABYLON.FilesInput.FilesToLoad[fileName], callback, progressCallBack, true);
            } else {
                if (database && database.enableSceneOffline) {
                    database.openAsync(loadFromIndexedDB, noIndexedDB);
                } else {
                    noIndexedDB();
                }
            }
        };
        Tools.ReadFile = function (fileToLoad, callback, progressCallBack, useArrayBuffer) {
            var reader = new FileReader();
            reader.onload = function (e) {
                callback(e.target.result);
            };
            reader.onprogress = progressCallBack;
            if (!useArrayBuffer) {
                reader.readAsText(fileToLoad);
            } else {
                reader.readAsArrayBuffer(fileToLoad);
            }
        };
        Tools.CheckExtends = function (v, min, max) {
            if (v.x < min.x) min.x = v.x;
            if (v.y < min.y) min.y = v.y;
            if (v.z < min.z) min.z = v.z;
            if (v.x > max.x) max.x = v.x;
            if (v.y > max.y) max.y = v.y;
            if (v.z > max.z) max.z = v.z;
        };
        Tools.WithinEpsilon = function (a, b) {
            var num = a - b;
            return -1.401298E-45 <= num && num <= 1.401298E-45;
        };
        Tools.DeepCopy = function (source, destination, doNotCopyList, mustCopyList) {
            for (var prop in source) {
                if (prop[0] === "_" && (!mustCopyList || mustCopyList.indexOf(prop) === -1)) {
                    continue;
                }
                if (doNotCopyList && doNotCopyList.indexOf(prop) !== -1) {
                    continue;
                }
                var sourceValue = source[prop];
                var typeOfSourceValue = typeof sourceValue;
                if (typeOfSourceValue == "function") {
                    continue;
                }
                if (typeOfSourceValue == "object") {
                    if (sourceValue instanceof Array) {
                        destination[prop] = [];
                        if (sourceValue.length > 0) {
                            if (typeof sourceValue[0] == "object") {
                                for (var index = 0; index < sourceValue.length; index++) {
                                    var clonedValue = cloneValue(sourceValue[index], destination);
                                    if (destination[prop].indexOf(clonedValue) === -1) {
                                        destination[prop].push(clonedValue);
                                    }
                                }
                            } else {
                                destination[prop] = sourceValue.slice(0);
                            }
                        }
                    } else {
                        destination[prop] = cloneValue(sourceValue, destination);
                    }
                } else {
                    destination[prop] = sourceValue;
                }
            }
        };
        Tools.IsEmpty = function (obj) {
            for (var i in obj) {
                return false;
            }
            return true;
        };
        Tools.RegisterTopRootEvents = function (events) {
            for (var index = 0; index < events.length; index++) {
                var event = events[index];
                window.addEventListener(event.name, event.handler, false);
                try {
                    if (window.parent) {
                        window.parent.addEventListener(event.name, event.handler, false);
                    }
                } catch (e) {}
            }
        };
        Tools.UnregisterTopRootEvents = function (events) {
            for (var index = 0; index < events.length; index++) {
                var event = events[index];
                window.removeEventListener(event.name, event.handler);
                try {
                    if (window.parent) {
                        window.parent.removeEventListener(event.name, event.handler);
                    }
                } catch (e) {}
            }
        };
        Tools.GetFps = function () {
            return fps;
        };
        Tools.GetDeltaTime = function () {
            return deltaTime;
        };
        Tools._MeasureFps = function () {
            previousFramesDuration.push((new Date).getTime());
            var length = previousFramesDuration.length;
            if (length >= 2) {
                deltaTime = previousFramesDuration[length - 1] - previousFramesDuration[length - 2];
            }
            if (length >= fpsRange) {
                if (length > fpsRange) {
                    previousFramesDuration.splice(0, 1);
                    length = previousFramesDuration.length;
                }
                var sum = 0;
                for (var id = 0; id < length - 1; id++) {
                    sum += previousFramesDuration[id + 1] - previousFramesDuration[id];
                }
                fps = 1000.0 / (sum / (length - 1));
            }
        };
        Tools.CreateScreenshot = function (engine, camera, size) {
            var width;
            var height;
            var scene = camera.getScene();
            var previousCamera = null;
            if (scene.activeCamera !== camera) {
                previousCamera = scene.activeCamera;
                scene.activeCamera = camera;
            }
            if (size.precision) {
                width = Math.round(engine.getRenderWidth() * size.precision);
                height = Math.round(width / engine.getAspectRatio(camera));
                size = {
                    width: width,
                    height: height
                };
            } else if (size.width && size.height) {
                width = size.width;
                height = size.height;
            } else if (size.width && !size.height) {
                width = size.width;
                height = Math.round(width / engine.getAspectRatio(camera));
                size = {
                    width: width,
                    height: height
                };
            } else if (size.height && !size.width) {
                height = size.height;
                width = Math.round(height * engine.getAspectRatio(camera));
                size = {
                    width: width,
                    height: height
                };
            } else if (!isNaN(size)) {
                height = size;
                width = size;
            } else {
                Tools.Error("Invalid 'size' parameter !");
                return;
            }
            var texture = new BABYLON.RenderTargetTexture("screenShot", size, engine.scenes[0], false, false);
            texture.renderList = engine.scenes[0].meshes;
            texture.onAfterRender = function () {
                var numberOfChannelsByLine = width * 4;
                var halfHeight = height / 2;
                var data = engine.readPixels(0, 0, width, height);
                for (var i = 0; i < halfHeight; i++) {
                    for (var j = 0; j < numberOfChannelsByLine; j++) {
                        var currentCell = j + i * numberOfChannelsByLine;
                        var targetLine = height - i - 1;
                        var targetCell = j + targetLine * numberOfChannelsByLine;
                        var temp = data[currentCell];
                        data[currentCell] = data[targetCell];
                        data[targetCell] = temp;
                    }
                }
                if (!screenshotCanvas) {
                    screenshotCanvas = document.createElement('canvas');
                }
                screenshotCanvas.width = width;
                screenshotCanvas.height = height;
                var context = screenshotCanvas.getContext('2d');
                var imageData = context.createImageData(width, height);
                imageData.data.set(data);
                context.putImageData(imageData, 0, 0);
                var base64Image = screenshotCanvas.toDataURL();
                if (("download" in document.createElement("a"))) {
                    var a = window.document.createElement("a");
                    a.href = base64Image;
                    var date = new Date();
                    var stringDate = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate() + "-" + date.getHours() + ":" + date.getMinutes();
                    a.setAttribute("download", "screenshot-" + stringDate + ".png");
                    window.document.body.appendChild(a);
                    a.addEventListener("click", function () {
                        a.parentElement.removeChild(a);
                    });
                    a.click();
                } else {
                    var newWindow = window.open("");
                    var img = newWindow.document.createElement("img");
                    img.src = base64Image;
                    newWindow.document.body.appendChild(img);
                }
            };
            texture.render(true);
            texture.dispose();
            if (previousCamera) {
                scene.activeCamera = previousCamera;
            }
        };
        Tools.ValidateXHRData = function (xhr, dataType) {
            if (typeof dataType === "undefined") {
                dataType = 7;
            }
            try {
                if (dataType & 1) {
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        return true;
                    } else if (dataType === 1) {
                        return false;
                    }
                }
                if (dataType & 2) {
                    var tgaHeader = BABYLON.Internals.TGATools.GetTGAHeader(xhr.response);
                    if (tgaHeader.width && tgaHeader.height && tgaHeader.width > 0 && tgaHeader.height > 0) {
                        return true;
                    } else if (dataType === 2) {
                        return false;
                    }
                }
                if (dataType & 4) {
                    var ddsHeader = new Uint8Array(xhr.response, 0, 3);
                    if (ddsHeader[0] == 68 && ddsHeader[1] == 68 && ddsHeader[2] == 83) {
                        return true;
                    } else {
                        return false;
                    }
                }
            } catch (e) {}
            return false;
        };
        Object.defineProperty(Tools, "NoneLogLevel", {
            get: function () {
                return Tools._NoneLogLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tools, "MessageLogLevel", {
            get: function () {
                return Tools._MessageLogLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tools, "WarningLogLevel", {
            get: function () {
                return Tools._WarningLogLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tools, "ErrorLogLevel", {
            get: function () {
                return Tools._ErrorLogLevel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Tools, "AllLogLevel", {
            get: function () {
                return Tools._MessageLogLevel | Tools._WarningLogLevel | Tools._ErrorLogLevel;
            },
            enumerable: true,
            configurable: true
        });
        Tools._FormatMessage = function (message) {
            var padStr = function (i) {
                    return (i < 10) ? "0" + i : "" + i;
                };
            var date = new Date();
            return "BJS - [" + padStr(date.getHours()) + ":" + padStr(date.getMinutes()) + ":" + padStr(date.getSeconds()) + "]: " + message;
        };
        Tools._LogDisabled = function (message) {};
        Tools._LogEnabled = function (message) {
            console.log(Tools._FormatMessage(message));
        };
        Tools._WarnDisabled = function (message) {};
        Tools._WarnEnabled = function (message) {
            console.warn(Tools._FormatMessage(message));
        };
        Tools._ErrorDisabled = function (message) {};
        Tools._ErrorEnabled = function (message) {
            console.error(Tools._FormatMessage(message));
        };
        Object.defineProperty(Tools, "LogLevels", {
            set: function (level) {
                if ((level & Tools.MessageLogLevel) === Tools.MessageLogLevel) {
                    Tools.Log = Tools._LogEnabled;
                } else {
                    Tools.Log = Tools._LogDisabled;
                }
                if ((level & Tools.WarningLogLevel) === Tools.WarningLogLevel) {
                    Tools.Warn = Tools._WarnEnabled;
                } else {
                    Tools.Warn = Tools._WarnDisabled;
                }
                if ((level & Tools.ErrorLogLevel) === Tools.ErrorLogLevel) {
                    Tools.Error = Tools._ErrorEnabled;
                } else {
                    Tools.Error = Tools._ErrorDisabled;
                }
            },
            enumerable: true,
            configurable: true
        });
        Tools.BaseUrl = "";
        Tools._NoneLogLevel = 0;
        Tools._MessageLogLevel = 1;
        Tools._WarningLogLevel = 2;
        Tools._ErrorLogLevel = 4;
        Tools.Log = Tools._LogEnabled;
        Tools.Warn = Tools._WarnEnabled;
        Tools.Error = Tools._ErrorEnabled;
        return Tools;
    })();
    BABYLON.Tools = Tools;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var compileShader = function (gl, source, type, defines) {
            var shader = gl.createShader(type === "vertex" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
            gl.shaderSource(shader, (defines ? defines + "\n" : "") + source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                throw new Error(gl.getShaderInfoLog(shader));
            }
            return shader;
        };
    var getSamplingParameters = function (samplingMode, generateMipMaps, gl) {
            var magFilter = gl.NEAREST;
            var minFilter = gl.NEAREST;
            if (samplingMode === BABYLON.Texture.BILINEAR_SAMPLINGMODE) {
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_NEAREST;
                } else {
                    minFilter = gl.LINEAR;
                }
            } else if (samplingMode === BABYLON.Texture.TRILINEAR_SAMPLINGMODE) {
                magFilter = gl.LINEAR;
                if (generateMipMaps) {
                    minFilter = gl.LINEAR_MIPMAP_LINEAR;
                } else {
                    minFilter = gl.LINEAR;
                }
            } else if (samplingMode === BABYLON.Texture.NEAREST_SAMPLINGMODE) {
                magFilter = gl.NEAREST;
                if (generateMipMaps) {
                    minFilter = gl.NEAREST_MIPMAP_LINEAR;
                } else {
                    minFilter = gl.NEAREST;
                }
            }
            return {
                min: minFilter,
                mag: magFilter
            };
        };
    var getExponantOfTwo = function (value, max) {
            var count = 1;
            do {
                count *= 2;
            } while (count < value);
            if (count > max) count = max;
            return count;
        };
    var prepareWebGLTexture = function (texture, gl, scene, width, height, invertY, noMipmap, isCompressed, processFunction, samplingMode) {
            if (typeof samplingMode === "undefined") {
                samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
            }
            var engine = scene.getEngine();
            var potWidth = getExponantOfTwo(width, engine.getCaps().maxTextureSize);
            var potHeight = getExponantOfTwo(height, engine.getCaps().maxTextureSize);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, invertY === undefined ? 1 : (invertY ? 1 : 0));
            processFunction(potWidth, potHeight);
            var filters = getSamplingParameters(samplingMode, !noMipmap, gl);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filters.mag);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filters.min);
            if (!noMipmap && !isCompressed) {
                gl.generateMipmap(gl.TEXTURE_2D);
            }
            gl.bindTexture(gl.TEXTURE_2D, null);
            engine._activeTexturesCache = [];
            texture._baseWidth = width;
            texture._baseHeight = height;
            texture._width = potWidth;
            texture._height = potHeight;
            texture.isReady = true;
            scene._removePendingData(texture);
        };
    var cascadeLoad = function (rootUrl, index, loadedImages, scene, onfinish, extensions) {
            var img;
            var onload = function () {
                    loadedImages.push(img);
                    scene._removePendingData(img);
                    if (index != extensions.length - 1) {
                        cascadeLoad(rootUrl, index + 1, loadedImages, scene, onfinish, extensions);
                    } else {
                        onfinish(loadedImages);
                    }
                };
            var onerror = function () {
                    scene._removePendingData(img);
                };
            img = BABYLON.Tools.LoadImage(rootUrl + extensions[index], onload, onerror, scene.database);
            scene._addPendingData(img);
        };
    var EngineCapabilities = (function () {
        function EngineCapabilities() {}
        return EngineCapabilities;
    })();
    BABYLON.EngineCapabilities = EngineCapabilities;
    var Engine = (function () {
        function Engine(canvas, antialias, options) {
            var _this = this;
            this.isFullscreen = false;
            this.isPointerLock = false;
            this.forceWireframe = false;
            this.cullBackFaces = true;
            this.renderEvenInBackground = true;
            this.scenes = new Array();
            this._windowIsBackground = false;
            this._runningLoop = false;
            this._loadedTexturesCache = new Array();
            this._activeTexturesCache = new Array();
            this._compiledEffects = {};
            this._depthMask = true;
            this._renderingCanvas = canvas;
            this._canvasClientRect = this._renderingCanvas.getBoundingClientRect();
            options = options || {};
            options.antialias = antialias;
            try {
                this._gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
            } catch (e) {
                throw new Error("WebGL not supported");
            }
            if (!this._gl) {
                throw new Error("WebGL not supported");
            }
            this._onBlur = function () {
                _this._windowIsBackground = true;
            };
            this._onFocus = function () {
                _this._windowIsBackground = false;
            };
            window.addEventListener("blur", this._onBlur);
            window.addEventListener("focus", this._onFocus);
            this._workingCanvas = document.createElement("canvas");
            this._workingContext = this._workingCanvas.getContext("2d");
            this._hardwareScalingLevel = 1.0 / (window.devicePixelRatio || 1.0);
            this.resize();
            this._caps = new EngineCapabilities();
            this._caps.maxTexturesImageUnits = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
            this._caps.maxTextureSize = this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE);
            this._caps.maxCubemapTextureSize = this._gl.getParameter(this._gl.MAX_CUBE_MAP_TEXTURE_SIZE);
            this._caps.maxRenderTextureSize = this._gl.getParameter(this._gl.MAX_RENDERBUFFER_SIZE);
            this._caps.standardDerivatives = (this._gl.getExtension('OES_standard_derivatives') !== null);
            this._caps.s3tc = this._gl.getExtension('WEBGL_compressed_texture_s3tc');
            this._caps.textureFloat = (this._gl.getExtension('OES_texture_float') !== null);
            this._caps.textureAnisotropicFilterExtension = this._gl.getExtension('EXT_texture_filter_anisotropic') || this._gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || this._gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
            this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
            this._caps.instancedArrays = this._gl.getExtension('ANGLE_instanced_arrays');
            this.setDepthBuffer(true);
            this.setDepthFunctionToLessOrEqual();
            this.setDepthWrite(true);
            this._onFullscreenChange = function () {
                if (document.fullscreen !== undefined) {
                    _this.isFullscreen = document.fullscreen;
                } else if (document.mozFullScreen !== undefined) {
                    _this.isFullscreen = document.mozFullScreen;
                } else if (document.webkitIsFullScreen !== undefined) {
                    _this.isFullscreen = document.webkitIsFullScreen;
                } else if (document.msIsFullScreen !== undefined) {
                    _this.isFullscreen = document.msIsFullScreen;
                }
                if (_this.isFullscreen && _this._pointerLockRequested) {
                    canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
                    if (canvas.requestPointerLock) {
                        canvas.requestPointerLock();
                    }
                }
            };
            document.addEventListener("fullscreenchange", this._onFullscreenChange, false);
            document.addEventListener("mozfullscreenchange", this._onFullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", this._onFullscreenChange, false);
            document.addEventListener("msfullscreenchange", this._onFullscreenChange, false);
            this._onPointerLockChange = function () {
                _this.isPointerLock = (document.mozPointerLockElement === canvas || document.webkitPointerLockElement === canvas || document.msPointerLockElement === canvas || document.pointerLockElement === canvas);
            };
            document.addEventListener("pointerlockchange", this._onPointerLockChange, false);
            document.addEventListener("mspointerlockchange", this._onPointerLockChange, false);
            document.addEventListener("mozpointerlockchange", this._onPointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", this._onPointerLockChange, false);
        }
        Object.defineProperty(Engine, "ALPHA_DISABLE", {
            get: function () {
                return Engine._ALPHA_DISABLE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "ALPHA_ADD", {
            get: function () {
                return Engine._ALPHA_ADD;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "ALPHA_COMBINE", {
            get: function () {
                return Engine._ALPHA_COMBINE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "DELAYLOADSTATE_NONE", {
            get: function () {
                return Engine._DELAYLOADSTATE_NONE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "DELAYLOADSTATE_LOADED", {
            get: function () {
                return Engine._DELAYLOADSTATE_LOADED;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "DELAYLOADSTATE_LOADING", {
            get: function () {
                return Engine._DELAYLOADSTATE_LOADING;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "DELAYLOADSTATE_NOTLOADED", {
            get: function () {
                return Engine._DELAYLOADSTATE_NOTLOADED;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Engine, "Version", {
            get: function () {
                return "1.13.0";
            },
            enumerable: true,
            configurable: true
        });
        Engine.prototype.getAspectRatio = function (camera) {
            var viewport = camera.viewport;
            return (this.getRenderWidth() * viewport.width) / (this.getRenderHeight() * viewport.height);
        };
        Engine.prototype.getRenderWidth = function () {
            if (this._currentRenderTarget) {
                return this._currentRenderTarget._width;
            }
            return this._renderingCanvas.width;
        };
        Engine.prototype.getRenderHeight = function () {
            if (this._currentRenderTarget) {
                return this._currentRenderTarget._height;
            }
            return this._renderingCanvas.height;
        };
        Engine.prototype.getRenderingCanvas = function () {
            return this._renderingCanvas;
        };
        Engine.prototype.getRenderingCanvasClientRect = function () {
            return this._renderingCanvas.getBoundingClientRect();
        };
        Engine.prototype.setHardwareScalingLevel = function (level) {
            this._hardwareScalingLevel = level;
            this.resize();
        };
        Engine.prototype.getHardwareScalingLevel = function () {
            return this._hardwareScalingLevel;
        };
        Engine.prototype.getLoadedTexturesCache = function () {
            return this._loadedTexturesCache;
        };
        Engine.prototype.getCaps = function () {
            return this._caps;
        };
        Engine.prototype.setDepthFunctionToGreater = function () {
            this._gl.depthFunc(this._gl.GREATER);
        };
        Engine.prototype.setDepthFunctionToGreaterOrEqual = function () {
            this._gl.depthFunc(this._gl.GEQUAL);
        };
        Engine.prototype.setDepthFunctionToLess = function () {
            this._gl.depthFunc(this._gl.LESS);
        };
        Engine.prototype.setDepthFunctionToLessOrEqual = function () {
            this._gl.depthFunc(this._gl.LEQUAL);
        };
        Engine.prototype.stopRenderLoop = function () {
            this._renderFunction = null;
            this._runningLoop = false;
        };
        Engine.prototype._renderLoop = function () {
            var _this = this;
            var shouldRender = true;
            if (!this.renderEvenInBackground && this._windowIsBackground) {
                shouldRender = false;
            }
            if (shouldRender) {
                this.beginFrame();
                if (this._renderFunction) {
                    this._renderFunction();
                }
                this.endFrame();
            }
            if (this._runningLoop) {
                BABYLON.Tools.QueueNewFrame(function () {
                    _this._renderLoop();
                });
            }
        };
        Engine.prototype.runRenderLoop = function (renderFunction) {
            var _this = this;
            this._runningLoop = true;
            this._renderFunction = renderFunction;
            BABYLON.Tools.QueueNewFrame(function () {
                _this._renderLoop();
            });
        };
        Engine.prototype.switchFullscreen = function (requestPointerLock) {
            if (this.isFullscreen) {
                BABYLON.Tools.ExitFullscreen();
            } else {
                this._pointerLockRequested = requestPointerLock;
                BABYLON.Tools.RequestFullscreen(this._renderingCanvas);
            }
        };
        Engine.prototype.clear = function (color, backBuffer, depthStencil) {
            this._gl.clearColor(color.r, color.g, color.b, color.a !== undefined ? color.a : 1.0);
            if (this._depthMask) {
                this._gl.clearDepth(1.0);
            }
            var mode = 0;
            if (backBuffer) mode |= this._gl.COLOR_BUFFER_BIT;
            if (depthStencil && this._depthMask) mode |= this._gl.DEPTH_BUFFER_BIT;
            this._gl.clear(mode);
        };
        Engine.prototype.setViewport = function (viewport, requiredWidth, requiredHeight) {
            var width = requiredWidth || this._renderingCanvas.width;
            var height = requiredHeight || this._renderingCanvas.height;
            var x = viewport.x || 0;
            var y = viewport.y || 0;
            this._cachedViewport = viewport;
            this._gl.viewport(x * width, y * height, width * viewport.width, height * viewport.height);
        };
        Engine.prototype.setDirectViewport = function (x, y, width, height) {
            this._cachedViewport = null;
            this._gl.viewport(x, y, width, height);
        };
        Engine.prototype.beginFrame = function () {
            BABYLON.Tools._MeasureFps();
        };
        Engine.prototype.endFrame = function () {
            this.flushFramebuffer();
        };
        Engine.prototype.resize = function () {
            this._renderingCanvas.width = this._renderingCanvas.clientWidth / this._hardwareScalingLevel;
            this._renderingCanvas.height = this._renderingCanvas.clientHeight / this._hardwareScalingLevel;
            this._canvasClientRect = this._renderingCanvas.getBoundingClientRect();
        };
        Engine.prototype.bindFramebuffer = function (texture) {
            this._currentRenderTarget = texture;
            var gl = this._gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, texture._framebuffer);
            this._gl.viewport(0, 0, texture._width, texture._height);
            this.wipeCaches();
        };
        Engine.prototype.unBindFramebuffer = function (texture) {
            this._currentRenderTarget = null;
            if (texture.generateMipMaps) {
                var gl = this._gl;
                gl.bindTexture(gl.TEXTURE_2D, texture);
                gl.generateMipmap(gl.TEXTURE_2D);
                gl.bindTexture(gl.TEXTURE_2D, null);
            }
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
        };
        Engine.prototype.flushFramebuffer = function () {
            this._gl.flush();
        };
        Engine.prototype.restoreDefaultFramebuffer = function () {
            this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, null);
            this.setViewport(this._cachedViewport);
            this.wipeCaches();
        };
        Engine.prototype._resetVertexBufferBinding = function () {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
            this._cachedVertexBuffers = null;
        };
        Engine.prototype.createVertexBuffer = function (vertices) {
            var vbo = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vbo);
            this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vertices), this._gl.STATIC_DRAW);
            this._resetVertexBufferBinding();
            vbo.references = 1;
            return vbo;
        };
        Engine.prototype.createDynamicVertexBuffer = function (capacity) {
            var vbo = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vbo);
            this._gl.bufferData(this._gl.ARRAY_BUFFER, capacity, this._gl.DYNAMIC_DRAW);
            this._resetVertexBufferBinding();
            vbo.references = 1;
            return vbo;
        };
        Engine.prototype.updateDynamicVertexBuffer = function (vertexBuffer, vertices, length) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vertexBuffer);
            if (vertices instanceof Float32Array) {
                this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, vertices);
            } else {
                this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, new Float32Array(vertices));
            }
            this._resetVertexBufferBinding();
        };
        Engine.prototype._resetIndexBufferBinding = function () {
            this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);
            this._cachedIndexBuffer = null;
        };
        Engine.prototype.createIndexBuffer = function (indices) {
            var vbo = this._gl.createBuffer();
            this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, vbo);
            this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), this._gl.STATIC_DRAW);
            this._resetIndexBufferBinding();
            vbo.references = 1;
            return vbo;
        };
        Engine.prototype.bindBuffers = function (vertexBuffer, indexBuffer, vertexDeclaration, vertexStrideSize, effect) {
            if (this._cachedVertexBuffers !== vertexBuffer || this._cachedEffectForVertexBuffers !== effect) {
                this._cachedVertexBuffers = vertexBuffer;
                this._cachedEffectForVertexBuffers = effect;
                this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vertexBuffer);
                var offset = 0;
                for (var index = 0; index < vertexDeclaration.length; index++) {
                    var order = effect.getAttributeLocation(index);
                    if (order >= 0) {
                        this._gl.vertexAttribPointer(order, vertexDeclaration[index], this._gl.FLOAT, false, vertexStrideSize, offset);
                    }
                    offset += vertexDeclaration[index] * 4;
                }
            }
            if (this._cachedIndexBuffer !== indexBuffer) {
                this._cachedIndexBuffer = indexBuffer;
                this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            }
        };
        Engine.prototype.bindMultiBuffers = function (vertexBuffers, indexBuffer, effect) {
            if (this._cachedVertexBuffers !== vertexBuffers || this._cachedEffectForVertexBuffers !== effect) {
                this._cachedVertexBuffers = vertexBuffers;
                this._cachedEffectForVertexBuffers = effect;
                var attributes = effect.getAttributesNames();
                for (var index = 0; index < attributes.length; index++) {
                    var order = effect.getAttributeLocation(index);
                    if (order >= 0) {
                        var vertexBuffer = vertexBuffers[attributes[index]];
                        if (!vertexBuffer) {
                            continue;
                        }
                        var stride = vertexBuffer.getStrideSize();
                        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vertexBuffer.getBuffer());
                        this._gl.vertexAttribPointer(order, stride, this._gl.FLOAT, false, stride * 4, 0);
                    }
                }
            }
            if (this._cachedIndexBuffer !== indexBuffer) {
                this._cachedIndexBuffer = indexBuffer;
                this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
            }
        };
        Engine.prototype._releaseBuffer = function (buffer) {
            buffer.references--;
            if (buffer.references === 0) {
                this._gl.deleteBuffer(buffer);
                return true;
            }
            return false;
        };
        Engine.prototype.createInstancesBuffer = function (capacity) {
            var buffer = this._gl.createBuffer();
            buffer.capacity = capacity;
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, buffer);
            this._gl.bufferData(this._gl.ARRAY_BUFFER, capacity, this._gl.DYNAMIC_DRAW);
            return buffer;
        };
        Engine.prototype.deleteInstancesBuffer = function (buffer) {
            this._gl.deleteBuffer(buffer);
        };
        Engine.prototype.updateAndBindInstancesBuffer = function (instancesBuffer, data, offsetLocations) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, instancesBuffer);
            this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, data);
            for (var index = 0; index < 4; index++) {
                var offsetLocation = offsetLocations[index];
                this._gl.enableVertexAttribArray(offsetLocation);
                this._gl.vertexAttribPointer(offsetLocation, 4, this._gl.FLOAT, false, 64, index * 16);
                this._caps.instancedArrays.vertexAttribDivisorANGLE(offsetLocation, 1);
            }
        };
        Engine.prototype.unBindInstancesBuffer = function (instancesBuffer, offsetLocations) {
            this._gl.bindBuffer(this._gl.ARRAY_BUFFER, instancesBuffer);
            for (var index = 0; index < 4; index++) {
                var offsetLocation = offsetLocations[index];
                this._gl.disableVertexAttribArray(offsetLocation);
                this._caps.instancedArrays.vertexAttribDivisorANGLE(offsetLocation, 0);
            }
        };
        Engine.prototype.draw = function (useTriangles, indexStart, indexCount, instancesCount) {
            if (instancesCount) {
                this._caps.instancedArrays.drawElementsInstancedANGLE(useTriangles ? this._gl.TRIANGLES : this._gl.LINES, indexCount, this._gl.UNSIGNED_SHORT, indexStart * 2, instancesCount);
                return;
            }
            this._gl.drawElements(useTriangles ? this._gl.TRIANGLES : this._gl.LINES, indexCount, this._gl.UNSIGNED_SHORT, indexStart * 2);
        };
        Engine.prototype._releaseEffect = function (effect) {
            if (this._compiledEffects[effect._key]) {
                delete this._compiledEffects[effect._key];
                if (effect.getProgram()) {
                    this._gl.deleteProgram(effect.getProgram());
                }
            }
        };
        Engine.prototype.createEffect = function (baseName, attributesNames, uniformsNames, samplers, defines, optionalDefines, onCompiled, onError) {
            var vertex = baseName.vertexElement || baseName.vertex || baseName;
            var fragment = baseName.fragmentElement || baseName.fragment || baseName;
            var name = vertex + "+" + fragment + "@" + defines;
            if (this._compiledEffects[name]) {
                return this._compiledEffects[name];
            }
            var effect = new BABYLON.Effect(baseName, attributesNames, uniformsNames, samplers, this, defines, optionalDefines, onCompiled, onError);
            effect._key = name;
            this._compiledEffects[name] = effect;
            return effect;
        };
        Engine.prototype.createShaderProgram = function (vertexCode, fragmentCode, defines) {
            var vertexShader = compileShader(this._gl, vertexCode, "vertex", defines);
            var fragmentShader = compileShader(this._gl, fragmentCode, "fragment", defines);
            var shaderProgram = this._gl.createProgram();
            this._gl.attachShader(shaderProgram, vertexShader);
            this._gl.attachShader(shaderProgram, fragmentShader);
            this._gl.linkProgram(shaderProgram);
            var linked = this._gl.getProgramParameter(shaderProgram, this._gl.LINK_STATUS);
            if (!linked) {
                var error = this._gl.getProgramInfoLog(shaderProgram);
                if (error) {
                    throw new Error(error);
                }
            }
            this._gl.deleteShader(vertexShader);
            this._gl.deleteShader(fragmentShader);
            return shaderProgram;
        };
        Engine.prototype.getUniforms = function (shaderProgram, uniformsNames) {
            var results = [];
            for (var index = 0; index < uniformsNames.length; index++) {
                results.push(this._gl.getUniformLocation(shaderProgram, uniformsNames[index]));
            }
            return results;
        };
        Engine.prototype.getAttributes = function (shaderProgram, attributesNames) {
            var results = [];
            for (var index = 0; index < attributesNames.length; index++) {
                try {
                    results.push(this._gl.getAttribLocation(shaderProgram, attributesNames[index]));
                } catch (e) {
                    results.push(-1);
                }
            }
            return results;
        };
        Engine.prototype.enableEffect = function (effect) {
            if (!effect || !effect.getAttributesCount() || this._currentEffect === effect) {
                return;
            }
            this._vertexAttribArrays = this._vertexAttribArrays || [];
            this._gl.useProgram(effect.getProgram());
            for (var i in this._vertexAttribArrays) {
                if (i > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[i]) {
                    continue;
                }
                this._vertexAttribArrays[i] = false;
                this._gl.disableVertexAttribArray(i);
            }
            var attributesCount = effect.getAttributesCount();
            for (var index = 0; index < attributesCount; index++) {
                var order = effect.getAttributeLocation(index);
                if (order >= 0) {
                    this._vertexAttribArrays[order] = true;
                    this._gl.enableVertexAttribArray(order);
                }
            }
            this._currentEffect = effect;
        };
        Engine.prototype.setArray = function (uniform, array) {
            if (!uniform) return;
            this._gl.uniform1fv(uniform, array);
        };
        Engine.prototype.setMatrices = function (uniform, matrices) {
            if (!uniform) return;
            this._gl.uniformMatrix4fv(uniform, false, matrices);
        };
        Engine.prototype.setMatrix = function (uniform, matrix) {
            if (!uniform) return;
            this._gl.uniformMatrix4fv(uniform, false, matrix.toArray());
        };
        Engine.prototype.setFloat = function (uniform, value) {
            if (!uniform) return;
            this._gl.uniform1f(uniform, value);
        };
        Engine.prototype.setFloat2 = function (uniform, x, y) {
            if (!uniform) return;
            this._gl.uniform2f(uniform, x, y);
        };
        Engine.prototype.setFloat3 = function (uniform, x, y, z) {
            if (!uniform) return;
            this._gl.uniform3f(uniform, x, y, z);
        };
        Engine.prototype.setBool = function (uniform, bool) {
            if (!uniform) return;
            this._gl.uniform1i(uniform, bool);
        };
        Engine.prototype.setFloat4 = function (uniform, x, y, z, w) {
            if (!uniform) return;
            this._gl.uniform4f(uniform, x, y, z, w);
        };
        Engine.prototype.setColor3 = function (uniform, color3) {
            if (!uniform) return;
            this._gl.uniform3f(uniform, color3.r, color3.g, color3.b);
        };
        Engine.prototype.setColor4 = function (uniform, color3, alpha) {
            if (!uniform) return;
            this._gl.uniform4f(uniform, color3.r, color3.g, color3.b, alpha);
        };
        Engine.prototype.setState = function (culling, force) {
            if (this._cullingState !== culling || force) {
                if (culling) {
                    this._gl.cullFace(this.cullBackFaces ? this._gl.BACK : this._gl.FRONT);
                    this._gl.enable(this._gl.CULL_FACE);
                } else {
                    this._gl.disable(this._gl.CULL_FACE);
                }
                this._cullingState = culling;
            }
        };
        Engine.prototype.setDepthBuffer = function (enable) {
            if (enable) {
                this._gl.enable(this._gl.DEPTH_TEST);
            } else {
                this._gl.disable(this._gl.DEPTH_TEST);
            }
        };
        Engine.prototype.getDepthWrite = function () {
            return this._depthMask;
        };
        Engine.prototype.setDepthWrite = function (enable) {
            this._gl.depthMask(enable);
            this._depthMask = enable;
        };
        Engine.prototype.setColorWrite = function (enable) {
            this._gl.colorMask(enable, enable, enable, enable);
        };
        Engine.prototype.setAlphaMode = function (mode) {
            switch (mode) {
            case BABYLON.Engine.ALPHA_DISABLE:
                this.setDepthWrite(true);
                this._gl.disable(this._gl.BLEND);
                break;
            case BABYLON.Engine.ALPHA_COMBINE:
                this.setDepthWrite(false);
                this._gl.blendFuncSeparate(this._gl.SRC_ALPHA, this._gl.ONE_MINUS_SRC_ALPHA, this._gl.ONE, this._gl.ONE);
                this._gl.enable(this._gl.BLEND);
                break;
            case BABYLON.Engine.ALPHA_ADD:
                this.setDepthWrite(false);
                this._gl.blendFuncSeparate(this._gl.ONE, this._gl.ONE, this._gl.ZERO, this._gl.ONE);
                this._gl.enable(this._gl.BLEND);
                break;
            }
        };
        Engine.prototype.setAlphaTesting = function (enable) {
            this._alphaTest = enable;
        };
        Engine.prototype.getAlphaTesting = function () {
            return this._alphaTest;
        };
        Engine.prototype.wipeCaches = function () {
            this._activeTexturesCache = [];
            this._currentEffect = null;
            this._cullingState = null;
            this._cachedVertexBuffers = null;
            this._cachedIndexBuffer = null;
            this._cachedEffectForVertexBuffers = null;
        };
        Engine.prototype.setSamplingMode = function (texture, samplingMode) {
            var gl = this._gl;
            gl.bindTexture(gl.TEXTURE_2D, texture);
            var magFilter = gl.NEAREST;
            var minFilter = gl.NEAREST;
            if (samplingMode === BABYLON.Texture.BILINEAR_SAMPLINGMODE) {
                magFilter = gl.LINEAR;
                minFilter = gl.LINEAR;
            } else if (samplingMode === BABYLON.Texture.TRILINEAR_SAMPLINGMODE) {
                magFilter = gl.LINEAR;
                minFilter = gl.LINEAR_MIPMAP_LINEAR;
            }
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
            gl.bindTexture(gl.TEXTURE_2D, null);
        };
        Engine.prototype.createTexture = function (url, noMipmap, invertY, scene, samplingMode) {
            var _this = this;
            if (typeof samplingMode === "undefined") {
                samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
            }
            var texture = this._gl.createTexture();
            var extension = url.substr(url.length - 4, 4).toLowerCase();
            var isDDS = this.getCaps().s3tc && (extension === ".dds");
            var isTGA = (extension === ".tga");
            scene._addPendingData(texture);
            texture.url = url;
            texture.noMipmap = noMipmap;
            texture.references = 1;
            this._loadedTexturesCache.push(texture);
            if (isTGA) {
                BABYLON.Tools.LoadFile(url, function (arrayBuffer) {
                    var data = new Uint8Array(arrayBuffer);
                    var header = BABYLON.Internals.TGATools.GetTGAHeader(data);
                    prepareWebGLTexture(texture, _this._gl, scene, header.width, header.height, invertY, noMipmap, false, function () {
                        BABYLON.Internals.TGATools.UploadContent(_this._gl, data);
                    }, samplingMode);
                }, null, scene.database, true);
            } else if (isDDS) {
                BABYLON.Tools.LoadFile(url, function (data) {
                    var info = BABYLON.Internals.DDSTools.GetDDSInfo(data);
                    var loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && !noMipmap && ((info.width >> (info.mipmapCount - 1)) == 1);
                    prepareWebGLTexture(texture, _this._gl, scene, info.width, info.height, invertY, !loadMipmap, info.isFourCC, function () {
                        console.log("loading " + url);
                        BABYLON.Internals.DDSTools.UploadDDSLevels(_this._gl, _this.getCaps().s3tc, data, info, loadMipmap, 1);
                    }, samplingMode);
                }, null, scene.database, true);
            } else {
                var onload = function (img) {
                        prepareWebGLTexture(texture, _this._gl, scene, img.width, img.height, invertY, noMipmap, false, function (potWidth, potHeight) {
                            var isPot = (img.width == potWidth && img.height == potHeight);
                            if (!isPot) {
                                _this._workingCanvas.width = potWidth;
                                _this._workingCanvas.height = potHeight;
                                _this._workingContext.drawImage(img, 0, 0, img.width, img.height, 0, 0, potWidth, potHeight);
                            }
                            _this._gl.texImage2D(_this._gl.TEXTURE_2D, 0, _this._gl.RGBA, _this._gl.RGBA, _this._gl.UNSIGNED_BYTE, isPot ? img : _this._workingCanvas);
                        }, samplingMode);
                    };
                var onerror = function () {
                        scene._removePendingData(texture);
                    };
                BABYLON.Tools.LoadImage(url, onload, onerror, scene.database);
            }
            return texture;
        };
        Engine.prototype.createDynamicTexture = function (width, height, generateMipMaps, samplingMode) {
            var texture = this._gl.createTexture();
            width = getExponantOfTwo(width, this._caps.maxTextureSize);
            height = getExponantOfTwo(height, this._caps.maxTextureSize);
            this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
            var filters = getSamplingParameters(samplingMode, generateMipMaps, this._gl);
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, filters.mag);
            this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, filters.min);
            this._gl.bindTexture(this._gl.TEXTURE_2D, null);
            this._activeTexturesCache = [];
            texture._baseWidth = width;
            texture._baseHeight = height;
            texture._width = width;
            texture._height = height;
            texture.isReady = false;
            texture.generateMipMaps = generateMipMaps;
            texture.references = 1;
            this._loadedTexturesCache.push(texture);
            return texture;
        };
        Engine.prototype.updateDynamicTexture = function (texture, canvas, invertY) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
            this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, invertY ? 1 : 0);
            this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, canvas);
            if (texture.generateMipMaps) {
                this._gl.generateMipmap(this._gl.TEXTURE_2D);
            }
            this._gl.bindTexture(this._gl.TEXTURE_2D, null);
            this._activeTexturesCache = [];
            texture.isReady = true;
        };
        Engine.prototype.updateVideoTexture = function (texture, video, invertY) {
            this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
            this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, invertY ? 0 : 1);
            if (video.videoWidth !== texture._width || video.videoHeight !== texture._height) {
                if (!texture._workingCanvas) {
                    texture._workingCanvas = document.createElement("canvas");
                    texture._workingContext = texture._workingCanvas.getContext("2d");
                    texture._workingCanvas.width = texture._width;
                    texture._workingCanvas.height = texture._height;
                }
                texture._workingContext.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, texture._width, texture._height);
                this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, texture._workingCanvas);
            } else {
                this._gl.texImage2D(this._gl.TEXTURE_2D, 0, this._gl.RGBA, this._gl.RGBA, this._gl.UNSIGNED_BYTE, video);
            }
            if (texture.generateMipMaps) {
                this._gl.generateMipmap(this._gl.TEXTURE_2D);
            }
            this._gl.bindTexture(this._gl.TEXTURE_2D, null);
            this._activeTexturesCache = [];
            texture.isReady = true;
        };
        Engine.prototype.createRenderTargetTexture = function (size, options) {
            var generateMipMaps = false;
            var generateDepthBuffer = true;
            var samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
            if (options !== undefined) {
                generateMipMaps = options.generateMipMaps === undefined ? options : options.generateMipmaps;
                generateDepthBuffer = options.generateDepthBuffer === undefined ? true : options.generateDepthBuffer;
                if (options.samplingMode !== undefined) {
                    samplingMode = options.samplingMode;
                }
            }
            var gl = this._gl;
            var texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, texture);
            var width = size.width || size;
            var height = size.height || size;
            var filters = getSamplingParameters(samplingMode, generateMipMaps, gl);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filters.mag);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filters.min);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
            var depthBuffer;
            if (generateDepthBuffer) {
                depthBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            }
            var framebuffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            if (generateDepthBuffer) {
                gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, depthBuffer);
            }
            gl.bindTexture(gl.TEXTURE_2D, null);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            texture._framebuffer = framebuffer;
            if (generateDepthBuffer) {
                texture._depthBuffer = depthBuffer;
            }
            texture._width = width;
            texture._height = height;
            texture.isReady = true;
            texture.generateMipMaps = generateMipMaps;
            texture.references = 1;
            this._activeTexturesCache = [];
            this._loadedTexturesCache.push(texture);
            return texture;
        };
        Engine.prototype.createCubeTexture = function (rootUrl, scene, extensions, noMipmap) {
            var _this = this;
            var gl = this._gl;
            var texture = gl.createTexture();
            texture.isCube = true;
            texture.url = rootUrl;
            texture.references = 1;
            this._loadedTexturesCache.push(texture);
            var extension = rootUrl.substr(rootUrl.length - 4, 4).toLowerCase();
            var isDDS = this.getCaps().s3tc && (extension === ".dds");
            if (isDDS) {
                BABYLON.Tools.LoadFile(rootUrl, function (data) {
                    var info = BABYLON.Internals.DDSTools.GetDDSInfo(data);
                    var loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && !noMipmap;
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
                    BABYLON.Internals.DDSTools.UploadDDSLevels(_this._gl, _this.getCaps().s3tc, data, info, loadMipmap, 6);
                    if (!noMipmap && !info.isFourCC && info.mipmapCount == 1) {
                        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                    }
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, loadMipmap ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
                    _this._activeTexturesCache = [];
                    texture._width = info.width;
                    texture._height = info.height;
                    texture.isReady = true;
                });
            } else {
                cascadeLoad(rootUrl, 0, [], scene, function (imgs) {
                    var width = getExponantOfTwo(imgs[0].width, _this._caps.maxCubemapTextureSize);
                    var height = width;
                    _this._workingCanvas.width = width;
                    _this._workingCanvas.height = height;
                    var faces = [gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
                    for (var index = 0; index < faces.length; index++) {
                        _this._workingContext.drawImage(imgs[index], 0, 0, imgs[index].width, imgs[index].height, 0, 0, width, height);
                        gl.texImage2D(faces[index], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, _this._workingCanvas);
                    }
                    if (!noMipmap) {
                        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);
                    }
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, noMipmap ? gl.LINEAR : gl.LINEAR_MIPMAP_LINEAR);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
                    _this._activeTexturesCache = [];
                    texture._width = width;
                    texture._height = height;
                    texture.isReady = true;
                }, extensions);
            }
            return texture;
        };
        Engine.prototype._releaseTexture = function (texture) {
            var gl = this._gl;
            if (texture._framebuffer) {
                gl.deleteFramebuffer(texture._framebuffer);
            }
            if (texture._depthBuffer) {
                gl.deleteRenderbuffer(texture._depthBuffer);
            }
            gl.deleteTexture(texture);
            for (var channel = 0; channel < this._caps.maxTexturesImageUnits; channel++) {
                this._gl.activeTexture(this._gl["TEXTURE" + channel]);
                this._gl.bindTexture(this._gl.TEXTURE_2D, null);
                this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null);
                this._activeTexturesCache[channel] = null;
            }
            var index = this._loadedTexturesCache.indexOf(texture);
            if (index !== -1) {
                this._loadedTexturesCache.splice(index, 1);
            }
        };
        Engine.prototype.bindSamplers = function (effect) {
            this._gl.useProgram(effect.getProgram());
            var samplers = effect.getSamplers();
            for (var index = 0; index < samplers.length; index++) {
                var uniform = effect.getUniform(samplers[index]);
                this._gl.uniform1i(uniform, index);
            }
            this._currentEffect = null;
        };
        Engine.prototype._bindTexture = function (channel, texture) {
            this._gl.activeTexture(this._gl["TEXTURE" + channel]);
            this._gl.bindTexture(this._gl.TEXTURE_2D, texture);
            this._activeTexturesCache[channel] = null;
        };
        Engine.prototype.setTextureFromPostProcess = function (channel, postProcess) {
            this._bindTexture(channel, postProcess._textures.data[postProcess._currentRenderTextureInd]);
        };
        Engine.prototype.setTexture = function (channel, texture) {
            if (channel < 0) {
                return;
            }
            if (!texture || !texture.isReady()) {
                if (this._activeTexturesCache[channel] != null) {
                    this._gl.activeTexture(this._gl["TEXTURE" + channel]);
                    this._gl.bindTexture(this._gl.TEXTURE_2D, null);
                    this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, null);
                    this._activeTexturesCache[channel] = null;
                }
                return;
            }
            if (texture instanceof BABYLON.VideoTexture) {
                if (texture.update()) {
                    this._activeTexturesCache[channel] = null;
                }
            } else if (texture.delayLoadState == BABYLON.Engine.DELAYLOADSTATE_NOTLOADED) {
                texture.delayLoad();
                return;
            }
            if (this._activeTexturesCache[channel] == texture) {
                return;
            }
            this._activeTexturesCache[channel] = texture;
            var internalTexture = texture.getInternalTexture();
            this._gl.activeTexture(this._gl["TEXTURE" + channel]);
            if (internalTexture.isCube) {
                this._gl.bindTexture(this._gl.TEXTURE_CUBE_MAP, internalTexture);
                if (internalTexture._cachedCoordinatesMode !== texture.coordinatesMode) {
                    internalTexture._cachedCoordinatesMode = texture.coordinatesMode;
                    var textureWrapMode = (texture.coordinatesMode !== BABYLON.Texture.CUBIC_MODE && texture.coordinatesMode !== BABYLON.Texture.SKYBOX_MODE) ? this._gl.REPEAT : this._gl.CLAMP_TO_EDGE;
                    this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_S, textureWrapMode);
                    this._gl.texParameteri(this._gl.TEXTURE_CUBE_MAP, this._gl.TEXTURE_WRAP_T, textureWrapMode);
                }
                this._setAnisotropicLevel(this._gl.TEXTURE_CUBE_MAP, texture);
            } else {
                this._gl.bindTexture(this._gl.TEXTURE_2D, internalTexture);
                if (internalTexture._cachedWrapU !== texture.wrapU) {
                    internalTexture._cachedWrapU = texture.wrapU;
                    switch (texture.wrapU) {
                    case BABYLON.Texture.WRAP_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.REPEAT);
                        break;
                    case BABYLON.Texture.CLAMP_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE);
                        break;
                    case BABYLON.Texture.MIRROR_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.MIRRORED_REPEAT);
                        break;
                    }
                }
                if (internalTexture._cachedWrapV !== texture.wrapV) {
                    internalTexture._cachedWrapV = texture.wrapV;
                    switch (texture.wrapV) {
                    case BABYLON.Texture.WRAP_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.REPEAT);
                        break;
                    case BABYLON.Texture.CLAMP_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
                        break;
                    case BABYLON.Texture.MIRROR_ADDRESSMODE:
                        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.MIRRORED_REPEAT);
                        break;
                    }
                }
                this._setAnisotropicLevel(this._gl.TEXTURE_2D, texture);
            }
        };
        Engine.prototype._setAnisotropicLevel = function (key, texture) {
            var anisotropicFilterExtension = this._caps.textureAnisotropicFilterExtension;
            if (anisotropicFilterExtension && texture._cachedAnisotropicFilteringLevel !== texture.anisotropicFilteringLevel) {
                this._gl.texParameterf(key, anisotropicFilterExtension.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(texture.anisotropicFilteringLevel, this._caps.maxAnisotropy));
                texture._cachedAnisotropicFilteringLevel = texture.anisotropicFilteringLevel;
            }
        };
        Engine.prototype.readPixels = function (x, y, width, height) {
            var data = new Uint8Array(height * width * 4);
            this._gl.readPixels(0, 0, width, height, this._gl.RGBA, this._gl.UNSIGNED_BYTE, data);
            return data;
        };
        Engine.prototype.dispose = function () {
            this.stopRenderLoop();
            while (this.scenes.length) {
                this.scenes[0].dispose();
            }
            for (var name in this._compiledEffects) {
                this._gl.deleteProgram(this._compiledEffects[name]._program);
            }
            for (var i in this._vertexAttribArrays) {
                if (i > this._gl.VERTEX_ATTRIB_ARRAY_ENABLED || !this._vertexAttribArrays[i]) {
                    continue;
                }
                this._gl.disableVertexAttribArray(i);
            }
            window.removeEventListener("blur", this._onBlur);
            window.removeEventListener("focus", this._onFocus);
            document.removeEventListener("fullscreenchange", this._onFullscreenChange);
            document.removeEventListener("mozfullscreenchange", this._onFullscreenChange);
            document.removeEventListener("webkitfullscreenchange", this._onFullscreenChange);
            document.removeEventListener("msfullscreenchange", this._onFullscreenChange);
            document.removeEventListener("pointerlockchange", this._onPointerLockChange);
            document.removeEventListener("mspointerlockchange", this._onPointerLockChange);
            document.removeEventListener("mozpointerlockchange", this._onPointerLockChange);
            document.removeEventListener("webkitpointerlockchange", this._onPointerLockChange);
        };
        Engine.isSupported = function () {
            try {
                var tempcanvas = document.createElement("canvas");
                var gl = tempcanvas.getContext("webgl") || tempcanvas.getContext("experimental-webgl");
                return gl != null && !! window.WebGLRenderingContext;
            } catch (e) {
                return false;
            }
        };
        Engine._ALPHA_DISABLE = 0;
        Engine._ALPHA_ADD = 1;
        Engine._ALPHA_COMBINE = 2;
        Engine._DELAYLOADSTATE_NONE = 0;
        Engine._DELAYLOADSTATE_LOADED = 1;
        Engine._DELAYLOADSTATE_LOADING = 2;
        Engine._DELAYLOADSTATE_NOTLOADED = 4;
        Engine.Epsilon = 0.001;
        Engine.CollisionsEpsilon = 0.001;
        Engine.ShadersRepository = "Babylon/Shaders/";
        return Engine;
    })();
    BABYLON.Engine = Engine;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Node = (function () {
        function Node(name, scene) {
            this.state = "";
            this.animations = new Array();
            this._childrenFlag = -1;
            this._isEnabled = true;
            this._isReady = true;
            this._currentRenderId = -1;
            this.name = name;
            this.id = name;
            this._scene = scene;
            this._initCache();
        }
        Node.prototype.getScene = function () {
            return this._scene;
        };
        Node.prototype.getEngine = function () {
            return this._scene.getEngine();
        };
        Node.prototype.getWorldMatrix = function () {
            return BABYLON.Matrix.Identity();
        };
        Node.prototype._initCache = function () {
            this._cache = {};
            this._cache.parent = undefined;
        };
        Node.prototype.updateCache = function (force) {
            if (!force && this.isSynchronized()) return;
            this._cache.parent = this.parent;
            this._updateCache();
        };
        Node.prototype._updateCache = function (ignoreParentClass) {};
        Node.prototype._isSynchronized = function () {
            return true;
        };
        Node.prototype.isSynchronizedWithParent = function () {
            return this.parent ? this.parent._currentRenderId <= this._currentRenderId : true;
        };
        Node.prototype.isSynchronized = function (updateCache) {
            var check = this.hasNewParent();
            check = check || !this.isSynchronizedWithParent();
            check = check || !this._isSynchronized();
            if (updateCache) this.updateCache(true);
            return !check;
        };
        Node.prototype.hasNewParent = function (update) {
            if (this._cache.parent === this.parent) return false;
            if (update) this._cache.parent = this.parent;
            return true;
        };
        Node.prototype.isReady = function () {
            return this._isReady;
        };
        Node.prototype.isEnabled = function () {
            if (!this._isEnabled) {
                return false;
            }
            if (this.parent) {
                return this.parent.isEnabled();
            }
            return true;
        };
        Node.prototype.setEnabled = function (value) {
            this._isEnabled = value;
        };
        Node.prototype.isDescendantOf = function (ancestor) {
            if (this.parent) {
                if (this.parent === ancestor) {
                    return true;
                }
                return this.parent.isDescendantOf(ancestor);
            }
            return false;
        };
        Node.prototype._getDescendants = function (list, results) {
            for (var index = 0; index < list.length; index++) {
                var item = list[index];
                if (item.isDescendantOf(this)) {
                    results.push(item);
                }
            }
        };
        Node.prototype.getDescendants = function () {
            var results = [];
            this._getDescendants(this._scene.meshes, results);
            this._getDescendants(this._scene.lights, results);
            this._getDescendants(this._scene.cameras, results);
            return results;
        };
        Node.prototype._setReady = function (state) {
            if (state == this._isReady) {
                return;
            }
            if (!state) {
                this._isReady = false;
                return;
            }
            this._isReady = true;
            if (this.onReady) {
                this.onReady(this);
            }
        };
        return Node;
    })();
    BABYLON.Node = Node;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var BoundingSphere = (function () {
        function BoundingSphere(minimum, maximum) {
            this.minimum = minimum;
            this.maximum = maximum;
            this._tempRadiusVector = BABYLON.Vector3.Zero();
            var distance = BABYLON.Vector3.Distance(minimum, maximum);
            this.center = BABYLON.Vector3.Lerp(minimum, maximum, 0.5);
            this.radius = distance * 0.5;
            this.centerWorld = BABYLON.Vector3.Zero();
            this._update(BABYLON.Matrix.Identity());
        }
        BoundingSphere.prototype._update = function (world) {
            BABYLON.Vector3.TransformCoordinatesToRef(this.center, world, this.centerWorld);
            BABYLON.Vector3.TransformNormalFromFloatsToRef(1.0, 1.0, 1.0, world, this._tempRadiusVector);
            this.radiusWorld = Math.max(Math.abs(this._tempRadiusVector.x), Math.abs(this._tempRadiusVector.y), Math.abs(this._tempRadiusVector.z)) * this.radius;
        };
        BoundingSphere.prototype.isInFrustum = function (frustumPlanes) {
            for (var i = 0; i < 6; i++) {
                if (frustumPlanes[i].dotCoordinate(this.centerWorld) <= -this.radiusWorld) return false;
            }
            return true;
        };
        BoundingSphere.prototype.intersectsPoint = function (point) {
            var x = this.centerWorld.x - point.x;
            var y = this.centerWorld.y - point.y;
            var z = this.centerWorld.z - point.z;
            var distance = Math.sqrt((x * x) + (y * y) + (z * z));
            if (Math.abs(this.radiusWorld - distance) < BABYLON.Engine.Epsilon) return false;
            return true;
        };
        BoundingSphere.Intersects = function (sphere0, sphere1) {
            var x = sphere0.centerWorld.x - sphere1.centerWorld.x;
            var y = sphere0.centerWorld.y - sphere1.centerWorld.y;
            var z = sphere0.centerWorld.z - sphere1.centerWorld.z;
            var distance = Math.sqrt((x * x) + (y * y) + (z * z));
            if (sphere0.radiusWorld + sphere1.radiusWorld < distance) return false;
            return true;
        };
        return BoundingSphere;
    })();
    BABYLON.BoundingSphere = BoundingSphere;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var BoundingBox = (function () {
        function BoundingBox(minimum, maximum) {
            this.minimum = minimum;
            this.maximum = maximum;
            this.vectors = new Array();
            this.vectorsWorld = new Array();
            this.vectors.push(this.minimum.clone());
            this.vectors.push(this.maximum.clone());
            this.vectors.push(this.minimum.clone());
            this.vectors[2].x = this.maximum.x;
            this.vectors.push(this.minimum.clone());
            this.vectors[3].y = this.maximum.y;
            this.vectors.push(this.minimum.clone());
            this.vectors[4].z = this.maximum.z;
            this.vectors.push(this.maximum.clone());
            this.vectors[5].z = this.minimum.z;
            this.vectors.push(this.maximum.clone());
            this.vectors[6].x = this.minimum.x;
            this.vectors.push(this.maximum.clone());
            this.vectors[7].y = this.minimum.y;
            this.center = this.maximum.add(this.minimum).scale(0.5);
            this.extends = this.maximum.subtract(this.minimum).scale(0.5);
            this.directions = [BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero(), BABYLON.Vector3.Zero()];
            for (var index = 0; index < this.vectors.length; index++) {
                this.vectorsWorld[index] = BABYLON.Vector3.Zero();
            }
            this.minimumWorld = BABYLON.Vector3.Zero();
            this.maximumWorld = BABYLON.Vector3.Zero();
            this._update(BABYLON.Matrix.Identity());
        }
        BoundingBox.prototype.getWorldMatrix = function () {
            return this._worldMatrix;
        };
        BoundingBox.prototype._update = function (world) {
            BABYLON.Vector3.FromFloatsToRef(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, this.minimumWorld);
            BABYLON.Vector3.FromFloatsToRef(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, this.maximumWorld);
            for (var index = 0; index < this.vectors.length; index++) {
                var v = this.vectorsWorld[index];
                BABYLON.Vector3.TransformCoordinatesToRef(this.vectors[index], world, v);
                if (v.x < this.minimumWorld.x) this.minimumWorld.x = v.x;
                if (v.y < this.minimumWorld.y) this.minimumWorld.y = v.y;
                if (v.z < this.minimumWorld.z) this.minimumWorld.z = v.z;
                if (v.x > this.maximumWorld.x) this.maximumWorld.x = v.x;
                if (v.y > this.maximumWorld.y) this.maximumWorld.y = v.y;
                if (v.z > this.maximumWorld.z) this.maximumWorld.z = v.z;
            }
            this.maximumWorld.addToRef(this.minimumWorld, this.center);
            this.center.scaleInPlace(0.5);
            BABYLON.Vector3.FromFloatArrayToRef(world.m, 0, this.directions[0]);
            BABYLON.Vector3.FromFloatArrayToRef(world.m, 4, this.directions[1]);
            BABYLON.Vector3.FromFloatArrayToRef(world.m, 8, this.directions[2]);
            this._worldMatrix = world;
        };
        BoundingBox.prototype.isInFrustum = function (frustumPlanes) {
            return BoundingBox.IsInFrustum(this.vectorsWorld, frustumPlanes);
        };
        BoundingBox.prototype.intersectsPoint = function (point) {
            var delta = BABYLON.Engine.Epsilon;
            if (this.maximumWorld.x - point.x < delta || delta > point.x - this.minimumWorld.x) return false;
            if (this.maximumWorld.y - point.y < delta || delta > point.y - this.minimumWorld.y) return false;
            if (this.maximumWorld.z - point.z < delta || delta > point.z - this.minimumWorld.z) return false;
            return true;
        };
        BoundingBox.prototype.intersectsSphere = function (sphere) {
            return BoundingBox.IntersectsSphere(this.minimumWorld, this.maximumWorld, sphere.centerWorld, sphere.radiusWorld);
        };
        BoundingBox.prototype.intersectsMinMax = function (min, max) {
            if (this.maximumWorld.x < min.x || this.minimumWorld.x > max.x) return false;
            if (this.maximumWorld.y < min.y || this.minimumWorld.y > max.y) return false;
            if (this.maximumWorld.z < min.z || this.minimumWorld.z > max.z) return false;
            return true;
        };
        BoundingBox.Intersects = function (box0, box1) {
            if (box0.maximumWorld.x < box1.minimumWorld.x || box0.minimumWorld.x > box1.maximumWorld.x) return false;
            if (box0.maximumWorld.y < box1.minimumWorld.y || box0.minimumWorld.y > box1.maximumWorld.y) return false;
            if (box0.maximumWorld.z < box1.minimumWorld.z || box0.minimumWorld.z > box1.maximumWorld.z) return false;
            return true;
        };
        BoundingBox.IntersectsSphere = function (minPoint, maxPoint, sphereCenter, sphereRadius) {
            var vector = BABYLON.Vector3.Clamp(sphereCenter, minPoint, maxPoint);
            var num = BABYLON.Vector3.DistanceSquared(sphereCenter, vector);
            return (num <= (sphereRadius * sphereRadius));
        };
        BoundingBox.IsInFrustum = function (boundingVectors, frustumPlanes) {
            for (var p = 0; p < 6; p++) {
                var inCount = 8;
                for (var i = 0; i < 8; i++) {
                    if (frustumPlanes[p].dotCoordinate(boundingVectors[i]) < 0) {
                        --inCount;
                    } else {
                        break;
                    }
                }
                if (inCount == 0) return false;
            }
            return true;
        };
        return BoundingBox;
    })();
    BABYLON.BoundingBox = BoundingBox;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var computeBoxExtents = function (axis, box) {
            var p = BABYLON.Vector3.Dot(box.center, axis);
            var r0 = Math.abs(BABYLON.Vector3.Dot(box.directions[0], axis)) * box.extends.x;
            var r1 = Math.abs(BABYLON.Vector3.Dot(box.directions[1], axis)) * box.extends.y;
            var r2 = Math.abs(BABYLON.Vector3.Dot(box.directions[2], axis)) * box.extends.z;
            var r = r0 + r1 + r2;
            return {
                min: p - r,
                max: p + r
            };
        };
    var extentsOverlap = function (min0, max0, min1, max1) {
            return !(min0 > max1 || min1 > max0);
        };
    var axisOverlap = function (axis, box0, box1) {
            var result0 = computeBoxExtents(axis, box0);
            var result1 = computeBoxExtents(axis, box1);
            return extentsOverlap(result0.min, result0.max, result1.min, result1.max);
        };
    var BoundingInfo = (function () {
        function BoundingInfo(minimum, maximum) {
            this.minimum = minimum;
            this.maximum = maximum;
            this.boundingBox = new BABYLON.BoundingBox(minimum, maximum);
            this.boundingSphere = new BABYLON.BoundingSphere(minimum, maximum);
        }
        BoundingInfo.prototype._update = function (world) {
            this.boundingBox._update(world);
            this.boundingSphere._update(world);
        };
        BoundingInfo.prototype.isInFrustum = function (frustumPlanes) {
            if (!this.boundingSphere.isInFrustum(frustumPlanes)) return false;
            return this.boundingBox.isInFrustum(frustumPlanes);
        };
        BoundingInfo.prototype._checkCollision = function (collider) {
            return collider._canDoCollision(this.boundingSphere.centerWorld, this.boundingSphere.radiusWorld, this.boundingBox.minimumWorld, this.boundingBox.maximumWorld);
        };
        BoundingInfo.prototype.intersectsPoint = function (point) {
            if (!this.boundingSphere.centerWorld) {
                return false;
            }
            if (!this.boundingSphere.intersectsPoint(point)) {
                return false;
            }
            if (!this.boundingBox.intersectsPoint(point)) {
                return false;
            }
            return true;
        };
        BoundingInfo.prototype.intersects = function (boundingInfo, precise) {
            if (!this.boundingSphere.centerWorld || !boundingInfo.boundingSphere.centerWorld) {
                return false;
            }
            if (!BABYLON.BoundingSphere.Intersects(this.boundingSphere, boundingInfo.boundingSphere)) {
                return false;
            }
            if (!BABYLON.BoundingBox.Intersects(this.boundingBox, boundingInfo.boundingBox)) {
                return false;
            }
            if (!precise) {
                return true;
            }
            var box0 = this.boundingBox;
            var box1 = boundingInfo.boundingBox;
            if (!axisOverlap(box0.directions[0], box0, box1)) return false;
            if (!axisOverlap(box0.directions[1], box0, box1)) return false;
            if (!axisOverlap(box0.directions[2], box0, box1)) return false;
            if (!axisOverlap(box1.directions[0], box0, box1)) return false;
            if (!axisOverlap(box1.directions[1], box0, box1)) return false;
            if (!axisOverlap(box1.directions[2], box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0], box1.directions[0]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0], box1.directions[1]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[0], box1.directions[2]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1], box1.directions[0]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1], box1.directions[1]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[1], box1.directions[2]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2], box1.directions[0]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2], box1.directions[1]), box0, box1)) return false;
            if (!axisOverlap(BABYLON.Vector3.Cross(box0.directions[2], box1.directions[2]), box0, box1)) return false;
            return true;
        };
        return BoundingInfo;
    })();
    BABYLON.BoundingInfo = BoundingInfo;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Light = (function (_super) {
        __extends(Light, _super);

        function Light(name, scene) {
            _super.call(this, name, scene);
            this.diffuse = new BABYLON.Color3(1.0, 1.0, 1.0);
            this.specular = new BABYLON.Color3(1.0, 1.0, 1.0);
            this.intensity = 1.0;
            this.range = Number.MAX_VALUE;
            this.includedOnlyMeshes = new Array();
            this.excludedMeshes = new Array();
            this._excludedMeshesIds = new Array();
            this._includedOnlyMeshesIds = new Array();
            scene.lights.push(this);
        }
        Light.prototype.getShadowGenerator = function () {
            return this._shadowGenerator;
        };
        Light.prototype.transferToEffect = function (effect, uniformName0, uniformName1) {};
        Light.prototype._getWorldMatrix = function () {
            return BABYLON.Matrix.Identity();
        };
        Light.prototype.canAffectMesh = function (mesh) {
            if (!mesh) {
                return true;
            }
            if (this.includedOnlyMeshes.length > 0 && this.includedOnlyMeshes.indexOf(mesh) === -1) {
                return false;
            }
            if (this.includedOnlyMeshes.length > 0 && this.excludedMeshes.indexOf(mesh) !== -1) {
                return false;
            }
            return true;
        };
        Light.prototype.getWorldMatrix = function () {
            this._currentRenderId = this.getScene().getRenderId();
            var worldMatrix = this._getWorldMatrix();
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._parentedWorldMatrix) {
                    this._parentedWorldMatrix = BABYLON.Matrix.Identity();
                }
                worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._parentedWorldMatrix);
                return this._parentedWorldMatrix;
            }
            return worldMatrix;
        };
        Light.prototype.dispose = function () {
            if (this._shadowGenerator) {
                this._shadowGenerator.dispose();
                this._shadowGenerator = null;
            }
            var index = this.getScene().lights.indexOf(this);
            this.getScene().lights.splice(index, 1);
        };
        return Light;
    })(BABYLON.Node);
    BABYLON.Light = Light;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var PointLight = (function (_super) {
        __extends(PointLight, _super);

        function PointLight(name, position, scene) {
            _super.call(this, name, scene);
            this.position = position;
        }
        PointLight.prototype.transferToEffect = function (effect, positionUniformName) {
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._transformedPosition) {
                    this._transformedPosition = BABYLON.Vector3.Zero();
                }
                BABYLON.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._transformedPosition);
                effect.setFloat4(positionUniformName, this._transformedPosition.x, this._transformedPosition.y, this._transformedPosition.z, 0);
                return;
            }
            effect.setFloat4(positionUniformName, this.position.x, this.position.y, this.position.z, 0);
        };
        PointLight.prototype.getShadowGenerator = function () {
            return null;
        };
        PointLight.prototype._getWorldMatrix = function () {
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            BABYLON.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix);
            return this._worldMatrix;
        };
        return PointLight;
    })(BABYLON.Light);
    BABYLON.PointLight = PointLight;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var SpotLight = (function (_super) {
        __extends(SpotLight, _super);

        function SpotLight(name, position, direction, angle, exponent, scene) {
            _super.call(this, name, scene);
            this.position = position;
            this.direction = direction;
            this.angle = angle;
            this.exponent = exponent;
        }
        SpotLight.prototype.setDirectionToTarget = function (target) {
            this.direction = BABYLON.Vector3.Normalize(target.subtract(this.position));
            return this.direction;
        };
        SpotLight.prototype.transferToEffect = function (effect, positionUniformName, directionUniformName) {
            var normalizeDirection;
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._transformedDirection) {
                    this._transformedDirection = BABYLON.Vector3.Zero();
                }
                if (!this._transformedPosition) {
                    this._transformedPosition = BABYLON.Vector3.Zero();
                }
                var parentWorldMatrix = this.parent.getWorldMatrix();
                BABYLON.Vector3.TransformCoordinatesToRef(this.position, parentWorldMatrix, this._transformedPosition);
                BABYLON.Vector3.TransformNormalToRef(this.direction, parentWorldMatrix, this._transformedDirection);
                effect.setFloat4(positionUniformName, this._transformedPosition.x, this._transformedPosition.y, this._transformedPosition.z, this.exponent);
                normalizeDirection = BABYLON.Vector3.Normalize(this._transformedDirection);
            } else {
                effect.setFloat4(positionUniformName, this.position.x, this.position.y, this.position.z, this.exponent);
                normalizeDirection = BABYLON.Vector3.Normalize(this.direction);
            }
            effect.setFloat4(directionUniformName, normalizeDirection.x, normalizeDirection.y, normalizeDirection.z, Math.cos(this.angle * 0.5));
        };
        SpotLight.prototype._getWorldMatrix = function () {
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            BABYLON.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix);
            return this._worldMatrix;
        };
        return SpotLight;
    })(BABYLON.Light);
    BABYLON.SpotLight = SpotLight;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var DirectionalLight = (function (_super) {
        __extends(DirectionalLight, _super);

        function DirectionalLight(name, direction, scene) {
            _super.call(this, name, scene);
            this.direction = direction;
            this.position = direction.scale(-1);
        }
        DirectionalLight.prototype.setDirectionToTarget = function (target) {
            this.direction = BABYLON.Vector3.Normalize(target.subtract(this.position));
            return this.direction;
        };
        DirectionalLight.prototype._computeTransformedPosition = function () {
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._transformedPosition) {
                    this._transformedPosition = BABYLON.Vector3.Zero();
                }
                BABYLON.Vector3.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this._transformedPosition);
                return true;
            }
            return false;
        };
        DirectionalLight.prototype.transferToEffect = function (effect, directionUniformName) {
            if (this.parent && this.parent.getWorldMatrix) {
                if (!this._transformedDirection) {
                    this._transformedDirection = BABYLON.Vector3.Zero();
                }
                BABYLON.Vector3.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this._transformedDirection);
                effect.setFloat4(directionUniformName, this._transformedDirection.x, this._transformedDirection.y, this._transformedDirection.z, 1);
                return;
            }
            effect.setFloat4(directionUniformName, this.direction.x, this.direction.y, this.direction.z, 1);
        };
        DirectionalLight.prototype._getWorldMatrix = function () {
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            BABYLON.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix);
            return this._worldMatrix;
        };
        return DirectionalLight;
    })(BABYLON.Light);
    BABYLON.DirectionalLight = DirectionalLight;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var ShadowGenerator = (function () {
        function ShadowGenerator(mapSize, light) {
            var _this = this;
            this.filter = ShadowGenerator.FILTER_VARIANCESHADOWMAP;
            this._darkness = 0;
            this._transparencyShadow = false;
            this._viewMatrix = BABYLON.Matrix.Zero();
            this._projectionMatrix = BABYLON.Matrix.Zero();
            this._transformMatrix = BABYLON.Matrix.Zero();
            this._worldViewProjection = BABYLON.Matrix.Zero();
            this._light = light;
            this._scene = light.getScene();
            light._shadowGenerator = this;
            this._shadowMap = new BABYLON.RenderTargetTexture(light.name + "_shadowMap", mapSize, this._scene, false);
            this._shadowMap.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this._shadowMap.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this._shadowMap.renderParticles = false;
            var renderSubMesh = function (subMesh) {
                    var mesh = subMesh.getRenderingMesh();
                    var scene = _this._scene;
                    var engine = scene.getEngine();
                    engine.setState(subMesh.getMaterial().backFaceCulling);
                    var batch = mesh._getInstancesRenderList(subMesh._id);
                    if (batch.mustReturn) {
                        return;
                    }
                    var hardwareInstancedRendering = (engine.getCaps().instancedArrays !== null) && (batch.visibleInstances !== null);
                    if (_this.isReady(subMesh, hardwareInstancedRendering)) {
                        engine.enableEffect(_this._effect);
                        mesh._bind(subMesh, _this._effect, false);
                        var material = subMesh.getMaterial();
                        _this._effect.setMatrix("viewProjection", _this.getTransformMatrix());
                        if (material && material.needAlphaTesting()) {
                            var alphaTexture = material.getAlphaTestTexture();
                            _this._effect.setTexture("diffuseSampler", alphaTexture);
                            _this._effect.setMatrix("diffuseMatrix", alphaTexture.getTextureMatrix());
                        }
                        var useBones = mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind);
                        if (useBones) {
                            _this._effect.setMatrices("mBones", mesh.skeleton.getTransformMatrices());
                        }
                        if (hardwareInstancedRendering) {
                            mesh._renderWithInstances(subMesh, false, batch, _this._effect, engine);
                        } else {
                            if (batch.renderSelf[subMesh._id]) {
                                _this._effect.setMatrix("world", mesh.getWorldMatrix());
                                mesh._draw(subMesh, true);
                            }
                            if (batch.visibleInstances[subMesh._id]) {
                                for (var instanceIndex = 0; instanceIndex < batch.visibleInstances[subMesh._id].length; instanceIndex++) {
                                    var instance = batch.visibleInstances[subMesh._id][instanceIndex];
                                    _this._effect.setMatrix("world", instance.getWorldMatrix());
                                    mesh._draw(subMesh, true);
                                }
                            }
                        }
                    } else {
                        _this._shadowMap.resetRefreshCounter();
                    }
                };
            this._shadowMap.customRenderFunction = function (opaqueSubMeshes, alphaTestSubMeshes, transparentSubMeshes) {
                var index;
                for (index = 0; index < opaqueSubMeshes.length; index++) {
                    renderSubMesh(opaqueSubMeshes.data[index]);
                }
                for (index = 0; index < alphaTestSubMeshes.length; index++) {
                    renderSubMesh(alphaTestSubMeshes.data[index]);
                }
                if (_this._transparencyShadow) {
                    for (index = 0; index < transparentSubMeshes.length; index++) {
                        renderSubMesh(transparentSubMeshes.data[index]);
                    }
                }
            };
        }
        Object.defineProperty(ShadowGenerator, "FILTER_NONE", {
            get: function () {
                return ShadowGenerator._FILTER_NONE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShadowGenerator, "FILTER_VARIANCESHADOWMAP", {
            get: function () {
                return ShadowGenerator._FILTER_VARIANCESHADOWMAP;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShadowGenerator, "FILTER_POISSONSAMPLING", {
            get: function () {
                return ShadowGenerator._FILTER_POISSONSAMPLING;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShadowGenerator.prototype, "useVarianceShadowMap", {
            get: function () {
                return this.filter === ShadowGenerator.FILTER_VARIANCESHADOWMAP;
            },
            set: function (value) {
                this.filter = (value ? ShadowGenerator.FILTER_VARIANCESHADOWMAP : ShadowGenerator.FILTER_NONE);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShadowGenerator.prototype, "usePoissonSampling", {
            get: function () {
                return this.filter === ShadowGenerator.FILTER_POISSONSAMPLING;
            },
            set: function (value) {
                this.filter = (value ? ShadowGenerator.FILTER_POISSONSAMPLING : ShadowGenerator.FILTER_NONE);
            },
            enumerable: true,
            configurable: true
        });
        ShadowGenerator.prototype.isReady = function (subMesh, useInstances) {
            var defines = [];
            if (this.useVarianceShadowMap) {
                defines.push("#define VSM");
            }
            var attribs = [BABYLON.VertexBuffer.PositionKind];
            var mesh = subMesh.getMesh();
            var material = subMesh.getMaterial();
            if (material && material.needAlphaTesting()) {
                defines.push("#define ALPHATEST");
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                    attribs.push(BABYLON.VertexBuffer.UVKind);
                    defines.push("#define UV1");
                }
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)) {
                    attribs.push(BABYLON.VertexBuffer.UV2Kind);
                    defines.push("#define UV2");
                }
            }
            if (mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                attribs.push(BABYLON.VertexBuffer.MatricesIndicesKind);
                attribs.push(BABYLON.VertexBuffer.MatricesWeightsKind);
                defines.push("#define BONES");
                defines.push("#define BonesPerMesh " + (mesh.skeleton.bones.length + 1));
            }
            if (useInstances) {
                defines.push("#define INSTANCES");
                attribs.push("world0");
                attribs.push("world1");
                attribs.push("world2");
                attribs.push("world3");
            }
            var join = defines.join("\n");
            if (this._cachedDefines != join) {
                this._cachedDefines = join;
                this._effect = this._scene.getEngine().createEffect("shadowMap", attribs, ["world", "mBones", "viewProjection", "diffuseMatrix"], ["diffuseSampler"], join);
            }
            return this._effect.isReady();
        };
        ShadowGenerator.prototype.getShadowMap = function () {
            return this._shadowMap;
        };
        ShadowGenerator.prototype.getLight = function () {
            return this._light;
        };
        ShadowGenerator.prototype.getTransformMatrix = function () {
            var lightPosition = this._light.position;
            var lightDirection = this._light.direction;
            if (this._light._computeTransformedPosition()) {
                lightPosition = this._light._transformedPosition;
            }
            if (!this._cachedPosition || !this._cachedDirection || !lightPosition.equals(this._cachedPosition) || !lightDirection.equals(this._cachedDirection)) {
                this._cachedPosition = lightPosition.clone();
                this._cachedDirection = lightDirection.clone();
                var activeCamera = this._scene.activeCamera;
                BABYLON.Matrix.LookAtLHToRef(lightPosition, this._light.position.add(lightDirection), BABYLON.Vector3.Up(), this._viewMatrix);
                BABYLON.Matrix.PerspectiveFovLHToRef(Math.PI / 2.0, 1.0, activeCamera.minZ, activeCamera.maxZ, this._projectionMatrix);
                this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
            }
            return this._transformMatrix;
        };
        ShadowGenerator.prototype.getDarkness = function () {
            return this._darkness;
        };
        ShadowGenerator.prototype.setDarkness = function (darkness) {
            if (darkness >= 1.0) this._darkness = 1.0;
            else if (darkness <= 0.0) this._darkness = 0.0;
            elsethis._darkness = darkness;
        };
        ShadowGenerator.prototype.setTransparencyShadow = function (hasShadow) {
            this._transparencyShadow = hasShadow;
        };
        ShadowGenerator.prototype.dispose = function () {
            this._shadowMap.dispose();
        };
        ShadowGenerator._FILTER_NONE = 0;
        ShadowGenerator._FILTER_VARIANCESHADOWMAP = 1;
        ShadowGenerator._FILTER_POISSONSAMPLING = 2;
        return ShadowGenerator;
    })();
    BABYLON.ShadowGenerator = ShadowGenerator;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var HemisphericLight = (function (_super) {
        __extends(HemisphericLight, _super);

        function HemisphericLight(name, direction, scene) {
            _super.call(this, name, scene);
            this.direction = direction;
            this.groundColor = new BABYLON.Color3(0.0, 0.0, 0.0);
        }
        HemisphericLight.prototype.setDirectionToTarget = function (target) {
            this.direction = BABYLON.Vector3.Normalize(target.subtract(BABYLON.Vector3.Zero()));
            return this.direction;
        };
        HemisphericLight.prototype.getShadowGenerator = function () {
            return null;
        };
        HemisphericLight.prototype.transferToEffect = function (effect, directionUniformName, groundColorUniformName) {
            var normalizeDirection = BABYLON.Vector3.Normalize(this.direction);
            effect.setFloat4(directionUniformName, normalizeDirection.x, normalizeDirection.y, normalizeDirection.z, 0);
            effect.setColor3(groundColorUniformName, this.groundColor.scale(this.intensity));
        };
        HemisphericLight.prototype._getWorldMatrix = function () {
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            return this._worldMatrix;
        };
        return HemisphericLight;
    })(BABYLON.Light);
    BABYLON.HemisphericLight = HemisphericLight;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var intersectBoxAASphere = function (boxMin, boxMax, sphereCenter, sphereRadius) {
            if (boxMin.x > sphereCenter.x + sphereRadius) return false;
            if (sphereCenter.x - sphereRadius > boxMax.x) return false;
            if (boxMin.y > sphereCenter.y + sphereRadius) return false;
            if (sphereCenter.y - sphereRadius > boxMax.y) return false;
            if (boxMin.z > sphereCenter.z + sphereRadius) return false;
            if (sphereCenter.z - sphereRadius > boxMax.z) return false;
            return true;
        };
    var getLowestRoot = function (a, b, c, maxR) {
            var determinant = b * b - 4.0 * a * c;
            var result = {
                root: 0,
                found: false
            };
            if (determinant < 0) return result;
            var sqrtD = Math.sqrt(determinant);
            var r1 = (-b - sqrtD) / (2.0 * a);
            var r2 = (-b + sqrtD) / (2.0 * a);
            if (r1 > r2) {
                var temp = r2;
                r2 = r1;
                r1 = temp;
            }
            if (r1 > 0 && r1 < maxR) {
                result.root = r1;
                result.found = true;
                return result;
            }
            if (r2 > 0 && r2 < maxR) {
                result.root = r2;
                result.found = true;
                return result;
            }
            return result;
        };
    var Collider = (function () {
        function Collider() {
            this.radius = new BABYLON.Vector3(1, 1, 1);
            this.retry = 0;
            this.basePointWorld = BABYLON.Vector3.Zero();
            this.velocityWorld = BABYLON.Vector3.Zero();
            this.normalizedVelocity = BABYLON.Vector3.Zero();
            this._collisionPoint = BABYLON.Vector3.Zero();
            this._planeIntersectionPoint = BABYLON.Vector3.Zero();
            this._tempVector = BABYLON.Vector3.Zero();
            this._tempVector2 = BABYLON.Vector3.Zero();
            this._tempVector3 = BABYLON.Vector3.Zero();
            this._tempVector4 = BABYLON.Vector3.Zero();
            this._edge = BABYLON.Vector3.Zero();
            this._baseToVertex = BABYLON.Vector3.Zero();
            this._destinationPoint = BABYLON.Vector3.Zero();
            this._slidePlaneNormal = BABYLON.Vector3.Zero();
            this._displacementVector = BABYLON.Vector3.Zero();
        }
        Collider.prototype._initialize = function (source, dir, e) {
            this.velocity = dir;
            BABYLON.Vector3.NormalizeToRef(dir, this.normalizedVelocity);
            this.basePoint = source;
            source.multiplyToRef(this.radius, this.basePointWorld);
            dir.multiplyToRef(this.radius, this.velocityWorld);
            this.velocityWorldLength = this.velocityWorld.length();
            this.epsilon = e;
            this.collisionFound = false;
        };
        Collider.prototype._checkPointInTriangle = function (point, pa, pb, pc, n) {
            pa.subtractToRef(point, this._tempVector);
            pb.subtractToRef(point, this._tempVector2);
            BABYLON.Vector3.CrossToRef(this._tempVector, this._tempVector2, this._tempVector4);
            var d = BABYLON.Vector3.Dot(this._tempVector4, n);
            if (d < 0) return false;
            pc.subtractToRef(point, this._tempVector3);
            BABYLON.Vector3.CrossToRef(this._tempVector2, this._tempVector3, this._tempVector4);
            d = BABYLON.Vector3.Dot(this._tempVector4, n);
            if (d < 0) return false;
            BABYLON.Vector3.CrossToRef(this._tempVector3, this._tempVector, this._tempVector4);
            d = BABYLON.Vector3.Dot(this._tempVector4, n);
            return d >= 0;
        };
        Collider.prototype._canDoCollision = function (sphereCenter, sphereRadius, vecMin, vecMax) {
            var distance = BABYLON.Vector3.Distance(this.basePointWorld, sphereCenter);
            var max = Math.max(this.radius.x, this.radius.y, this.radius.z);
            if (distance > this.velocityWorldLength + max + sphereRadius) {
                return false;
            }
            if (!intersectBoxAASphere(vecMin, vecMax, this.basePointWorld, this.velocityWorldLength + max)) return false;
            return true;
        };
        Collider.prototype._testTriangle = function (faceIndex, subMesh, p1, p2, p3) {
            var t0;
            var embeddedInPlane = false;
            if (!subMesh._trianglePlanes) {
                subMesh._trianglePlanes = [];
            }
            if (!subMesh._trianglePlanes[faceIndex]) {
                subMesh._trianglePlanes[faceIndex] = new BABYLON.Plane(0, 0, 0, 0);
                subMesh._trianglePlanes[faceIndex].copyFromPoints(p1, p2, p3);
            }
            var trianglePlane = subMesh._trianglePlanes[faceIndex];
            if ((!subMesh.getMaterial()) && !trianglePlane.isFrontFacingTo(this.normalizedVelocity, 0)) return;
            var signedDistToTrianglePlane = trianglePlane.signedDistanceTo(this.basePoint);
            var normalDotVelocity = BABYLON.Vector3.Dot(trianglePlane.normal, this.velocity);
            if (normalDotVelocity == 0) {
                if (Math.abs(signedDistToTrianglePlane) >= 1.0) return;
                embeddedInPlane = true;
                t0 = 0;
            } else {
                t0 = (-1.0 - signedDistToTrianglePlane) / normalDotVelocity;
                var t1 = (1.0 - signedDistToTrianglePlane) / normalDotVelocity;
                if (t0 > t1) {
                    var temp = t1;
                    t1 = t0;
                    t0 = temp;
                }
                if (t0 > 1.0 || t1 < 0.0) return;
                if (t0 < 0) t0 = 0;
                if (t0 > 1.0) t0 = 1.0;
            }
            this._collisionPoint.copyFromFloats(0, 0, 0);
            var found = false;
            var t = 1.0;
            if (!embeddedInPlane) {
                this.basePoint.subtractToRef(trianglePlane.normal, this._planeIntersectionPoint);
                this.velocity.scaleToRef(t0, this._tempVector);
                this._planeIntersectionPoint.addInPlace(this._tempVector);
                if (this._checkPointInTriangle(this._planeIntersectionPoint, p1, p2, p3, trianglePlane.normal)) {
                    found = true;
                    t = t0;
                    this._collisionPoint.copyFrom(this._planeIntersectionPoint);
                }
            }
            if (!found) {
                var velocitySquaredLength = this.velocity.lengthSquared();
                var a = velocitySquaredLength;
                this.basePoint.subtractToRef(p1, this._tempVector);
                var b = 2.0 * (BABYLON.Vector3.Dot(this.velocity, this._tempVector));
                var c = this._tempVector.lengthSquared() - 1.0;
                var lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    t = lowestRoot.root;
                    found = true;
                    this._collisionPoint.copyFrom(p1);
                }
                this.basePoint.subtractToRef(p2, this._tempVector);
                b = 2.0 * (BABYLON.Vector3.Dot(this.velocity, this._tempVector));
                c = this._tempVector.lengthSquared() - 1.0;
                lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    t = lowestRoot.root;
                    found = true;
                    this._collisionPoint.copyFrom(p2);
                }
                this.basePoint.subtractToRef(p3, this._tempVector);
                b = 2.0 * (BABYLON.Vector3.Dot(this.velocity, this._tempVector));
                c = this._tempVector.lengthSquared() - 1.0;
                lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    t = lowestRoot.root;
                    found = true;
                    this._collisionPoint.copyFrom(p3);
                }
                p2.subtractToRef(p1, this._edge);
                p1.subtractToRef(this.basePoint, this._baseToVertex);
                var edgeSquaredLength = this._edge.lengthSquared();
                var edgeDotVelocity = BABYLON.Vector3.Dot(this._edge, this.velocity);
                var edgeDotBaseToVertex = BABYLON.Vector3.Dot(this._edge, this._baseToVertex);
                a = edgeSquaredLength * (-velocitySquaredLength) + edgeDotVelocity * edgeDotVelocity;
                b = edgeSquaredLength * (2.0 * BABYLON.Vector3.Dot(this.velocity, this._baseToVertex)) - 2.0 * edgeDotVelocity * edgeDotBaseToVertex;
                c = edgeSquaredLength * (1.0 - this._baseToVertex.lengthSquared()) + edgeDotBaseToVertex * edgeDotBaseToVertex;
                lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    var f = (edgeDotVelocity * lowestRoot.root - edgeDotBaseToVertex) / edgeSquaredLength;
                    if (f >= 0.0 && f <= 1.0) {
                        t = lowestRoot.root;
                        found = true;
                        this._edge.scaleInPlace(f);
                        p1.addToRef(this._edge, this._collisionPoint);
                    }
                }
                p3.subtractToRef(p2, this._edge);
                p2.subtractToRef(this.basePoint, this._baseToVertex);
                edgeSquaredLength = this._edge.lengthSquared();
                edgeDotVelocity = BABYLON.Vector3.Dot(this._edge, this.velocity);
                edgeDotBaseToVertex = BABYLON.Vector3.Dot(this._edge, this._baseToVertex);
                a = edgeSquaredLength * (-velocitySquaredLength) + edgeDotVelocity * edgeDotVelocity;
                b = edgeSquaredLength * (2.0 * BABYLON.Vector3.Dot(this.velocity, this._baseToVertex)) - 2.0 * edgeDotVelocity * edgeDotBaseToVertex;
                c = edgeSquaredLength * (1.0 - this._baseToVertex.lengthSquared()) + edgeDotBaseToVertex * edgeDotBaseToVertex;
                lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    f = (edgeDotVelocity * lowestRoot.root - edgeDotBaseToVertex) / edgeSquaredLength;
                    if (f >= 0.0 && f <= 1.0) {
                        t = lowestRoot.root;
                        found = true;
                        this._edge.scaleInPlace(f);
                        p2.addToRef(this._edge, this._collisionPoint);
                    }
                }
                p1.subtractToRef(p3, this._edge);
                p3.subtractToRef(this.basePoint, this._baseToVertex);
                edgeSquaredLength = this._edge.lengthSquared();
                edgeDotVelocity = BABYLON.Vector3.Dot(this._edge, this.velocity);
                edgeDotBaseToVertex = BABYLON.Vector3.Dot(this._edge, this._baseToVertex);
                a = edgeSquaredLength * (-velocitySquaredLength) + edgeDotVelocity * edgeDotVelocity;
                b = edgeSquaredLength * (2.0 * BABYLON.Vector3.Dot(this.velocity, this._baseToVertex)) - 2.0 * edgeDotVelocity * edgeDotBaseToVertex;
                c = edgeSquaredLength * (1.0 - this._baseToVertex.lengthSquared()) + edgeDotBaseToVertex * edgeDotBaseToVertex;
                lowestRoot = getLowestRoot(a, b, c, t);
                if (lowestRoot.found) {
                    f = (edgeDotVelocity * lowestRoot.root - edgeDotBaseToVertex) / edgeSquaredLength;
                    if (f >= 0.0 && f <= 1.0) {
                        t = lowestRoot.root;
                        found = true;
                        this._edge.scaleInPlace(f);
                        p3.addToRef(this._edge, this._collisionPoint);
                    }
                }
            }
            if (found) {
                var distToCollision = t * this.velocity.length();
                if (!this.collisionFound || distToCollision < this.nearestDistance) {
                    if (!this.intersectionPoint) {
                        this.intersectionPoint = this._collisionPoint.clone();
                    } else {
                        this.intersectionPoint.copyFrom(this._collisionPoint);
                    }
                    this.nearestDistance = distToCollision;
                    this.collisionFound = true;
                    this.collidedMesh = subMesh.getMesh();
                }
            }
        };
        Collider.prototype._collide = function (subMesh, pts, indices, indexStart, indexEnd, decal) {
            for (var i = indexStart; i < indexEnd; i += 3) {
                var p1 = pts[indices[i] - decal];
                var p2 = pts[indices[i + 1] - decal];
                var p3 = pts[indices[i + 2] - decal];
                this._testTriangle(i, subMesh, p3, p2, p1);
            }
        };
        Collider.prototype._getResponse = function (pos, vel) {
            pos.addToRef(vel, this._destinationPoint);
            vel.scaleInPlace((this.nearestDistance / vel.length()));
            this.basePoint.addToRef(vel, pos);
            pos.subtractToRef(this.intersectionPoint, this._slidePlaneNormal);
            this._slidePlaneNormal.normalize();
            this._slidePlaneNormal.scaleToRef(this.epsilon, this._displacementVector);
            pos.addInPlace(this._displacementVector);
            this.intersectionPoint.addInPlace(this._displacementVector);
            this._slidePlaneNormal.scaleInPlace(BABYLON.Plane.SignedDistanceToPlaneFromPositionAndNormal(this.intersectionPoint, this._slidePlaneNormal, this._destinationPoint));
            this._destinationPoint.subtractInPlace(this._slidePlaneNormal);
            this._destinationPoint.subtractToRef(this.intersectionPoint, vel);
        };
        return Collider;
    })();
    BABYLON.Collider = Collider;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Camera = (function (_super) {
        __extends(Camera, _super);

        function Camera(name, position, scene) {
            _super.call(this, name, scene);
            this.position = position;
            this.upVector = BABYLON.Vector3.Up();
            this.orthoLeft = null;
            this.orthoRight = null;
            this.orthoBottom = null;
            this.orthoTop = null;
            this.fov = 0.8;
            this.minZ = 0.1;
            this.maxZ = 1000.0;
            this.inertia = 0.9;
            this.mode = Camera.PERSPECTIVE_CAMERA;
            this.isIntermediate = false;
            this.viewport = new BABYLON.Viewport(0, 0, 1.0, 1.0);
            this.subCameras = [];
            this.layerMask = 0xFFFFFFFF;
            this._computedViewMatrix = BABYLON.Matrix.Identity();
            this._projectionMatrix = new BABYLON.Matrix();
            this._postProcesses = new Array();
            this._postProcessesTakenIndices = [];
            scene.cameras.push(this);
            if (!scene.activeCamera) {
                scene.activeCamera = this;
            }
        }
        Camera.prototype._initCache = function () {
            _super.prototype._initCache.call(this);
            this._cache.position = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            this._cache.upVector = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            this._cache.mode = undefined;
            this._cache.minZ = undefined;
            this._cache.maxZ = undefined;
            this._cache.fov = undefined;
            this._cache.aspectRatio = undefined;
            this._cache.orthoLeft = undefined;
            this._cache.orthoRight = undefined;
            this._cache.orthoBottom = undefined;
            this._cache.orthoTop = undefined;
            this._cache.renderWidth = undefined;
            this._cache.renderHeight = undefined;
        };
        Camera.prototype._updateCache = function (ignoreParentClass) {
            if (!ignoreParentClass) {
                _super.prototype._updateCache.call(this);
            }
            var engine = this.getEngine();
            this._cache.position.copyFrom(this.position);
            this._cache.upVector.copyFrom(this.upVector);
            this._cache.mode = this.mode;
            this._cache.minZ = this.minZ;
            this._cache.maxZ = this.maxZ;
            this._cache.fov = this.fov;
            this._cache.aspectRatio = engine.getAspectRatio(this);
            this._cache.orthoLeft = this.orthoLeft;
            this._cache.orthoRight = this.orthoRight;
            this._cache.orthoBottom = this.orthoBottom;
            this._cache.orthoTop = this.orthoTop;
            this._cache.renderWidth = engine.getRenderWidth();
            this._cache.renderHeight = engine.getRenderHeight();
        };
        Camera.prototype._updateFromScene = function () {
            this.updateCache();
            this._update();
        };
        Camera.prototype._isSynchronized = function () {
            return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix();
        };
        Camera.prototype._isSynchronizedViewMatrix = function () {
            if (!_super.prototype._isSynchronized.call(this)) return false;
            return this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent();
        };
        Camera.prototype._isSynchronizedProjectionMatrix = function () {
            var check = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === this.maxZ;
            if (!check) {
                return false;
            }
            var engine = this.getEngine();
            if (this.mode === BABYLON.Camera.PERSPECTIVE_CAMERA) {
                check = this._cache.fov === this.fov && this._cache.aspectRatio === engine.getAspectRatio(this);
            } else {
                check = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === engine.getRenderWidth() && this._cache.renderHeight === engine.getRenderHeight();
            }
            return check;
        };
        Camera.prototype.attachControl = function (element) {};
        Camera.prototype.detachControl = function (element) {};
        Camera.prototype._update = function () {};
        Camera.prototype.attachPostProcess = function (postProcess, insertAt) {
            if (typeof insertAt === "undefined") {
                insertAt = null;
            }
            if (!postProcess.isReusable() && this._postProcesses.indexOf(postProcess) > -1) {
                BABYLON.Tools.Error("You're trying to reuse a post process not defined as reusable.");
                return 0;
            }
            if (insertAt == null || insertAt < 0) {
                this._postProcesses.push(postProcess);
                this._postProcessesTakenIndices.push(this._postProcesses.length - 1);
                return this._postProcesses.length - 1;
            }
            var add = 0;
            if (this._postProcesses[insertAt]) {
                var start = this._postProcesses.length - 1;
                for (var i = start; i >= insertAt + 1; --i) {
                    this._postProcesses[i + 1] = this._postProcesses[i];
                }
                add = 1;
            }
            for (i = 0; i < this._postProcessesTakenIndices.length; ++i) {
                if (this._postProcessesTakenIndices[i] < insertAt) {
                    continue;
                }
                start = this._postProcessesTakenIndices.length - 1;
                for (var j = start; j >= i; --j) {
                    this._postProcessesTakenIndices[j + 1] = this._postProcessesTakenIndices[j] + add;
                }
                this._postProcessesTakenIndices[i] = insertAt;
                break;
            }
            if (!add && this._postProcessesTakenIndices.indexOf(insertAt) == -1) {
                this._postProcessesTakenIndices.push(insertAt);
            }
            var result = insertAt + add;
            this._postProcesses[result] = postProcess;
            return result;
        };
        Camera.prototype.detachPostProcess = function (postProcess, atIndices) {
            if (typeof atIndices === "undefined") {
                atIndices = null;
            }
            var result = [];
            if (!atIndices) {
                var length = this._postProcesses.length;
                for (var i = 0; i < length; i++) {
                    if (this._postProcesses[i] !== postProcess) {
                        continue;
                    }
                    delete this._postProcesses[i];
                    var index = this._postProcessesTakenIndices.indexOf(i);
                    this._postProcessesTakenIndices.splice(index, 1);
                }
            } else {
                atIndices = (atIndices instanceof Array) ? atIndices : [atIndices];
                for (i = 0; i < atIndices.length; i++) {
                    var foundPostProcess = this._postProcesses[atIndices[i]];
                    if (foundPostProcess !== postProcess) {
                        result.push(i);
                        continue;
                    }
                    delete this._postProcesses[atIndices[i]];
                    index = this._postProcessesTakenIndices.indexOf(atIndices[i]);
                    this._postProcessesTakenIndices.splice(index, 1);
                }
            }
            return result;
        };
        Camera.prototype.getWorldMatrix = function () {
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            var viewMatrix = this.getViewMatrix();
            viewMatrix.invertToRef(this._worldMatrix);
            return this._worldMatrix;
        };
        Camera.prototype._getViewMatrix = function () {
            return BABYLON.Matrix.Identity();
        };
        Camera.prototype.getViewMatrix = function () {
            this._computedViewMatrix = this._computeViewMatrix();
            if (!this.parent || !this.parent.getWorldMatrix || this.isSynchronized()) {
                return this._computedViewMatrix;
            }
            if (!this._worldMatrix) {
                this._worldMatrix = BABYLON.Matrix.Identity();
            }
            this._computedViewMatrix.invertToRef(this._worldMatrix);
            this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._computedViewMatrix);
            this._computedViewMatrix.invert();
            this._currentRenderId = this.getScene().getRenderId();
            return this._computedViewMatrix;
        };
        Camera.prototype._computeViewMatrix = function (force) {
            if (!force && this._isSynchronizedViewMatrix()) {
                return this._computedViewMatrix;
            }
            this._computedViewMatrix = this._getViewMatrix();
            if (!this.parent || !this.parent.getWorldMatrix) {
                this._currentRenderId = this.getScene().getRenderId();
            }
            return this._computedViewMatrix;
        };
        Camera.prototype.getProjectionMatrix = function (force) {
            if (!force && this._isSynchronizedProjectionMatrix()) {
                return this._projectionMatrix;
            }
            var engine = this.getEngine();
            if (this.mode === BABYLON.Camera.PERSPECTIVE_CAMERA) {
                if (this.minZ <= 0) {
                    this.minZ = 0.1;
                }
                BABYLON.Matrix.PerspectiveFovLHToRef(this.fov, engine.getAspectRatio(this), this.minZ, this.maxZ, this._projectionMatrix);
                return this._projectionMatrix;
            }
            var halfWidth = engine.getRenderWidth() / 2.0;
            var halfHeight = engine.getRenderHeight() / 2.0;
            BABYLON.Matrix.OrthoOffCenterLHToRef(this.orthoLeft || -halfWidth, this.orthoRight || halfWidth, this.orthoBottom || -halfHeight, this.orthoTop || halfHeight, this.minZ, this.maxZ, this._projectionMatrix);
            return this._projectionMatrix;
        };
        Camera.prototype.dispose = function () {
            var index = this.getScene().cameras.indexOf(this);
            this.getScene().cameras.splice(index, 1);
            for (var i = 0; i < this._postProcessesTakenIndices.length; ++i) {
                this._postProcesses[this._postProcessesTakenIndices[i]].dispose(this);
            }
        };
        Camera.PERSPECTIVE_CAMERA = 0;
        Camera.ORTHOGRAPHIC_CAMERA = 1;
        return Camera;
    })(BABYLON.Node);
    BABYLON.Camera = Camera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var TargetCamera = (function (_super) {
        __extends(TargetCamera, _super);

        function TargetCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this.cameraDirection = new BABYLON.Vector3(0, 0, 0);
            this.cameraRotation = new BABYLON.Vector2(0, 0);
            this.rotation = new BABYLON.Vector3(0, 0, 0);
            this.speed = 2.0;
            this.noRotationConstraint = false;
            this.lockedTarget = null;
            this._currentTarget = BABYLON.Vector3.Zero();
            this._viewMatrix = BABYLON.Matrix.Zero();
            this._camMatrix = BABYLON.Matrix.Zero();
            this._cameraTransformMatrix = BABYLON.Matrix.Zero();
            this._cameraRotationMatrix = BABYLON.Matrix.Zero();
            this._referencePoint = new BABYLON.Vector3(0, 0, 1);
            this._transformedReferencePoint = BABYLON.Vector3.Zero();
            this._lookAtTemp = BABYLON.Matrix.Zero();
            this._tempMatrix = BABYLON.Matrix.Zero();
        }
        TargetCamera.prototype._getLockedTargetPosition = function () {
            if (!this.lockedTarget) {
                return null;
            }
            return this.lockedTarget.position || this.lockedTarget;
        };
        TargetCamera.prototype._initCache = function () {
            _super.prototype._initCache.call(this);
            this._cache.lockedTarget = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            this._cache.rotation = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        };
        TargetCamera.prototype._updateCache = function (ignoreParentClass) {
            if (!ignoreParentClass) {
                _super.prototype._updateCache.call(this);
            }
            var lockedTargetPosition = this._getLockedTargetPosition();
            if (!lockedTargetPosition) {
                this._cache.lockedTarget = null;
            } else {
                if (!this._cache.lockedTarget) {
                    this._cache.lockedTarget = lockedTargetPosition.clone();
                } else {
                    this._cache.lockedTarget.copyFrom(lockedTargetPosition);
                }
            }
            this._cache.rotation.copyFrom(this.rotation);
        };
        TargetCamera.prototype._isSynchronizedViewMatrix = function () {
            if (!_super.prototype._isSynchronizedViewMatrix.call(this)) {
                return false;
            }
            var lockedTargetPosition = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(lockedTargetPosition) : !lockedTargetPosition) && this._cache.rotation.equals(this.rotation);
        };
        TargetCamera.prototype._computeLocalCameraSpeed = function () {
            return this.speed * ((BABYLON.Tools.GetDeltaTime() / (BABYLON.Tools.GetFps() * 10.0)));
        };
        TargetCamera.prototype.setTarget = function (target) {
            this.upVector.normalize();
            BABYLON.Matrix.LookAtLHToRef(this.position, target, this.upVector, this._camMatrix);
            this._camMatrix.invert();
            this.rotation.x = Math.atan(this._camMatrix.m[6] / this._camMatrix.m[10]);
            var vDir = target.subtract(this.position);
            if (vDir.x >= 0.0) {
                this.rotation.y = (-Math.atan(vDir.z / vDir.x) + Math.PI / 2.0);
            } else {
                this.rotation.y = (-Math.atan(vDir.z / vDir.x) - Math.PI / 2.0);
            }
            this.rotation.z = -Math.acos(BABYLON.Vector3.Dot(new BABYLON.Vector3(0, 1.0, 0), this.upVector));
            if (isNaN(this.rotation.x)) {
                this.rotation.x = 0;
            }
            if (isNaN(this.rotation.y)) {
                this.rotation.y = 0;
            }
            if (isNaN(this.rotation.z)) {
                this.rotation.z = 0;
            }
        };
        TargetCamera.prototype.getTarget = function () {
            return this._currentTarget;
        };
        TargetCamera.prototype._decideIfNeedsToMove = function () {
            return Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
        };
        TargetCamera.prototype._updatePosition = function () {
            this.position.addInPlace(this.cameraDirection);
        };
        TargetCamera.prototype._update = function () {
            var needToMove = this._decideIfNeedsToMove();
            var needToRotate = Math.abs(this.cameraRotation.x) > 0 || Math.abs(this.cameraRotation.y) > 0;
            if (needToMove) {
                this._updatePosition();
            }
            if (needToRotate) {
                this.rotation.x += this.cameraRotation.x;
                this.rotation.y += this.cameraRotation.y;
                if (!this.noRotationConstraint) {
                    var limit = (Math.PI / 2) * 0.95;
                    if (this.rotation.x > limit) this.rotation.x = limit;
                    if (this.rotation.x < -limit) this.rotation.x = -limit;
                }
            }
            if (needToMove) {
                if (Math.abs(this.cameraDirection.x) < BABYLON.Engine.Epsilon) {
                    this.cameraDirection.x = 0;
                }
                if (Math.abs(this.cameraDirection.y) < BABYLON.Engine.Epsilon) {
                    this.cameraDirection.y = 0;
                }
                if (Math.abs(this.cameraDirection.z) < BABYLON.Engine.Epsilon) {
                    this.cameraDirection.z = 0;
                }
                this.cameraDirection.scaleInPlace(this.inertia);
            }
            if (needToRotate) {
                if (Math.abs(this.cameraRotation.x) < BABYLON.Engine.Epsilon) {
                    this.cameraRotation.x = 0;
                }
                if (Math.abs(this.cameraRotation.y) < BABYLON.Engine.Epsilon) {
                    this.cameraRotation.y = 0;
                }
                this.cameraRotation.scaleInPlace(this.inertia);
            }
        };
        TargetCamera.prototype._getViewMatrix = function () {
            if (!this.lockedTarget) {
                if (this.upVector.x != 0 || this.upVector.y != 1.0 || this.upVector.z != 0) {
                    BABYLON.Matrix.LookAtLHToRef(BABYLON.Vector3.Zero(), this._referencePoint, this.upVector, this._lookAtTemp);
                    BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix);
                    this._lookAtTemp.multiplyToRef(this._cameraRotationMatrix, this._tempMatrix);
                    this._lookAtTemp.invert();
                    this._tempMatrix.multiplyToRef(this._lookAtTemp, this._cameraRotationMatrix);
                } else {
                    BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix);
                }
                BABYLON.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint);
                this.position.addToRef(this._transformedReferencePoint, this._currentTarget);
            } else {
                this._currentTarget.copyFrom(this._getLockedTargetPosition());
            }
            BABYLON.Matrix.LookAtLHToRef(this.position, this._currentTarget, this.upVector, this._viewMatrix);
            return this._viewMatrix;
        };
        return TargetCamera;
    })(BABYLON.Camera);
    BABYLON.TargetCamera = TargetCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var FollowCamera = (function (_super) {
        __extends(FollowCamera, _super);

        function FollowCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this.radius = 12;
            this.rotationOffset = 0;
            this.heightOffset = 4;
            this.cameraAcceleration = 0.05;
            this.maxCameraSpeed = 20;
        }
        FollowCamera.prototype.getRadians = function (degrees) {
            return degrees * Math.PI / 180;
        };
        FollowCamera.prototype.follow = function (cameraTarget) {
            if (!cameraTarget) return;
            var radians = this.getRadians(cameraTarget.rotation.y - this.rotationOffset);
            var targetX = cameraTarget.position.x + Math.sin(radians) * this.radius;
            var targetZ = cameraTarget.position.z + Math.cos(radians) * this.radius;
            var dx = targetX - this.position.x;
            var dy = (cameraTarget.position.y + this.heightOffset) - this.position.y;
            var dz = (targetZ) - this.position.z;
            var vx = dx * this.cameraAcceleration * 2;
            var vy = dy * this.cameraAcceleration;
            var vz = dz * this.cameraAcceleration * 2;
            if (vx > this.maxCameraSpeed || vx < -this.maxCameraSpeed) {
                vx = vx < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
            }
            if (vy > this.maxCameraSpeed || vy < -this.maxCameraSpeed) {
                vy = vy < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
            }
            if (vz > this.maxCameraSpeed || vz < -this.maxCameraSpeed) {
                vz = vz < 1 ? -this.maxCameraSpeed : this.maxCameraSpeed;
            }
            this.position = new BABYLON.Vector3(this.position.x + vx, this.position.y + vy, this.position.z + vz);
            this.setTarget(cameraTarget.position);
        };
        FollowCamera.prototype._update = function () {
            _super.prototype._update.call(this);
            this.follow(this.target);
        };
        return FollowCamera;
    })(BABYLON.TargetCamera);
    BABYLON.FollowCamera = FollowCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var FreeCamera = (function (_super) {
        __extends(FreeCamera, _super);

        function FreeCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this.ellipsoid = new BABYLON.Vector3(0.5, 1, 0.5);
            this.keysUp = [38];
            this.keysDown = [40];
            this.keysLeft = [37];
            this.keysRight = [39];
            this.checkCollisions = false;
            this.applyGravity = false;
            this.angularSensibility = 2000.0;
            this._keys = [];
            this._collider = new BABYLON.Collider();
            this._needMoveForGravity = true;
            this._oldPosition = BABYLON.Vector3.Zero();
            this._diffPosition = BABYLON.Vector3.Zero();
            this._newPosition = BABYLON.Vector3.Zero();
        }
        FreeCamera.prototype.attachControl = function (element, noPreventDefault) {
            var _this = this;
            var previousPosition;
            var engine = this.getEngine();
            if (this._attachedElement) {
                return;
            }
            this._attachedElement = element;
            if (this._onMouseDown === undefined) {
                this._onMouseDown = function (evt) {
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onMouseUp = function (evt) {
                    previousPosition = null;
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onMouseOut = function (evt) {
                    previousPosition = null;
                    _this._keys = [];
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onMouseMove = function (evt) {
                    if (!previousPosition && !engine.isPointerLock) {
                        return;
                    }
                    var offsetX;
                    var offsetY;
                    if (!engine.isPointerLock) {
                        offsetX = evt.clientX - previousPosition.x;
                        offsetY = evt.clientY - previousPosition.y;
                    } else {
                        offsetX = evt.movementX || evt.mozMovementX || evt.webkitMovementX || evt.msMovementX || 0;
                        offsetY = evt.movementY || evt.mozMovementY || evt.webkitMovementY || evt.msMovementY || 0;
                    }
                    _this.cameraRotation.y += offsetX / _this.angularSensibility;
                    _this.cameraRotation.x += offsetY / _this.angularSensibility;
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onKeyDown = function (evt) {
                    if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
                        var index = _this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            _this._keys.push(evt.keyCode);
                        }
                        if (!noPreventDefault) {
                            evt.preventDefault();
                        }
                    }
                };
                this._onKeyUp = function (evt) {
                    if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
                        var index = _this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            _this._keys.splice(index, 1);
                        }
                        if (!noPreventDefault) {
                            evt.preventDefault();
                        }
                    }
                };
                this._onLostFocus = function () {
                    _this._keys = [];
                };
                this._reset = function () {
                    _this._keys = [];
                    previousPosition = null;
                    _this.cameraDirection = new BABYLON.Vector3(0, 0, 0);
                    _this.cameraRotation = new BABYLON.Vector2(0, 0);
                };
            }
            element.addEventListener("mousedown", this._onMouseDown, false);
            element.addEventListener("mouseup", this._onMouseUp, false);
            element.addEventListener("mouseout", this._onMouseOut, false);
            element.addEventListener("mousemove", this._onMouseMove, false);
            BABYLON.Tools.RegisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]);
        };
        FreeCamera.prototype.detachControl = function (element) {
            if (this._attachedElement != element) {
                return;
            }
            element.removeEventListener("mousedown", this._onMouseDown);
            element.removeEventListener("mouseup", this._onMouseUp);
            element.removeEventListener("mouseout", this._onMouseOut);
            element.removeEventListener("mousemove", this._onMouseMove);
            BABYLON.Tools.UnregisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]);
            this._attachedElement = null;
            if (this._reset) {
                this._reset();
            }
        };
        FreeCamera.prototype._collideWithWorld = function (velocity) {
            var globalPosition;
            if (this.parent) {
                globalPosition = BABYLON.Vector3.TransformCoordinates(this.position, this.parent.getWorldMatrix());
            } else {
                globalPosition = this.position;
            }
            globalPosition.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPosition);
            this._collider.radius = this.ellipsoid;
            this.getScene()._getNewPosition(this._oldPosition, velocity, this._collider, 3, this._newPosition);
            this._newPosition.subtractToRef(this._oldPosition, this._diffPosition);
            if (this._diffPosition.length() > BABYLON.Engine.CollisionsEpsilon) {
                this.position.addInPlace(this._diffPosition);
                if (this.onCollide) {
                    this.onCollide(this._collider.collidedMesh);
                }
            }
        };
        FreeCamera.prototype._checkInputs = function () {
            if (!this._localDirection) {
                this._localDirection = BABYLON.Vector3.Zero();
                this._transformedDirection = BABYLON.Vector3.Zero();
            }
            for (var index = 0; index < this._keys.length; index++) {
                var keyCode = this._keys[index];
                var speed = this._computeLocalCameraSpeed();
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    this._localDirection.copyFromFloats(-speed, 0, 0);
                } else if (this.keysUp.indexOf(keyCode) !== -1) {
                    this._localDirection.copyFromFloats(0, 0, speed);
                } else if (this.keysRight.indexOf(keyCode) !== -1) {
                    this._localDirection.copyFromFloats(speed, 0, 0);
                } else if (this.keysDown.indexOf(keyCode) !== -1) {
                    this._localDirection.copyFromFloats(0, 0, -speed);
                }
                this.getViewMatrix().invertToRef(this._cameraTransformMatrix);
                BABYLON.Vector3.TransformNormalToRef(this._localDirection, this._cameraTransformMatrix, this._transformedDirection);
                this.cameraDirection.addInPlace(this._transformedDirection);
            }
        };
        FreeCamera.prototype._decideIfNeedsToMove = function () {
            return this._needMoveForGravity || Math.abs(this.cameraDirection.x) > 0 || Math.abs(this.cameraDirection.y) > 0 || Math.abs(this.cameraDirection.z) > 0;
        };
        FreeCamera.prototype._updatePosition = function () {
            if (this.checkCollisions && this.getScene().collisionsEnabled) {
                this._collideWithWorld(this.cameraDirection);
                if (this.applyGravity) {
                    var oldPosition = this.position;
                    this._collideWithWorld(this.getScene().gravity);
                    this._needMoveForGravity = (BABYLON.Vector3.DistanceSquared(oldPosition, this.position) != 0);
                }
            } else {
                this.position.addInPlace(this.cameraDirection);
            }
        };
        FreeCamera.prototype._update = function () {
            this._checkInputs();
            _super.prototype._update.call(this);
        };
        return FreeCamera;
    })(BABYLON.TargetCamera);
    BABYLON.FreeCamera = FreeCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var TouchCamera = (function (_super) {
        __extends(TouchCamera, _super);

        function TouchCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this._offsetX = null;
            this._offsetY = null;
            this._pointerCount = 0;
            this._pointerPressed = [];
            this.angularSensibility = 200000.0;
            this.moveSensibility = 500.0;
        }
        TouchCamera.prototype.attachControl = function (canvas, noPreventDefault) {
            var _this = this;
            var previousPosition;
            if (this._attachedCanvas) {
                return;
            }
            this._attachedCanvas = canvas;
            if (this._onPointerDown === undefined) {
                this._onPointerDown = function (evt) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    _this._pointerPressed.push(evt.pointerId);
                    if (_this._pointerPressed.length !== 1) {
                        return;
                    }
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                };
                this._onPointerUp = function (evt) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    var index = _this._pointerPressed.indexOf(evt.pointerId);
                    if (index === -1) {
                        return;
                    }
                    _this._pointerPressed.splice(index, 1);
                    if (index != 0) {
                        return;
                    }
                    previousPosition = null;
                    _this._offsetX = null;
                    _this._offsetY = null;
                };
                this._onPointerMove = function (evt) {
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                    if (!previousPosition) {
                        return;
                    }
                    var index = _this._pointerPressed.indexOf(evt.pointerId);
                    if (index != 0) {
                        return;
                    }
                    _this._offsetX = evt.clientX - previousPosition.x;
                    _this._offsetY = -(evt.clientY - previousPosition.y);
                };
                this._onLostFocus = function () {
                    _this._offsetX = null;
                    _this._offsetY = null;
                };
            }
            canvas.addEventListener("pointerdown", this._onPointerDown);
            canvas.addEventListener("pointerup", this._onPointerUp);
            canvas.addEventListener("pointerout", this._onPointerUp);
            canvas.addEventListener("pointermove", this._onPointerMove);
            BABYLON.Tools.RegisterTopRootEvents([{
                name: "blur",
                handler: this._onLostFocus
            }]);
        };
        TouchCamera.prototype.detachControl = function (canvas) {
            if (this._attachedCanvas != canvas) {
                return;
            }
            canvas.removeEventListener("pointerdown", this._onPointerDown);
            canvas.removeEventListener("pointerup", this._onPointerUp);
            canvas.removeEventListener("pointerout", this._onPointerUp);
            canvas.removeEventListener("pointermove", this._onPointerMove);
            BABYLON.Tools.UnregisterTopRootEvents([{
                name: "blur",
                handler: this._onLostFocus
            }]);
            this._attachedCanvas = null;
        };
        TouchCamera.prototype._checkInputs = function () {
            if (!this._offsetX) {
                return;
            }
            this.cameraRotation.y += this._offsetX / this.angularSensibility;
            if (this._pointerPressed.length > 1) {
                this.cameraRotation.x += -this._offsetY / this.angularSensibility;
            } else {
                var speed = this._computeLocalCameraSpeed();
                var direction = new BABYLON.Vector3(0, 0, speed * this._offsetY / this.moveSensibility);
                BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix);
                this.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates(direction, this._cameraRotationMatrix));
            }
        };
        return TouchCamera;
    })(BABYLON.FreeCamera);
    BABYLON.TouchCamera = TouchCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var DeviceOrientationCamera = (function (_super) {
        __extends(DeviceOrientationCamera, _super);

        function DeviceOrientationCamera(name, position, scene) {
            var _this = this;
            _super.call(this, name, position, scene);
            this._offsetX = null;
            this._offsetY = null;
            this._orientationGamma = 0;
            this._orientationBeta = 0;
            this._initialOrientationGamma = 0;
            this._initialOrientationBeta = 0;
            this.angularSensibility = 10000.0;
            this.moveSensibility = 50.0;
            window.addEventListener("resize", function () {
                _this._initialOrientationGamma = null;
            }, false);
        }
        DeviceOrientationCamera.prototype.attachControl = function (canvas, noPreventDefault) {
            var _this = this;
            if (this._attachedCanvas) {
                return;
            }
            this._attachedCanvas = canvas;
            if (!this._orientationChanged) {
                this._orientationChanged = function (evt) {
                    if (!_this._initialOrientationGamma) {
                        _this._initialOrientationGamma = evt.gamma;
                        _this._initialOrientationBeta = evt.beta;
                    }
                    _this._orientationGamma = evt.gamma;
                    _this._orientationBeta = evt.beta;
                    _this._offsetY = (_this._initialOrientationBeta - _this._orientationBeta);
                    _this._offsetX = (_this._initialOrientationGamma - _this._orientationGamma);
                };
            }
            window.addEventListener("deviceorientation", this._orientationChanged);
        };
        DeviceOrientationCamera.prototype.detachControl = function (canvas) {
            if (this._attachedCanvas != canvas) {
                return;
            }
            window.removeEventListener("deviceorientation", this._orientationChanged);
            this._attachedCanvas = null;
            this._orientationGamma = 0;
            this._orientationBeta = 0;
            this._initialOrientationGamma = 0;
            this._initialOrientationBeta = 0;
        };
        DeviceOrientationCamera.prototype._checkInputs = function () {
            if (!this._offsetX) {
                return;
            }
            this.cameraRotation.y -= this._offsetX / this.angularSensibility;
            var speed = this._computeLocalCameraSpeed();
            var direction = new BABYLON.Vector3(0, 0, speed * this._offsetY / this.moveSensibility);
            BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, 0, this._cameraRotationMatrix);
            this.cameraDirection.addInPlace(BABYLON.Vector3.TransformCoordinates(direction, this._cameraRotationMatrix));
        };
        return DeviceOrientationCamera;
    })(BABYLON.FreeCamera);
    BABYLON.DeviceOrientationCamera = DeviceOrientationCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var eventPrefix = BABYLON.Tools.GetPointerPrefix();
    var ArcRotateCamera = (function (_super) {
        __extends(ArcRotateCamera, _super);

        function ArcRotateCamera(name, alpha, beta, radius, target, scene) {
            _super.call(this, name, BABYLON.Vector3.Zero(), scene);
            this.alpha = alpha;
            this.beta = beta;
            this.radius = radius;
            this.target = target;
            this.inertialAlphaOffset = 0;
            this.inertialBetaOffset = 0;
            this.inertialRadiusOffset = 0;
            this.lowerAlphaLimit = null;
            this.upperAlphaLimit = null;
            this.lowerBetaLimit = 0.01;
            this.upperBetaLimit = Math.PI;
            this.lowerRadiusLimit = null;
            this.upperRadiusLimit = null;
            this.angularSensibility = 1000.0;
            this.wheelPrecision = 3.0;
            this.keysUp = [38];
            this.keysDown = [40];
            this.keysLeft = [37];
            this.keysRight = [39];
            this.zoomOnFactor = 1;
            this._keys = [];
            this._viewMatrix = new BABYLON.Matrix();
            this.checkCollisions = false;
            this.collisionRadius = new BABYLON.Vector3(0.5, 0.5, 0.5);
            this._collider = new BABYLON.Collider();
            this._previousPosition = BABYLON.Vector3.Zero();
            this._collisionVelocity = BABYLON.Vector3.Zero();
            this._newPosition = BABYLON.Vector3.Zero();
            this.getViewMatrix();
        }
        ArcRotateCamera.prototype._getTargetPosition = function () {
            return this.target.position || this.target;
        };
        ArcRotateCamera.prototype._initCache = function () {
            _super.prototype._initCache.call(this);
            this._cache.target = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            this._cache.alpha = undefined;
            this._cache.beta = undefined;
            this._cache.radius = undefined;
        };
        ArcRotateCamera.prototype._updateCache = function (ignoreParentClass) {
            if (!ignoreParentClass) {
                _super.prototype._updateCache.call(this);
            }
            this._cache.target.copyFrom(this._getTargetPosition());
            this._cache.alpha = this.alpha;
            this._cache.beta = this.beta;
            this._cache.radius = this.radius;
        };
        ArcRotateCamera.prototype._isSynchronizedViewMatrix = function () {
            if (!_super.prototype._isSynchronizedViewMatrix.call(this)) return false;
            return this._cache.target.equals(this._getTargetPosition()) && this._cache.alpha === this.alpha && this._cache.beta === this.beta && this._cache.radius === this.radius;
        };
        ArcRotateCamera.prototype.attachControl = function (element, noPreventDefault) {
            var _this = this;
            var previousPosition;
            var pointerId;
            if (this._attachedElement) {
                return;
            }
            this._attachedElement = element;
            var engine = this.getEngine();
            if (this._onPointerDown === undefined) {
                this._onPointerDown = function (evt) {
                    if (pointerId) {
                        return;
                    }
                    pointerId = evt.pointerId;
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onPointerUp = function (evt) {
                    previousPosition = null;
                    pointerId = null;
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onPointerMove = function (evt) {
                    if (!previousPosition) {
                        return;
                    }
                    if (pointerId !== evt.pointerId) {
                        return;
                    }
                    var offsetX = evt.clientX - previousPosition.x;
                    var offsetY = evt.clientY - previousPosition.y;
                    _this.inertialAlphaOffset -= offsetX / _this.angularSensibility;
                    _this.inertialBetaOffset -= offsetY / _this.angularSensibility;
                    previousPosition = {
                        x: evt.clientX,
                        y: evt.clientY
                    };
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._onMouseMove = function (evt) {
                    if (!engine.isPointerLock) {
                        return;
                    }
                    var offsetX = evt.movementX || evt.mozMovementX || evt.webkitMovementX || evt.msMovementX || 0;
                    var offsetY = evt.movementY || evt.mozMovementY || evt.webkitMovementY || evt.msMovementY || 0;
                    _this.inertialAlphaOffset -= offsetX / _this.angularSensibility;
                    _this.inertialBetaOffset -= offsetY / _this.angularSensibility;
                    if (!noPreventDefault) {
                        evt.preventDefault();
                    }
                };
                this._wheel = function (event) {
                    var delta = 0;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / (_this.wheelPrecision * 40);
                    } else if (event.detail) {
                        delta = -event.detail / _this.wheelPrecision;
                    }
                    if (delta) _this.inertialRadiusOffset += delta;
                    if (event.preventDefault) {
                        if (!noPreventDefault) {
                            event.preventDefault();
                        }
                    }
                };
                this._onKeyDown = function (evt) {
                    if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
                        var index = _this._keys.indexOf(evt.keyCode);
                        if (index === -1) {
                            _this._keys.push(evt.keyCode);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                };
                this._onKeyUp = function (evt) {
                    if (_this.keysUp.indexOf(evt.keyCode) !== -1 || _this.keysDown.indexOf(evt.keyCode) !== -1 || _this.keysLeft.indexOf(evt.keyCode) !== -1 || _this.keysRight.indexOf(evt.keyCode) !== -1) {
                        var index = _this._keys.indexOf(evt.keyCode);
                        if (index >= 0) {
                            _this._keys.splice(index, 1);
                        }
                        if (evt.preventDefault) {
                            if (!noPreventDefault) {
                                evt.preventDefault();
                            }
                        }
                    }
                };
                this._onLostFocus = function () {
                    _this._keys = [];
                    pointerId = null;
                };
                this._onGestureStart = function (e) {
                    if (window.MSGesture === undefined) {
                        return;
                    }
                    if (!_this._MSGestureHandler) {
                        _this._MSGestureHandler = new MSGesture();
                        _this._MSGestureHandler.target = element;
                    }
                    _this._MSGestureHandler.addPointer(e.pointerId);
                };
                this._onGesture = function (e) {
                    _this.radius *= e.scale;
                    if (e.preventDefault) {
                        if (!noPreventDefault) {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                    }
                };
                this._reset = function () {
                    _this._keys = [];
                    _this.inertialAlphaOffset = 0;
                    _this.inertialBetaOffset = 0;
                    _this.inertialRadiusOffset = 0;
                    previousPosition = null;
                    pointerId = null;
                };
            }
            element.addEventListener(eventPrefix + "down", this._onPointerDown, false);
            element.addEventListener(eventPrefix + "up", this._onPointerUp, false);
            element.addEventListener(eventPrefix + "out", this._onPointerUp, false);
            element.addEventListener(eventPrefix + "move", this._onPointerMove, false);
            element.addEventListener("mousemove", this._onMouseMove, false);
            element.addEventListener("MSPointerDown", this._onGestureStart, false);
            element.addEventListener("MSGestureChange", this._onGesture, false);
            element.addEventListener('mousewheel', this._wheel, false);
            element.addEventListener('DOMMouseScroll', this._wheel, false);
            BABYLON.Tools.RegisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]);
        };
        ArcRotateCamera.prototype.detachControl = function (element) {
            if (this._attachedElement != element) {
                return;
            }
            element.removeEventListener(eventPrefix + "down", this._onPointerDown);
            element.removeEventListener(eventPrefix + "up", this._onPointerUp);
            element.removeEventListener(eventPrefix + "out", this._onPointerUp);
            element.removeEventListener(eventPrefix + "move", this._onPointerMove);
            element.removeEventListener("mousemove", this._onMouseMove);
            element.removeEventListener("MSPointerDown", this._onGestureStart);
            element.removeEventListener("MSGestureChange", this._onGesture);
            element.removeEventListener('mousewheel', this._wheel);
            element.removeEventListener('DOMMouseScroll', this._wheel);
            BABYLON.Tools.UnregisterTopRootEvents([{
                name: "keydown",
                handler: this._onKeyDown
            }, {
                name: "keyup",
                handler: this._onKeyUp
            }, {
                name: "blur",
                handler: this._onLostFocus
            }]);
            this._MSGestureHandler = null;
            this._attachedElement = null;
            if (this._reset) {
                this._reset();
            }
        };
        ArcRotateCamera.prototype._update = function () {
            for (var index = 0; index < this._keys.length; index++) {
                var keyCode = this._keys[index];
                if (this.keysLeft.indexOf(keyCode) !== -1) {
                    this.inertialAlphaOffset -= 0.01;
                } else if (this.keysUp.indexOf(keyCode) !== -1) {
                    this.inertialBetaOffset -= 0.01;
                } else if (this.keysRight.indexOf(keyCode) !== -1) {
                    this.inertialAlphaOffset += 0.01;
                } else if (this.keysDown.indexOf(keyCode) !== -1) {
                    this.inertialBetaOffset += 0.01;
                }
            }
            if (this.inertialAlphaOffset != 0 || this.inertialBetaOffset != 0 || this.inertialRadiusOffset != 0) {
                this.alpha += this.inertialAlphaOffset;
                this.beta += this.inertialBetaOffset;
                this.radius -= this.inertialRadiusOffset;
                this.inertialAlphaOffset *= this.inertia;
                this.inertialBetaOffset *= this.inertia;
                this.inertialRadiusOffset *= this.inertia;
                if (Math.abs(this.inertialAlphaOffset) < BABYLON.Engine.Epsilon) this.inertialAlphaOffset = 0;
                if (Math.abs(this.inertialBetaOffset) < BABYLON.Engine.Epsilon) this.inertialBetaOffset = 0;
                if (Math.abs(this.inertialRadiusOffset) < BABYLON.Engine.Epsilon) this.inertialRadiusOffset = 0;
            }
            if (this.lowerAlphaLimit && this.alpha < this.lowerAlphaLimit) {
                this.alpha = this.lowerAlphaLimit;
            }
            if (this.upperAlphaLimit && this.alpha > this.upperAlphaLimit) {
                this.alpha = this.upperAlphaLimit;
            }
            if (this.lowerBetaLimit && this.beta < this.lowerBetaLimit) {
                this.beta = this.lowerBetaLimit;
            }
            if (this.upperBetaLimit && this.beta > this.upperBetaLimit) {
                this.beta = this.upperBetaLimit;
            }
            if (this.lowerRadiusLimit && this.radius < this.lowerRadiusLimit) {
                this.radius = this.lowerRadiusLimit;
            }
            if (this.upperRadiusLimit && this.radius > this.upperRadiusLimit) {
                this.radius = this.upperRadiusLimit;
            }
        };
        ArcRotateCamera.prototype.setPosition = function (position) {
            var radiusv3 = position.subtract(this._getTargetPosition());
            this.radius = radiusv3.length();
            this.alpha = Math.acos(radiusv3.x / Math.sqrt(Math.pow(radiusv3.x, 2) + Math.pow(radiusv3.z, 2)));
            if (radiusv3.z < 0) {
                this.alpha = 2 * Math.PI - this.alpha;
            }
            this.beta = Math.acos(radiusv3.y / this.radius);
        };
        ArcRotateCamera.prototype._getViewMatrix = function () {
            var cosa = Math.cos(this.alpha);
            var sina = Math.sin(this.alpha);
            var cosb = Math.cos(this.beta);
            var sinb = Math.sin(this.beta);
            var target = this._getTargetPosition();
            target.addToRef(new BABYLON.Vector3(this.radius * cosa * sinb, this.radius * cosb, this.radius * sina * sinb), this.position);
            if (this.checkCollisions) {
                this._collider.radius = this.collisionRadius;
                this.position.subtractToRef(this._previousPosition, this._collisionVelocity);
                this.getScene()._getNewPosition(this._previousPosition, this._collisionVelocity, this._collider, 3, this._newPosition);
                if (!this._newPosition.equalsWithEpsilon(this.position)) {
                    this.position.copyFrom(this._previousPosition);
                    this.alpha = this._previousAlpha;
                    this.beta = this._previousBeta;
                    this.radius = this._previousRadius;
                    if (this.onCollide) {
                        this.onCollide(this._collider.collidedMesh);
                    }
                }
            }
            BABYLON.Matrix.LookAtLHToRef(this.position, target, this.upVector, this._viewMatrix);
            this._previousAlpha = this.alpha;
            this._previousBeta = this.beta;
            this._previousRadius = this.radius;
            this._previousPosition.copyFrom(this.position);
            return this._viewMatrix;
        };
        ArcRotateCamera.prototype.zoomOn = function (meshes) {
            meshes = meshes || this.getScene().meshes;
            var minMaxVector = BABYLON.Mesh.MinMax(meshes);
            var distance = BABYLON.Vector3.Distance(minMaxVector.min, minMaxVector.max);
            this.radius = distance * this.zoomOnFactor;
            this.focusOn({
                min: minMaxVector.min,
                max: minMaxVector.max,
                distance: distance
            });
        };
        ArcRotateCamera.prototype.focusOn = function (meshesOrMinMaxVectorAndDistance) {
            var meshesOrMinMaxVector;
            var distance;
            if (meshesOrMinMaxVectorAndDistance.min === undefined) {
                meshesOrMinMaxVector = meshesOrMinMaxVectorAndDistance || this.getScene().meshes;
                meshesOrMinMaxVector = BABYLON.Mesh.MinMax(meshesOrMinMaxVector);
                distance = BABYLON.Vector3.Distance(meshesOrMinMaxVector.min, meshesOrMinMaxVector.max);
            } else {
                meshesOrMinMaxVector = meshesOrMinMaxVectorAndDistance;
                distance = meshesOrMinMaxVectorAndDistance.distance;
            }
            this.target = BABYLON.Mesh.Center(meshesOrMinMaxVector);
            this.maxZ = distance * 2;
        };
        return ArcRotateCamera;
    })(BABYLON.Camera);
    BABYLON.ArcRotateCamera = ArcRotateCamera;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Scene = (function () {
        function Scene(engine) {
            this.autoClear = true;
            this.clearColor = new BABYLON.Color3(0.2, 0.2, 0.3);
            this.ambientColor = new BABYLON.Color3(0, 0, 0);
            this.forceWireframe = false;
            this.cameraToUseForPointers = null;
            this.fogMode = BABYLON.Scene.FOGMODE_NONE;
            this.fogColor = new BABYLON.Color3(0.2, 0.2, 0.3);
            this.fogDensity = 0.1;
            this.fogStart = 0;
            this.fogEnd = 1000.0;
            this.lightsEnabled = true;
            this.lights = new Array();
            this.cameras = new Array();
            this.activeCameras = new Array();
            this.meshes = new Array();
            this._geometries = new Array();
            this.materials = new Array();
            this.multiMaterials = new Array();
            this.defaultMaterial = new BABYLON.StandardMaterial("default material", this);
            this.texturesEnabled = true;
            this.textures = new Array();
            this.particlesEnabled = true;
            this.particleSystems = new Array();
            this.spriteManagers = new Array();
            this.layers = new Array();
            this.skeletons = new Array();
            this.lensFlareSystems = new Array();
            this.collisionsEnabled = true;
            this.gravity = new BABYLON.Vector3(0, -9.0, 0);
            this.postProcessesEnabled = true;
            this.renderTargetsEnabled = true;
            this.customRenderTargets = new Array();
            this.importedMeshesFiles = new Array();
            this._actionManagers = new Array();
            this._meshesForIntersections = new BABYLON.SmartArray(256);
            this._totalVertices = 0;
            this._activeVertices = 0;
            this._activeParticles = 0;
            this._lastFrameDuration = 0;
            this._evaluateActiveMeshesDuration = 0;
            this._renderTargetsDuration = 0;
            this._particlesDuration = 0;
            this._renderDuration = 0;
            this._spritesDuration = 0;
            this._animationRatio = 0;
            this._renderId = 0;
            this._executeWhenReadyTimeoutId = -1;
            this._toBeDisposed = new BABYLON.SmartArray(256);
            this._onReadyCallbacks = new Array();
            this._pendingData = [];
            this._onBeforeRenderCallbacks = new Array();
            this._activeMeshes = new BABYLON.SmartArray(256);
            this._processedMaterials = new BABYLON.SmartArray(256);
            this._renderTargets = new BABYLON.SmartArray(256);
            this._activeParticleSystems = new BABYLON.SmartArray(256);
            this._activeSkeletons = new BABYLON.SmartArray(32);
            this._activeAnimatables = new Array();
            this._transformMatrix = BABYLON.Matrix.Zero();
            this._scaledPosition = BABYLON.Vector3.Zero();
            this._scaledVelocity = BABYLON.Vector3.Zero();
            this._engine = engine;
            engine.scenes.push(this);
            this._renderingManager = new BABYLON.RenderingManager(this);
            this.postProcessManager = new BABYLON.PostProcessManager(this);
            this.postProcessRenderPipelineManager = new BABYLON.PostProcessRenderPipelineManager();
            this._boundingBoxRenderer = new BABYLON.BoundingBoxRenderer(this);
            this._outlineRenderer = new BABYLON.OutlineRenderer(this);
            this.attachControl();
        }
        Object.defineProperty(Scene.prototype, "meshUnderPointer", {
            get: function () {
                return this._meshUnderPointer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "pointerX", {
            get: function () {
                return this._pointerX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scene.prototype, "pointerY", {
            get: function () {
                return this._pointerY;
            },
            enumerable: true,
            configurable: true
        });
        Scene.prototype.getBoundingBoxRenderer = function () {
            return this._boundingBoxRenderer;
        };
        Scene.prototype.getOutlineRenderer = function () {
            return this._outlineRenderer;
        };
        Scene.prototype.getEngine = function () {
            return this._engine;
        };
        Scene.prototype.getTotalVertices = function () {
            return this._totalVertices;
        };
        Scene.prototype.getActiveVertices = function () {
            return this._activeVertices;
        };
        Scene.prototype.getActiveParticles = function () {
            return this._activeParticles;
        };
        Scene.prototype.getLastFrameDuration = function () {
            return this._lastFrameDuration;
        };
        Scene.prototype.getEvaluateActiveMeshesDuration = function () {
            return this._evaluateActiveMeshesDuration;
        };
        Scene.prototype.getActiveMeshes = function () {
            return this._activeMeshes;
        };
        Scene.prototype.getRenderTargetsDuration = function () {
            return this._renderTargetsDuration;
        };
        Scene.prototype.getRenderDuration = function () {
            return this._renderDuration;
        };
        Scene.prototype.getParticlesDuration = function () {
            return this._particlesDuration;
        };
        Scene.prototype.getSpritesDuration = function () {
            return this._spritesDuration;
        };
        Scene.prototype.getAnimationRatio = function () {
            return this._animationRatio;
        };
        Scene.prototype.getRenderId = function () {
            return this._renderId;
        };
        Scene.prototype._updatePointerPosition = function (evt) {
            var canvasRect = this._engine.getRenderingCanvasClientRect();
            this._pointerX = evt.clientX - canvasRect.left;
            this._pointerY = evt.clientY - canvasRect.top;
            if (this.cameraToUseForPointers) {
                this._pointerX = this._pointerX - this.cameraToUseForPointers.viewport.x * this._engine.getRenderWidth();
                this._pointerY = this._pointerY - this.cameraToUseForPointers.viewport.y * this._engine.getRenderHeight();
            }
        };
        Scene.prototype.attachControl = function () {
            var _this = this;
            this._onPointerMove = function (evt) {
                var canvas = _this._engine.getRenderingCanvas();
                _this._updatePointerPosition(evt);
                var pickResult = _this.pick(_this._pointerX, _this._pointerY, function (mesh) {
                    return mesh.isPickable && mesh.isVisible && mesh.isReady() && mesh.actionManager && mesh.actionManager.hasPointerTriggers;
                }, false, _this.cameraToUseForPointers);
                if (pickResult.hit) {
                    _this.setPointerOverMesh(pickResult.pickedMesh);
                    canvas.style.cursor = "pointer";
                    _this._meshUnderPointer = pickResult.pickedMesh;
                } else {
                    _this.setPointerOverMesh(null);
                    canvas.style.cursor = "";
                    _this._meshUnderPointer = null;
                }
            };
            this._onPointerDown = function (evt) {
                var predicate = null;
                if (!_this.onPointerDown) {
                    predicate = function (mesh) {
                        return mesh.isPickable && mesh.isVisible && mesh.isReady() && mesh.actionManager && mesh.actionManager.hasPickTriggers;
                    };
                }
                _this._updatePointerPosition(evt);
                var pickResult = _this.pick(_this._pointerX, _this._pointerY, predicate, false, _this.cameraToUseForPointers);
                if (pickResult.hit) {
                    if (pickResult.pickedMesh.actionManager) {
                        switch (evt.button) {
                        case 0:
                            pickResult.pickedMesh.actionManager.processTrigger(BABYLON.ActionManager.OnLeftPickTrigger, BABYLON.ActionEvent.CreateNew(pickResult.pickedMesh));
                            break;
                        case 1:
                            pickResult.pickedMesh.actionManager.processTrigger(BABYLON.ActionManager.OnCenterPickTrigger, BABYLON.ActionEvent.CreateNew(pickResult.pickedMesh));
                            break;
                        case 2:
                            pickResult.pickedMesh.actionManager.processTrigger(BABYLON.ActionManager.OnRightPickTrigger, BABYLON.ActionEvent.CreateNew(pickResult.pickedMesh));
                            break;
                        }
                        pickResult.pickedMesh.actionManager.processTrigger(BABYLON.ActionManager.OnPickTrigger, BABYLON.ActionEvent.CreateNew(pickResult.pickedMesh));
                    }
                }
                if (_this.onPointerDown) {
                    _this.onPointerDown(evt, pickResult);
                }
            };
            this._onKeyDown = function (evt) {
                if (_this.actionManager) {
                    _this.actionManager.processTrigger(BABYLON.ActionManager.OnKeyDownTrigger, BABYLON.ActionEvent.CreateNewFromScene(_this, evt));
                }
            };
            this._onKeyUp = function (evt) {
                if (_this.actionManager) {
                    _this.actionManager.processTrigger(BABYLON.ActionManager.OnKeyUpTrigger, BABYLON.ActionEvent.CreateNewFromScene(_this, evt));
                }
            };
            var eventPrefix = BABYLON.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().addEventListener(eventPrefix + "move", this._onPointerMove, false);
            this._engine.getRenderingCanvas().addEventListener(eventPrefix + "down", this._onPointerDown, false);
            window.addEventListener("keydown", this._onKeyDown, false);
            window.addEventListener("keyup", this._onKeyUp, false);
        };
        Scene.prototype.detachControl = function () {
            var eventPrefix = BABYLON.Tools.GetPointerPrefix();
            this._engine.getRenderingCanvas().removeEventListener(eventPrefix + "move", this._onPointerMove);
            this._engine.getRenderingCanvas().removeEventListener(eventPrefix + "down", this._onPointerDown);
            window.removeEventListener("keydown", this._onKeyDown);
            window.removeEventListener("keyup", this._onKeyUp);
        };
        Scene.prototype.isReady = function () {
            if (this._pendingData.length > 0) {
                return false;
            }
            for (var index = 0; index < this._geometries.length; index++) {
                var geometry = this._geometries[index];
                if (geometry.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADING) {
                    return false;
                }
            }
            for (index = 0; index < this.meshes.length; index++) {
                var mesh = this.meshes[index];
                if (!mesh.isReady()) {
                    return false;
                }
                var mat = mesh.material;
                if (mat) {
                    if (!mat.isReady(mesh)) {
                        return false;
                    }
                }
            }
            return true;
        };
        Scene.prototype.registerBeforeRender = function (func) {
            this._onBeforeRenderCallbacks.push(func);
        };
        Scene.prototype.unregisterBeforeRender = function (func) {
            var index = this._onBeforeRenderCallbacks.indexOf(func);
            if (index > -1) {
                this._onBeforeRenderCallbacks.splice(index, 1);
            }
        };
        Scene.prototype._addPendingData = function (data) {
            this._pendingData.push(data);
        };
        Scene.prototype._removePendingData = function (data) {
            var index = this._pendingData.indexOf(data);
            if (index !== -1) {
                this._pendingData.splice(index, 1);
            }
        };
        Scene.prototype.getWaitingItemsCount = function () {
            return this._pendingData.length;
        };
        Scene.prototype.executeWhenReady = function (func) {
            var _this = this;
            this._onReadyCallbacks.push(func);
            if (this._executeWhenReadyTimeoutId !== -1) {
                return;
            }
            this._executeWhenReadyTimeoutId = setTimeout(function () {
                _this._checkIsReady();
            }, 150);
        };
        Scene.prototype._checkIsReady = function () {
            var _this = this;
            if (this.isReady()) {
                this._onReadyCallbacks.forEach(function (func) {
                    func();
                });
                this._onReadyCallbacks = [];
                this._executeWhenReadyTimeoutId = -1;
                return;
            }
            this._executeWhenReadyTimeoutId = setTimeout(function () {
                _this._checkIsReady();
            }, 150);
        };
        Scene.prototype.beginAnimation = function (target, from, to, loop, speedRatio, onAnimationEnd, animatable) {
            if (speedRatio === undefined) {
                speedRatio = 1.0;
            }
            this.stopAnimation(target);
            if (!animatable) {
                animatable = new BABYLON.Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd);
            }
            if (target.animations) {
                animatable.appendAnimations(target, target.animations);
            }
            if (target.getAnimatables) {
                var animatables = target.getAnimatables();
                for (var index = 0; index < animatables.length; index++) {
                    this.beginAnimation(animatables[index], from, to, loop, speedRatio, onAnimationEnd, animatable);
                }
            }
            return animatable;
        };
        Scene.prototype.beginDirectAnimation = function (target, animations, from, to, loop, speedRatio, onAnimationEnd) {
            if (speedRatio === undefined) {
                speedRatio = 1.0;
            }
            var animatable = new BABYLON.Animatable(this, target, from, to, loop, speedRatio, onAnimationEnd, animations);
            return animatable;
        };
        Scene.prototype.getAnimatableByTarget = function (target) {
            for (var index = 0; index < this._activeAnimatables.length; index++) {
                if (this._activeAnimatables[index].target === target) {
                    return this._activeAnimatables[index];
                }
            }
            return null;
        };
        Scene.prototype.stopAnimation = function (target) {
            var animatable = this.getAnimatableByTarget(target);
            if (animatable) {
                animatable.stop();
            }
        };
        Scene.prototype._animate = function () {
            if (!this._animationStartDate) {
                this._animationStartDate = new Date().getTime();
            }
            var now = new Date().getTime();
            var delay = now - this._animationStartDate;
            for (var index = 0; index < this._activeAnimatables.length; index++) {
                if (!this._activeAnimatables[index]._animate(delay)) {
                    this._activeAnimatables.splice(index, 1);
                    index--;
                }
            }
        };
        Scene.prototype.getViewMatrix = function () {
            return this._viewMatrix;
        };
        Scene.prototype.getProjectionMatrix = function () {
            return this._projectionMatrix;
        };
        Scene.prototype.getTransformMatrix = function () {
            return this._transformMatrix;
        };
        Scene.prototype.setTransformMatrix = function (view, projection) {
            this._viewMatrix = view;
            this._projectionMatrix = projection;
            this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
        };
        Scene.prototype.setActiveCameraByID = function (id) {
            var camera = this.getCameraByID(id);
            if (camera) {
                this.activeCamera = camera;
                return camera;
            }
            return null;
        };
        Scene.prototype.setActiveCameraByName = function (name) {
            var camera = this.getCameraByName(name);
            if (camera) {
                this.activeCamera = camera;
                return camera;
            }
            return null;
        };
        Scene.prototype.getMaterialByID = function (id) {
            for (var index = 0; index < this.materials.length; index++) {
                if (this.materials[index].id === id) {
                    return this.materials[index];
                }
            }
            return null;
        };
        Scene.prototype.getMaterialByName = function (name) {
            for (var index = 0; index < this.materials.length; index++) {
                if (this.materials[index].name === name) {
                    return this.materials[index];
                }
            }
            return null;
        };
        Scene.prototype.getCameraByID = function (id) {
            for (var index = 0; index < this.cameras.length; index++) {
                if (this.cameras[index].id === id) {
                    return this.cameras[index];
                }
            }
            return null;
        };
        Scene.prototype.getCameraByName = function (name) {
            for (var index = 0; index < this.cameras.length; index++) {
                if (this.cameras[index].name === name) {
                    return this.cameras[index];
                }
            }
            return null;
        };
        Scene.prototype.getLightByName = function (name) {
            for (var index = 0; index < this.lights.length; index++) {
                if (this.lights[index].name === name) {
                    return this.lights[index];
                }
            }
            return null;
        };
        Scene.prototype.getLightByID = function (id) {
            for (var index = 0; index < this.lights.length; index++) {
                if (this.lights[index].id === id) {
                    return this.lights[index];
                }
            }
            return null;
        };
        Scene.prototype.getGeometryByID = function (id) {
            for (var index = 0; index < this._geometries.length; index++) {
                if (this._geometries[index].id === id) {
                    return this._geometries[index];
                }
            }
            return null;
        };
        Scene.prototype.pushGeometry = function (geometry, force) {
            if (!force && this.getGeometryByID(geometry.id)) {
                return false;
            }
            this._geometries.push(geometry);
            return true;
        };
        Scene.prototype.getGeometries = function () {
            return this._geometries;
        };
        Scene.prototype.getMeshByID = function (id) {
            for (var index = 0; index < this.meshes.length; index++) {
                if (this.meshes[index].id === id) {
                    return this.meshes[index];
                }
            }
            return null;
        };
        Scene.prototype.getLastMeshByID = function (id) {
            for (var index = this.meshes.length - 1; index >= 0; index--) {
                if (this.meshes[index].id === id) {
                    return this.meshes[index];
                }
            }
            return null;
        };
        Scene.prototype.getLastEntryByID = function (id) {
            for (var index = this.meshes.length - 1; index >= 0; index--) {
                if (this.meshes[index].id === id) {
                    return this.meshes[index];
                }
            }
            for (index = this.cameras.length - 1; index >= 0; index--) {
                if (this.cameras[index].id === id) {
                    return this.cameras[index];
                }
            }
            for (index = this.lights.length - 1; index >= 0; index--) {
                if (this.lights[index].id === id) {
                    return this.lights[index];
                }
            }
            return null;
        };
        Scene.prototype.getMeshByName = function (name) {
            for (var index = 0; index < this.meshes.length; index++) {
                if (this.meshes[index].name === name) {
                    return this.meshes[index];
                }
            }
            return null;
        };
        Scene.prototype.getLastSkeletonByID = function (id) {
            for (var index = this.skeletons.length - 1; index >= 0; index--) {
                if (this.skeletons[index].id === id) {
                    return this.skeletons[index];
                }
            }
            return null;
        };
        Scene.prototype.getSkeletonById = function (id) {
            for (var index = 0; index < this.skeletons.length; index++) {
                if (this.skeletons[index].id === id) {
                    return this.skeletons[index];
                }
            }
            return null;
        };
        Scene.prototype.getSkeletonByName = function (name) {
            for (var index = 0; index < this.skeletons.length; index++) {
                if (this.skeletons[index].name === name) {
                    return this.skeletons[index];
                }
            }
            return null;
        };
        Scene.prototype.isActiveMesh = function (mesh) {
            return (this._activeMeshes.indexOf(mesh) !== -1);
        };
        Scene.prototype._evaluateSubMesh = function (subMesh, mesh) {
            if (mesh.subMeshes.length == 1 || subMesh.isInFrustum(this._frustumPlanes)) {
                var material = subMesh.getMaterial();
                if (mesh.showSubMeshesBoundingBox) {
                    this._boundingBoxRenderer.renderList.push(subMesh.getBoundingInfo().boundingBox);
                }
                if (material) {
                    if (material.getRenderTargetTextures) {
                        if (this._processedMaterials.indexOf(material) === -1) {
                            this._processedMaterials.push(material);
                            this._renderTargets.concat(material.getRenderTargetTextures());
                        }
                    }
                    this._activeVertices += subMesh.verticesCount;
                    this._renderingManager.dispatch(subMesh);
                }
            }
        };
        Scene.prototype._evaluateActiveMeshes = function () {
            this._activeMeshes.reset();
            this._renderingManager.reset();
            this._processedMaterials.reset();
            this._activeParticleSystems.reset();
            this._activeSkeletons.reset();
            this._boundingBoxRenderer.reset();
            if (!this._frustumPlanes) {
                this._frustumPlanes = BABYLON.Frustum.GetPlanes(this._transformMatrix);
            } else {
                BABYLON.Frustum.GetPlanesToRef(this._transformMatrix, this._frustumPlanes);
            }
            var meshes;
            var len;
            if (this._selectionOctree) {
                var selection = this._selectionOctree.select(this._frustumPlanes);
                meshes = selection.data;
                len = selection.length;
            } else {
                len = this.meshes.length;
                meshes = this.meshes;
            }
            for (var meshIndex = 0; meshIndex < len; meshIndex++) {
                var mesh = meshes[meshIndex];
                this._totalVertices += mesh.getTotalVertices();
                if (!mesh.isReady()) {
                    continue;
                }
                mesh.computeWorldMatrix();
                mesh._preActivate();
                if (mesh.actionManager && mesh.actionManager.hasSpecificTriggers([BABYLON.ActionManager.OnIntersectionEnterTrigger, BABYLON.ActionManager.OnIntersectionExitTrigger])) {
                    this._meshesForIntersections.pushNoDuplicate(mesh);
                }
                if (mesh.isEnabled() && mesh.isVisible && mesh.visibility > 0 && ((mesh.layerMask & this.activeCamera.layerMask) != 0) && mesh.isInFrustum(this._frustumPlanes)) {
                    this._activeMeshes.push(mesh);
                    mesh._activate(this._renderId);
                    this._activeMesh(mesh);
                }
            }
            var beforeParticlesDate = new Date().getTime();
            if (this.particlesEnabled) {
                for (var particleIndex = 0; particleIndex < this.particleSystems.length; particleIndex++) {
                    var particleSystem = this.particleSystems[particleIndex];
                    if (!particleSystem.isStarted()) {
                        continue;
                    }
                    if (!particleSystem.emitter.position || (particleSystem.emitter && particleSystem.emitter.isEnabled())) {
                        this._activeParticleSystems.push(particleSystem);
                        particleSystem.animate();
                    }
                }
            }
            this._particlesDuration += new Date().getTime() - beforeParticlesDate;
        };
        Scene.prototype._activeMesh = function (mesh) {
            if (mesh.skeleton) {
                this._activeSkeletons.pushNoDuplicate(mesh.skeleton);
            }
            if (mesh.showBoundingBox) {
                this._boundingBoxRenderer.renderList.push(mesh.getBoundingInfo().boundingBox);
            }
            if (mesh.subMeshes) {
                var len;
                var subMeshes;
                if (mesh._submeshesOctree && mesh.useOctreeForRenderingSelection) {
                    var intersections = mesh._submeshesOctree.select(this._frustumPlanes);
                    len = intersections.length;
                    subMeshes = intersections.data;
                } else {
                    subMeshes = mesh.subMeshes;
                    len = subMeshes.length;
                }
                for (var subIndex = 0; subIndex < len; subIndex++) {
                    var subMesh = subMeshes[subIndex];
                    this._evaluateSubMesh(subMesh, mesh);
                }
            }
        };
        Scene.prototype.updateTransformMatrix = function (force) {
            this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix(force));
        };
        Scene.prototype._renderForCamera = function (camera) {
            var engine = this._engine;
            this.activeCamera = camera;
            if (!this.activeCamera) throw new Error("Active camera not set");
            engine.setViewport(this.activeCamera.viewport);
            this._renderId++;
            this.updateTransformMatrix();
            if (this.beforeCameraRender) {
                this.beforeCameraRender(this.activeCamera);
            }
            var beforeEvaluateActiveMeshesDate = new Date().getTime();
            this._evaluateActiveMeshes();
            this._evaluateActiveMeshesDuration += new Date().getTime() - beforeEvaluateActiveMeshesDate;
            for (var skeletonIndex = 0; skeletonIndex < this._activeSkeletons.length; skeletonIndex++) {
                var skeleton = this._activeSkeletons.data[skeletonIndex];
                skeleton.prepare();
            }
            for (var customIndex = 0; customIndex < this.customRenderTargets.length; customIndex++) {
                var renderTarget = this.customRenderTargets[customIndex];
                this._renderTargets.push(renderTarget);
            }
            var beforeRenderTargetDate = new Date().getTime();
            if (this.renderTargetsEnabled) {
                for (var renderIndex = 0; renderIndex < this._renderTargets.length; renderIndex++) {
                    renderTarget = this._renderTargets.data[renderIndex];
                    if (renderTarget._shouldRender()) {
                        this._renderId++;
                        renderTarget.render();
                    }
                }
                this._renderId++;
            }
            if (this._renderTargets.length > 0) {
                engine.restoreDefaultFramebuffer();
            }
            this._renderTargetsDuration = new Date().getTime() - beforeRenderTargetDate;
            this.postProcessManager._prepareFrame();
            var beforeRenderDate = new Date().getTime();
            if (this.layers.length) {
                engine.setDepthBuffer(false);
                var layerIndex;
                var layer;
                for (layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
                    layer = this.layers[layerIndex];
                    if (layer.isBackground) {
                        layer.render();
                    }
                }
                engine.setDepthBuffer(true);
            }
            this._renderingManager.render(null, null, true, true);
            this._boundingBoxRenderer.render();
            for (var lensFlareSystemIndex = 0; lensFlareSystemIndex < this.lensFlareSystems.length; lensFlareSystemIndex++) {
                this.lensFlareSystems[lensFlareSystemIndex].render();
            }
            if (this.layers.length) {
                engine.setDepthBuffer(false);
                for (layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
                    layer = this.layers[layerIndex];
                    if (!layer.isBackground) {
                        layer.render();
                    }
                }
                engine.setDepthBuffer(true);
            }
            this._renderDuration += new Date().getTime() - beforeRenderDate;
            this.postProcessManager._finalizeFrame(camera.isIntermediate);
            this.activeCamera._updateFromScene();
            this._renderTargets.reset();
            if (this.afterCameraRender) {
                this.afterCameraRender(this.activeCamera);
            }
        };
        Scene.prototype._processSubCameras = function (camera) {
            if (camera.subCameras.length == 0) {
                this._renderForCamera(camera);
                return;
            }
            for (var index = 0; index < camera.subCameras.length; index++) {
                this._renderForCamera(camera.subCameras[index]);
            }
            this.activeCamera = camera;
            this.setTransformMatrix(this.activeCamera.getViewMatrix(), this.activeCamera.getProjectionMatrix());
            this.activeCamera._updateFromScene();
        };
        Scene.prototype._checkIntersections = function () {
            for (var index = 0; index < this._meshesForIntersections.length; index++) {
                var sourceMesh = this._meshesForIntersections.data[index];
                for (var actionIndex = 0; actionIndex < sourceMesh.actionManager.actions.length; actionIndex++) {
                    var action = sourceMesh.actionManager.actions[actionIndex];
                    if (action.trigger == BABYLON.ActionManager.OnIntersectionEnterTrigger || action.trigger == BABYLON.ActionManager.OnIntersectionExitTrigger) {
                        var otherMesh = action.getTriggerParameter();
                        var areIntersecting = otherMesh.intersectsMesh(sourceMesh, false);
                        var currentIntersectionInProgress = sourceMesh._intersectionsInProgress.indexOf(otherMesh);
                        if (areIntersecting && currentIntersectionInProgress === -1 && action.trigger == BABYLON.ActionManager.OnIntersectionEnterTrigger) {
                            sourceMesh.actionManager.processTrigger(BABYLON.ActionManager.OnIntersectionEnterTrigger, BABYLON.ActionEvent.CreateNew(sourceMesh));
                            sourceMesh._intersectionsInProgress.push(otherMesh);
                        } else if (!areIntersecting && currentIntersectionInProgress > -1 && action.trigger == BABYLON.ActionManager.OnIntersectionExitTrigger) {
                            sourceMesh.actionManager.processTrigger(BABYLON.ActionManager.OnIntersectionExitTrigger, BABYLON.ActionEvent.CreateNew(sourceMesh));
                            var indexOfOther = sourceMesh._intersectionsInProgress.indexOf(otherMesh);
                            if (indexOfOther > -1) {
                                sourceMesh._intersectionsInProgress.splice(indexOfOther, 1);
                            }
                        }
                    }
                }
            }
        };
        Scene.prototype.render = function () {
            var startDate = new Date().getTime();
            this._particlesDuration = 0;
            this._spritesDuration = 0;
            this._activeParticles = 0;
            this._renderDuration = 0;
            this._evaluateActiveMeshesDuration = 0;
            this._totalVertices = 0;
            this._activeVertices = 0;
            this._meshesForIntersections.reset();
            if (this.actionManager) {
                this.actionManager.processTrigger(BABYLON.ActionManager.OnEveryFrameTrigger, null);
            }
            if (this.beforeRender) {
                this.beforeRender();
            }
            for (var callbackIndex = 0; callbackIndex < this._onBeforeRenderCallbacks.length; callbackIndex++) {
                this._onBeforeRenderCallbacks[callbackIndex]();
            }
            var deltaTime = Math.max(Scene.MinDeltaTime, Math.min(BABYLON.Tools.GetDeltaTime(), Scene.MaxDeltaTime));
            this._animationRatio = deltaTime * (60.0 / 1000.0);
            this._animate();
            if (this._physicsEngine) {
                this._physicsEngine._runOneStep(deltaTime / 1000.0);
            }
            this._engine.clear(this.clearColor, this.autoClear || this.forceWireframe, true);
            for (var lightIndex = 0; lightIndex < this.lights.length; lightIndex++) {
                var light = this.lights[lightIndex];
                var shadowGenerator = light.getShadowGenerator();
                if (light.isEnabled() && shadowGenerator && shadowGenerator.getShadowMap().getScene().textures.indexOf(shadowGenerator.getShadowMap()) !== -1) {
                    this._renderTargets.push(shadowGenerator.getShadowMap());
                }
            }
            this.postProcessRenderPipelineManager.update();
            if (this.activeCameras.length > 0) {
                var currentRenderId = this._renderId;
                for (var cameraIndex = 0; cameraIndex < this.activeCameras.length; cameraIndex++) {
                    this._renderId = currentRenderId;
                    this._processSubCameras(this.activeCameras[cameraIndex]);
                }
            } else {
                this._processSubCameras(this.activeCamera);
            }
            this._checkIntersections();
            if (this.afterRender) {
                this.afterRender();
            }
            for (var index = 0; index < this._toBeDisposed.length; index++) {
                this._toBeDisposed.data[index].dispose();
                this._toBeDisposed[index] = null;
            }
            this._toBeDisposed.reset();
            this._lastFrameDuration = new Date().getTime() - startDate;
        };
        Scene.prototype.dispose = function () {
            this.beforeRender = null;
            this.afterRender = null;
            this.skeletons = [];
            this._boundingBoxRenderer.dispose();
            if (this.onDispose) {
                this.onDispose();
            }
            this.detachControl();
            var canvas = this._engine.getRenderingCanvas();
            var index;
            for (index = 0; index < this.cameras.length; index++) {
                this.cameras[index].detachControl(canvas);
            }
            while (this.lights.length) {
                this.lights[0].dispose();
            }
            while (this.meshes.length) {
                this.meshes[0].dispose(true);
            }
            while (this.cameras.length) {
                this.cameras[0].dispose();
            }
            while (this.materials.length) {
                this.materials[0].dispose();
            }
            while (this.particleSystems.length) {
                this.particleSystems[0].dispose();
            }
            while (this.spriteManagers.length) {
                this.spriteManagers[0].dispose();
            }
            while (this.layers.length) {
                this.layers[0].dispose();
            }
            while (this.textures.length) {
                this.textures[0].dispose();
            }
            this.postProcessManager.dispose();
            if (this._physicsEngine) {
                this.disablePhysicsEngine();
            }
            index = this._engine.scenes.indexOf(this);
            this._engine.scenes.splice(index, 1);
            this._engine.wipeCaches();
        };
        Scene.prototype._getNewPosition = function (position, velocity, collider, maximumRetry, finalPosition, excludedMesh) {
            if (typeof excludedMesh === "undefined") {
                excludedMesh = null;
            }
            position.divideToRef(collider.radius, this._scaledPosition);
            velocity.divideToRef(collider.radius, this._scaledVelocity);
            collider.retry = 0;
            collider.initialVelocity = this._scaledVelocity;
            collider.initialPosition = this._scaledPosition;
            this._collideWithWorld(this._scaledPosition, this._scaledVelocity, collider, maximumRetry, finalPosition, excludedMesh);
            finalPosition.multiplyInPlace(collider.radius);
        };
        Scene.prototype._collideWithWorld = function (position, velocity, collider, maximumRetry, finalPosition, excludedMesh) {
            if (typeof excludedMesh === "undefined") {
                excludedMesh = null;
            }
            var closeDistance = BABYLON.Engine.CollisionsEpsilon * 10.0;
            if (collider.retry >= maximumRetry) {
                finalPosition.copyFrom(position);
                return;
            }
            collider._initialize(position, velocity, closeDistance);
            for (var index = 0; index < this.meshes.length; index++) {
                var mesh = this.meshes[index];
                if (mesh.isEnabled() && mesh.checkCollisions && mesh.subMeshes && mesh !== excludedMesh) {
                    mesh._checkCollision(collider);
                }
            }
            if (!collider.collisionFound) {
                position.addToRef(velocity, finalPosition);
                return;
            }
            if (velocity.x != 0 || velocity.y != 0 || velocity.z != 0) {
                collider._getResponse(position, velocity);
            }
            if (velocity.length() <= closeDistance) {
                finalPosition.copyFrom(position);
                return;
            }
            collider.retry++;
            this._collideWithWorld(position, velocity, collider, maximumRetry, finalPosition, excludedMesh);
        };
        Scene.prototype.createOrUpdateSelectionOctree = function (maxCapacity, maxDepth) {
            if (typeof maxCapacity === "undefined") {
                maxCapacity = 64;
            }
            if (typeof maxDepth === "undefined") {
                maxDepth = 2;
            }
            if (!this._selectionOctree) {
                this._selectionOctree = new BABYLON.Octree(BABYLON.Octree.CreationFuncForMeshes, maxCapacity, maxDepth);
            }
            var min = new BABYLON.Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
            var max = new BABYLON.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
            for (var index = 0; index < this.meshes.length; index++) {
                var mesh = this.meshes[index];
                mesh.computeWorldMatrix(true);
                var minBox = mesh.getBoundingInfo().boundingBox.minimumWorld;
                var maxBox = mesh.getBoundingInfo().boundingBox.maximumWorld;
                BABYLON.Tools.CheckExtends(minBox, min, max);
                BABYLON.Tools.CheckExtends(maxBox, min, max);
            }
            this._selectionOctree.update(min, max, this.meshes);
            return this._selectionOctree;
        };
        Scene.prototype.createPickingRay = function (x, y, world, camera) {
            var engine = this._engine;
            if (!camera) {
                if (!this.activeCamera) throw new Error("Active camera not set");
                camera = this.activeCamera;
            }
            var cameraViewport = camera.viewport;
            var viewport = cameraViewport.toGlobal(engine);
            x = x / this._engine.getHardwareScalingLevel() - viewport.x;
            y = y / this._engine.getHardwareScalingLevel() - (this._engine.getRenderHeight() - viewport.y - viewport.height);
            return BABYLON.Ray.CreateNew(x, y, viewport.width, viewport.height, world ? world : BABYLON.Matrix.Identity(), camera.getViewMatrix(), camera.getProjectionMatrix());
        };
        Scene.prototype._internalPick = function (rayFunction, predicate, fastCheck) {
            var pickingInfo = null;
            for (var meshIndex = 0; meshIndex < this.meshes.length; meshIndex++) {
                var mesh = this.meshes[meshIndex];
                if (predicate) {
                    if (!predicate(mesh)) {
                        continue;
                    }
                } else if (!mesh.isEnabled() || !mesh.isVisible || !mesh.isPickable) {
                    continue;
                }
                var world = mesh.getWorldMatrix();
                var ray = rayFunction(world);
                var result = mesh.intersects(ray, fastCheck);
                if (!result || !result.hit) continue;
                if (!fastCheck && pickingInfo != null && result.distance >= pickingInfo.distance) continue;
                pickingInfo = result;
                if (fastCheck) {
                    break;
                }
            }
            return pickingInfo || new BABYLON.PickingInfo();
        };
        Scene.prototype.pick = function (x, y, predicate, fastCheck, camera) {
            var _this = this;
            return this._internalPick(function (world) {
                return _this.createPickingRay(x, y, world, camera);
            }, predicate, fastCheck);
        };
        Scene.prototype.pickWithRay = function (ray, predicate, fastCheck) {
            var _this = this;
            return this._internalPick(function (world) {
                if (!_this._pickWithRayInverseMatrix) {
                    _this._pickWithRayInverseMatrix = BABYLON.Matrix.Identity();
                }
                world.invertToRef(_this._pickWithRayInverseMatrix);
                return BABYLON.Ray.Transform(ray, _this._pickWithRayInverseMatrix);
            }, predicate, fastCheck);
        };
        Scene.prototype.setPointerOverMesh = function (mesh) {
            if (this._pointerOverMesh === mesh) {
                return;
            }
            if (this._pointerOverMesh && this._pointerOverMesh.actionManager) {
                this._pointerOverMesh.actionManager.processTrigger(BABYLON.ActionManager.OnPointerOutTrigger, BABYLON.ActionEvent.CreateNew(this._pointerOverMesh));
            }
            this._pointerOverMesh = mesh;
            if (this._pointerOverMesh && this._pointerOverMesh.actionManager) {
                this._pointerOverMesh.actionManager.processTrigger(BABYLON.ActionManager.OnPointerOverTrigger, BABYLON.ActionEvent.CreateNew(this._pointerOverMesh));
            }
        };
        Scene.prototype.getPointerOverMesh = function () {
            return this._pointerOverMesh;
        };
        Scene.prototype.getPhysicsEngine = function () {
            return this._physicsEngine;
        };
        Scene.prototype.enablePhysics = function (gravity, plugin) {
            if (this._physicsEngine) {
                return true;
            }
            this._physicsEngine = new BABYLON.PhysicsEngine(plugin);
            if (!this._physicsEngine.isSupported()) {
                this._physicsEngine = null;
                return false;
            }
            this._physicsEngine._initialize(gravity);
            return true;
        };
        Scene.prototype.disablePhysicsEngine = function () {
            if (!this._physicsEngine) {
                return;
            }
            this._physicsEngine.dispose();
            this._physicsEngine = undefined;
        };
        Scene.prototype.isPhysicsEnabled = function () {
            return this._physicsEngine !== undefined;
        };
        Scene.prototype.setGravity = function (gravity) {
            if (!this._physicsEngine) {
                return;
            }
            this._physicsEngine._setGravity(gravity);
        };
        Scene.prototype.createCompoundImpostor = function (parts, options) {
            if (parts.parts) {
                options = parts;
                parts = parts.parts;
            }
            if (!this._physicsEngine) {
                return null;
            }
            for (var index = 0; index < parts.length; index++) {
                var mesh = parts[index].mesh;
                mesh._physicImpostor = parts[index].impostor;
                mesh._physicsMass = options.mass / parts.length;
                mesh._physicsFriction = options.friction;
                mesh._physicRestitution = options.restitution;
            }
            return this._physicsEngine._registerMeshesAsCompound(parts, options);
        };
        Scene.prototype.deleteCompoundImpostor = function (compound) {
            for (var index = 0; index < compound.parts.length; index++) {
                var mesh = compound.parts[index].mesh;
                mesh._physicImpostor = BABYLON.PhysicsEngine.NoImpostor;
                this._physicsEngine._unregisterMesh(mesh);
            }
        };
        Scene.prototype._getByTags = function (list, tagsQuery) {
            if (tagsQuery === undefined) {
                return list;
            }
            var listByTags = [];
            for (var i in list) {
                var item = list[i];
                if (BABYLON.Tags.MatchesQuery(item, tagsQuery)) {
                    listByTags.push(item);
                }
            }
            return listByTags;
        };
        Scene.prototype.getMeshesByTags = function (tagsQuery) {
            return this._getByTags(this.meshes, tagsQuery);
        };
        Scene.prototype.getCamerasByTags = function (tagsQuery) {
            return this._getByTags(this.cameras, tagsQuery);
        };
        Scene.prototype.getLightsByTags = function (tagsQuery) {
            return this._getByTags(this.lights, tagsQuery);
        };
        Scene.prototype.getMaterialByTags = function (tagsQuery) {
            return this._getByTags(this.materials, tagsQuery).concat(this._getByTags(this.multiMaterials, tagsQuery));
        };
        Scene.FOGMODE_NONE = 0;
        Scene.FOGMODE_EXP = 1;
        Scene.FOGMODE_EXP2 = 2;
        Scene.FOGMODE_LINEAR = 3;
        Scene.MinDeltaTime = 1.0;
        Scene.MaxDeltaTime = 1000.0;
        return Scene;
    })();
    BABYLON.Scene = Scene;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var VertexBuffer = (function () {
        function VertexBuffer(engine, data, kind, updatable, postponeInternalCreation) {
            if (engine instanceof BABYLON.Mesh) {
                this._engine = engine.getScene().getEngine();
            } else {
                this._engine = engine;
            }
            this._updatable = updatable;
            this._data = data;
            if (!postponeInternalCreation) {
                this.create();
            }
            this._kind = kind;
            switch (kind) {
            case VertexBuffer.PositionKind:
                this._strideSize = 3;
                break;
            case VertexBuffer.NormalKind:
                this._strideSize = 3;
                break;
            case VertexBuffer.UVKind:
                this._strideSize = 2;
                break;
            case VertexBuffer.UV2Kind:
                this._strideSize = 2;
                break;
            case VertexBuffer.ColorKind:
                this._strideSize = 3;
                break;
            case VertexBuffer.MatricesIndicesKind:
                this._strideSize = 4;
                break;
            case VertexBuffer.MatricesWeightsKind:
                this._strideSize = 4;
                break;
            }
        }
        VertexBuffer.prototype.isUpdatable = function () {
            return this._updatable;
        };
        VertexBuffer.prototype.getData = function () {
            return this._data;
        };
        VertexBuffer.prototype.getBuffer = function () {
            return this._buffer;
        };
        VertexBuffer.prototype.getStrideSize = function () {
            return this._strideSize;
        };
        VertexBuffer.prototype.create = function (data) {
            if (!data && this._buffer) {
                return;
            }
            data = data || this._data;
            if (!this._buffer) {
                if (this._updatable) {
                    this._buffer = this._engine.createDynamicVertexBuffer(data.length * 4);
                } else {
                    this._buffer = this._engine.createVertexBuffer(data);
                }
            }
            if (this._updatable) {
                this._engine.updateDynamicVertexBuffer(this._buffer, data);
                this._data = data;
            }
        };
        VertexBuffer.prototype.update = function (data) {
            this.create(data);
        };
        VertexBuffer.prototype.dispose = function () {
            if (!this._buffer) {
                return;
            }
            if (this._engine._releaseBuffer(this._buffer)) {
                this._buffer = null;
            }
        };
        Object.defineProperty(VertexBuffer, "PositionKind", {
            get: function () {
                return VertexBuffer._PositionKind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "NormalKind", {
            get: function () {
                return VertexBuffer._NormalKind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "UVKind", {
            get: function () {
                return VertexBuffer._UVKind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "UV2Kind", {
            get: function () {
                return VertexBuffer._UV2Kind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "ColorKind", {
            get: function () {
                return VertexBuffer._ColorKind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "MatricesIndicesKind", {
            get: function () {
                return VertexBuffer._MatricesIndicesKind;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VertexBuffer, "MatricesWeightsKind", {
            get: function () {
                return VertexBuffer._MatricesWeightsKind;
            },
            enumerable: true,
            configurable: true
        });
        VertexBuffer._PositionKind = "position";
        VertexBuffer._NormalKind = "normal";
        VertexBuffer._UVKind = "uv";
        VertexBuffer._UV2Kind = "uv2";
        VertexBuffer._ColorKind = "color";
        VertexBuffer._MatricesIndicesKind = "matricesIndices";
        VertexBuffer._MatricesWeightsKind = "matricesWeights";
        return VertexBuffer;
    })();
    BABYLON.VertexBuffer = VertexBuffer;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var AbstractMesh = (function (_super) {
        __extends(AbstractMesh, _super);

        function AbstractMesh(name, scene) {
            _super.call(this, name, scene);
            this.position = new BABYLON.Vector3(0, 0, 0);
            this.rotation = new BABYLON.Vector3(0, 0, 0);
            this.scaling = new BABYLON.Vector3(1, 1, 1);
            this.billboardMode = BABYLON.AbstractMesh.BILLBOARDMODE_NONE;
            this.visibility = 1.0;
            this.infiniteDistance = false;
            this.isVisible = true;
            this.isPickable = true;
            this.showBoundingBox = false;
            this.showSubMeshesBoundingBox = false;
            this.onDispose = null;
            this.checkCollisions = false;
            this.renderingGroupId = 0;
            this.receiveShadows = false;
            this.renderOutline = false;
            this.outlineColor = BABYLON.Color3.Red();
            this.outlineWidth = 0.02;
            this.useOctreeForRenderingSelection = true;
            this.useOctreeForPicking = true;
            this.useOctreeForCollisions = true;
            this.layerMask = 0xFFFFFFFF;
            this._physicImpostor = BABYLON.PhysicsEngine.NoImpostor;
            this.ellipsoid = new BABYLON.Vector3(0.5, 1, 0.5);
            this.ellipsoidOffset = new BABYLON.Vector3(0, 0, 0);
            this._collider = new BABYLON.Collider();
            this._oldPositionForCollisions = new BABYLON.Vector3(0, 0, 0);
            this._diffPositionForCollisions = new BABYLON.Vector3(0, 0, 0);
            this._newPositionForCollisions = new BABYLON.Vector3(0, 0, 0);
            this._localScaling = BABYLON.Matrix.Zero();
            this._localRotation = BABYLON.Matrix.Zero();
            this._localTranslation = BABYLON.Matrix.Zero();
            this._localBillboard = BABYLON.Matrix.Zero();
            this._localPivotScaling = BABYLON.Matrix.Zero();
            this._localPivotScalingRotation = BABYLON.Matrix.Zero();
            this._localWorld = BABYLON.Matrix.Zero();
            this._worldMatrix = BABYLON.Matrix.Zero();
            this._rotateYByPI = BABYLON.Matrix.RotationY(Math.PI);
            this._absolutePosition = BABYLON.Vector3.Zero();
            this._collisionsTransformMatrix = BABYLON.Matrix.Zero();
            this._collisionsScalingMatrix = BABYLON.Matrix.Zero();
            this._isDirty = false;
            this._pivotMatrix = BABYLON.Matrix.Identity();
            this._isDisposed = false;
            this._renderId = 0;
            this._intersectionsInProgress = new Array();
            scene.meshes.push(this);
        }
        Object.defineProperty(AbstractMesh, "BILLBOARDMODE_NONE", {
            get: function () {
                return AbstractMesh._BILLBOARDMODE_NONE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractMesh, "BILLBOARDMODE_X", {
            get: function () {
                return AbstractMesh._BILLBOARDMODE_X;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractMesh, "BILLBOARDMODE_Y", {
            get: function () {
                return AbstractMesh._BILLBOARDMODE_Y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractMesh, "BILLBOARDMODE_Z", {
            get: function () {
                return AbstractMesh._BILLBOARDMODE_Z;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractMesh, "BILLBOARDMODE_ALL", {
            get: function () {
                return AbstractMesh._BILLBOARDMODE_ALL;
            },
            enumerable: true,
            configurable: true
        });
        AbstractMesh.prototype.getTotalVertices = function () {
            return 0;
        };
        AbstractMesh.prototype.getIndices = function () {
            return null;
        };
        AbstractMesh.prototype.getVerticesData = function (kind) {
            return null;
        };
        AbstractMesh.prototype.isVerticesDataPresent = function (kind) {
            return false;
        };
        AbstractMesh.prototype.getBoundingInfo = function () {
            if (!this._boundingInfo) {
                this._updateBoundingInfo();
            }
            return this._boundingInfo;
        };
        AbstractMesh.prototype._preActivate = function () {};
        AbstractMesh.prototype._activate = function (renderId) {
            this._renderId = renderId;
        };
        AbstractMesh.prototype.getWorldMatrix = function () {
            if (this._currentRenderId !== this.getScene().getRenderId()) {
                this.computeWorldMatrix();
            }
            return this._worldMatrix;
        };
        Object.defineProperty(AbstractMesh.prototype, "worldMatrixFromCache", {
            get: function () {
                return this._worldMatrix;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AbstractMesh.prototype, "absolutePosition", {
            get: function () {
                return this._absolutePosition;
            },
            enumerable: true,
            configurable: true
        });
        AbstractMesh.prototype.rotate = function (axis, amount, space) {
            if (!this.rotationQuaternion) {
                this.rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z);
                this.rotation = BABYLON.Vector3.Zero();
            }
            if (!space || space == 0 /*LOCAL*/ ) {
                var rotationQuaternion = BABYLON.Quaternion.RotationAxis(axis, amount);
                this.rotationQuaternion = this.rotationQuaternion.multiply(rotationQuaternion);
            } else {
                if (this.parent) {
                    var invertParentWorldMatrix = this.parent.getWorldMatrix().clone();
                    invertParentWorldMatrix.invert();
                    axis = BABYLON.Vector3.TransformNormal(axis, invertParentWorldMatrix);
                }
                rotationQuaternion = BABYLON.Quaternion.RotationAxis(axis, amount);
                this.rotationQuaternion = rotationQuaternion.multiply(this.rotationQuaternion);
            }
        };
        AbstractMesh.prototype.translate = function (axis, distance, space) {
            var displacementVector = axis.scale(distance);
            if (!space || space == 0 /*LOCAL*/ ) {
                var tempV3 = this.getPositionExpressedInLocalSpace().add(displacementVector);
                this.setPositionWithLocalVector(tempV3);
            } else {
                this.setAbsolutePosition(this.getAbsolutePosition().add(displacementVector));
            }
        };
        AbstractMesh.prototype.getAbsolutePosition = function () {
            this.computeWorldMatrix();
            return this._absolutePosition;
        };
        AbstractMesh.prototype.setAbsolutePosition = function (absolutePosition) {
            if (!absolutePosition) {
                return;
            }
            var absolutePositionX;
            var absolutePositionY;
            var absolutePositionZ;
            if (absolutePosition.x === undefined) {
                if (arguments.length < 3) {
                    return;
                }
                absolutePositionX = arguments[0];
                absolutePositionY = arguments[1];
                absolutePositionZ = arguments[2];
            } else {
                absolutePositionX = absolutePosition.x;
                absolutePositionY = absolutePosition.y;
                absolutePositionZ = absolutePosition.z;
            }
            if (this.parent) {
                var invertParentWorldMatrix = this.parent.getWorldMatrix().clone();
                invertParentWorldMatrix.invert();
                var worldPosition = new BABYLON.Vector3(absolutePositionX, absolutePositionY, absolutePositionZ);
                this.position = BABYLON.Vector3.TransformCoordinates(worldPosition, invertParentWorldMatrix);
            } else {
                this.position.x = absolutePositionX;
                this.position.y = absolutePositionY;
                this.position.z = absolutePositionZ;
            }
        };
        AbstractMesh.prototype.setPivotMatrix = function (matrix) {
            this._pivotMatrix = matrix;
            this._cache.pivotMatrixUpdated = true;
        };
        AbstractMesh.prototype.getPivotMatrix = function () {
            return this._pivotMatrix;
        };
        AbstractMesh.prototype._isSynchronized = function () {
            if (this._isDirty) {
                return false;
            }
            if (this.billboardMode !== AbstractMesh.BILLBOARDMODE_NONE) return false;
            if (this._cache.pivotMatrixUpdated) {
                return false;
            }
            if (this.infiniteDistance) {
                return false;
            }
            if (!this._cache.position.equals(this.position)) return false;
            if (this.rotationQuaternion) {
                if (!this._cache.rotationQuaternion.equals(this.rotationQuaternion)) return false;
            } else {
                if (!this._cache.rotation.equals(this.rotation)) return false;
            }
            if (!this._cache.scaling.equals(this.scaling)) return false;
            return true;
        };
        AbstractMesh.prototype._initCache = function () {
            _super.prototype._initCache.call(this);
            this._cache.localMatrixUpdated = false;
            this._cache.position = BABYLON.Vector3.Zero();
            this._cache.scaling = BABYLON.Vector3.Zero();
            this._cache.rotation = BABYLON.Vector3.Zero();
            this._cache.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 0);
        };
        AbstractMesh.prototype.markAsDirty = function (property) {
            if (property === "rotation") {
                this.rotationQuaternion = null;
            }
            this._currentRenderId = Number.MAX_VALUE;
            this._isDirty = true;
        };
        AbstractMesh.prototype._updateBoundingInfo = function () {
            this._boundingInfo = this._boundingInfo || new BABYLON.BoundingInfo(this.absolutePosition, this.absolutePosition);
            this._boundingInfo._update(this.worldMatrixFromCache);
            if (!this.subMeshes) {
                return;
            }
            for (var subIndex = 0; subIndex < this.subMeshes.length; subIndex++) {
                var subMesh = this.subMeshes[subIndex];
                subMesh.updateBoundingInfo(this.worldMatrixFromCache);
            }
        };
        AbstractMesh.prototype.computeWorldMatrix = function (force) {
            if (!force && (this._currentRenderId == this.getScene().getRenderId() || this.isSynchronized(true))) {
                return this._worldMatrix;
            }
            this._cache.position.copyFrom(this.position);
            this._cache.scaling.copyFrom(this.scaling);
            this._cache.pivotMatrixUpdated = false;
            this._currentRenderId = this.getScene().getRenderId();
            this._isDirty = false;
            BABYLON.Matrix.ScalingToRef(this.scaling.x, this.scaling.y, this.scaling.z, this._localScaling);
            if (this.rotationQuaternion) {
                this.rotationQuaternion.toRotationMatrix(this._localRotation);
                this._cache.rotationQuaternion.copyFrom(this.rotationQuaternion);
            } else {
                BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._localRotation);
                this._cache.rotation.copyFrom(this.rotation);
            }
            if (this.infiniteDistance && !this.parent) {
                var camera = this.getScene().activeCamera;
                var cameraWorldMatrix = camera.getWorldMatrix();
                var cameraGlobalPosition = new BABYLON.Vector3(cameraWorldMatrix.m[12], cameraWorldMatrix.m[13], cameraWorldMatrix.m[14]);
                BABYLON.Matrix.TranslationToRef(this.position.x + cameraGlobalPosition.x, this.position.y + cameraGlobalPosition.y, this.position.z + cameraGlobalPosition.z, this._localTranslation);
            } else {
                BABYLON.Matrix.TranslationToRef(this.position.x, this.position.y, this.position.z, this._localTranslation);
            }
            this._pivotMatrix.multiplyToRef(this._localScaling, this._localPivotScaling);
            this._localPivotScaling.multiplyToRef(this._localRotation, this._localPivotScalingRotation);
            if (this.billboardMode !== AbstractMesh.BILLBOARDMODE_NONE) {
                var localPosition = this.position.clone();
                var zero = this.getScene().activeCamera.position.clone();
                if (this.parent && this.parent.position) {
                    localPosition.addInPlace(this.parent.position);
                    BABYLON.Matrix.TranslationToRef(localPosition.x, localPosition.y, localPosition.z, this._localTranslation);
                }
                if ((this.billboardMode & AbstractMesh.BILLBOARDMODE_ALL) === AbstractMesh.BILLBOARDMODE_ALL) {
                    zero = this.getScene().activeCamera.position;
                } else {
                    if (this.billboardMode & BABYLON.AbstractMesh.BILLBOARDMODE_X) zero.x = localPosition.x + BABYLON.Engine.Epsilon;
                    if (this.billboardMode & BABYLON.AbstractMesh.BILLBOARDMODE_Y) zero.y = localPosition.y + 0.001;
                    if (this.billboardMode & BABYLON.AbstractMesh.BILLBOARDMODE_Z) zero.z = localPosition.z + 0.001;
                }
                BABYLON.Matrix.LookAtLHToRef(localPosition, zero, BABYLON.Vector3.Up(), this._localBillboard);
                this._localBillboard.m[12] = this._localBillboard.m[13] = this._localBillboard.m[14] = 0;
                this._localBillboard.invert();
                this._localPivotScalingRotation.multiplyToRef(this._localBillboard, this._localWorld);
                this._rotateYByPI.multiplyToRef(this._localWorld, this._localPivotScalingRotation);
            }
            this._localPivotScalingRotation.multiplyToRef(this._localTranslation, this._localWorld);
            if (this.parent && this.parent.getWorldMatrix && this.billboardMode === BABYLON.AbstractMesh.BILLBOARDMODE_NONE) {
                this._localWorld.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix);
            } else {
                this._worldMatrix.copyFrom(this._localWorld);
            }
            this._updateBoundingInfo();
            this._absolutePosition.copyFromFloats(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]);
            return this._worldMatrix;
        };
        AbstractMesh.prototype.setPositionWithLocalVector = function (vector3) {
            this.computeWorldMatrix();
            this.position = BABYLON.Vector3.TransformNormal(vector3, this._localWorld);
        };
        AbstractMesh.prototype.getPositionExpressedInLocalSpace = function () {
            this.computeWorldMatrix();
            var invLocalWorldMatrix = this._localWorld.clone();
            invLocalWorldMatrix.invert();
            return BABYLON.Vector3.TransformNormal(this.position, invLocalWorldMatrix);
        };
        AbstractMesh.prototype.locallyTranslate = function (vector3) {
            this.computeWorldMatrix();
            this.position = BABYLON.Vector3.TransformCoordinates(vector3, this._localWorld);
        };
        AbstractMesh.prototype.lookAt = function (targetPoint, yawCor, pitchCor, rollCor) {
            yawCor = yawCor || 0;
            pitchCor = pitchCor || 0;
            rollCor = rollCor || 0;
            var dv = targetPoint.subtract(this.position);
            var yaw = -Math.atan2(dv.z, dv.x) - Math.PI / 2;
            var len = Math.sqrt(dv.x * dv.x + dv.z * dv.z);
            var pitch = Math.atan2(dv.y, len);
            this.rotationQuaternion = BABYLON.Quaternion.RotationYawPitchRoll(yaw + yawCor, pitch + pitchCor, rollCor);
        };
        AbstractMesh.prototype.isInFrustum = function (frustumPlanes) {
            if (!this._boundingInfo.isInFrustum(frustumPlanes)) {
                return false;
            }
            return true;
        };
        AbstractMesh.prototype.intersectsMesh = function (mesh, precise) {
            if (!this._boundingInfo || !mesh._boundingInfo) {
                return false;
            }
            return this._boundingInfo.intersects(mesh._boundingInfo, precise);
        };
        AbstractMesh.prototype.intersectsPoint = function (point) {
            if (!this._boundingInfo) {
                return false;
            }
            return this._boundingInfo.intersectsPoint(point);
        };
        AbstractMesh.prototype.setPhysicsState = function (impostor, options) {
            var physicsEngine = this.getScene().getPhysicsEngine();
            if (!physicsEngine) {
                return;
            }
            if (impostor.impostor) {
                options = impostor;
                impostor = impostor.impostor;
            }
            impostor = impostor || BABYLON.PhysicsEngine.NoImpostor;
            if (impostor === BABYLON.PhysicsEngine.NoImpostor) {
                physicsEngine._unregisterMesh(this);
                return;
            }
            options.mass = options.mass || 0;
            options.friction = options.friction || 0.2;
            options.restitution = options.restitution || 0.9;
            this._physicImpostor = impostor;
            this._physicsMass = options.mass;
            this._physicsFriction = options.friction;
            this._physicRestitution = options.restitution;
            physicsEngine._registerMesh(this, impostor, options);
        };
        AbstractMesh.prototype.getPhysicsImpostor = function () {
            if (!this._physicImpostor) {
                return BABYLON.PhysicsEngine.NoImpostor;
            }
            return this._physicImpostor;
        };
        AbstractMesh.prototype.getPhysicsMass = function () {
            if (!this._physicsMass) {
                return 0;
            }
            return this._physicsMass;
        };
        AbstractMesh.prototype.getPhysicsFriction = function () {
            if (!this._physicsFriction) {
                return 0;
            }
            return this._physicsFriction;
        };
        AbstractMesh.prototype.getPhysicsRestitution = function () {
            if (!this._physicRestitution) {
                return 0;
            }
            return this._physicRestitution;
        };
        AbstractMesh.prototype.applyImpulse = function (force, contactPoint) {
            if (!this._physicImpostor) {
                return;
            }
            this.getScene().getPhysicsEngine()._applyImpulse(this, force, contactPoint);
        };
        AbstractMesh.prototype.setPhysicsLinkWith = function (otherMesh, pivot1, pivot2, options) {
            if (!this._physicImpostor) {
                return;
            }
            this.getScene().getPhysicsEngine()._createLink(this, otherMesh, pivot1, pivot2, options);
        };
        AbstractMesh.prototype.updatePhysicsBodyPosition = function () {
            if (!this._physicImpostor) {
                return;
            }
            this.getScene().getPhysicsEngine()._updateBodyPosition(this);
        };
        AbstractMesh.prototype.moveWithCollisions = function (velocity) {
            var globalPosition = this.getAbsolutePosition();
            globalPosition.subtractFromFloatsToRef(0, this.ellipsoid.y, 0, this._oldPositionForCollisions);
            this._oldPositionForCollisions.addInPlace(this.ellipsoidOffset);
            this._collider.radius = this.ellipsoid;
            this.getScene()._getNewPosition(this._oldPositionForCollisions, velocity, this._collider, 3, this._newPositionForCollisions, this);
            this._newPositionForCollisions.subtractToRef(this._oldPositionForCollisions, this._diffPositionForCollisions);
            if (this._diffPositionForCollisions.length() > BABYLON.Engine.CollisionsEpsilon) {
                this.position.addInPlace(this._diffPositionForCollisions);
            }
        }; /***This function will create an octree to help select the right submeshes for rendering,picking and collisions*Please note that you must have a decent number of submeshes to get performance improvements when using octree*/
        AbstractMesh.prototype.createOrUpdateSubmeshesOctree = function (maxCapacity, maxDepth) {
            if (typeof maxCapacity === "undefined") {
                maxCapacity = 64;
            }
            if (typeof maxDepth === "undefined") {
                maxDepth = 2;
            }
            if (!this._submeshesOctree) {
                this._submeshesOctree = new BABYLON.Octree(BABYLON.Octree.CreationFuncForSubMeshes, maxCapacity, maxDepth);
            }
            this.computeWorldMatrix(true);
            var bbox = this.getBoundingInfo().boundingBox;
            this._submeshesOctree.update(bbox.minimumWorld, bbox.maximumWorld, this.subMeshes);
            return this._submeshesOctree;
        };
        AbstractMesh.prototype._collideForSubMesh = function (subMesh, transformMatrix, collider) {
            this._generatePointsArray();
            if (!subMesh._lastColliderWorldVertices || !subMesh._lastColliderTransformMatrix.equals(transformMatrix)) {
                subMesh._lastColliderTransformMatrix = transformMatrix.clone();
                subMesh._lastColliderWorldVertices = [];
                subMesh._trianglePlanes = [];
                var start = subMesh.verticesStart;
                var end = (subMesh.verticesStart + subMesh.verticesCount);
                for (var i = start; i < end; i++) {
                    subMesh._lastColliderWorldVertices.push(BABYLON.Vector3.TransformCoordinates(this._positions[i], transformMatrix));
                }
            }
            collider._collide(subMesh, subMesh._lastColliderWorldVertices, this.getIndices(), subMesh.indexStart, subMesh.indexStart + subMesh.indexCount, subMesh.verticesStart);
        };
        AbstractMesh.prototype._processCollisionsForSubMeshes = function (collider, transformMatrix) {
            var subMeshes;
            var len;
            if (this._submeshesOctree && this.useOctreeForCollisions) {
                var radius = collider.velocityWorldLength + Math.max(collider.radius.x, collider.radius.y, collider.radius.z);
                var intersections = this._submeshesOctree.intersects(collider.basePointWorld, radius);
                len = intersections.length;
                subMeshes = intersections.data;
            } else {
                subMeshes = this.subMeshes;
                len = subMeshes.length;
            }
            for (var index = 0; index < len; index++) {
                var subMesh = subMeshes[index];
                if (len > 1 && !subMesh._checkCollision(collider)) continue;
                this._collideForSubMesh(subMesh, transformMatrix, collider);
            }
        };
        AbstractMesh.prototype._checkCollision = function (collider) {
            if (!this._boundingInfo._checkCollision(collider)) return;
            BABYLON.Matrix.ScalingToRef(1.0 / collider.radius.x, 1.0 / collider.radius.y, 1.0 / collider.radius.z, this._collisionsScalingMatrix);
            this.worldMatrixFromCache.multiplyToRef(this._collisionsScalingMatrix, this._collisionsTransformMatrix);
            this._processCollisionsForSubMeshes(collider, this._collisionsTransformMatrix);
        };
        AbstractMesh.prototype._generatePointsArray = function () {
            return false;
        };
        AbstractMesh.prototype.intersects = function (ray, fastCheck) {
            var pickingInfo = new BABYLON.PickingInfo();
            if (!this.subMeshes || !this._boundingInfo || !ray.intersectsSphere(this._boundingInfo.boundingSphere) || !ray.intersectsBox(this._boundingInfo.boundingBox)) {
                return pickingInfo;
            }
            if (!this._generatePointsArray()) {
                return pickingInfo;
            }
            var intersectInfo = null;
            var subMeshes;
            var len;
            if (this._submeshesOctree && this.useOctreeForPicking) {
                var worldRay = BABYLON.Ray.Transform(ray, this.getWorldMatrix());
                var intersections = this._submeshesOctree.intersectsRay(worldRay);
                len = intersections.length;
                subMeshes = intersections.data;
            } else {
                subMeshes = this.subMeshes;
                len = subMeshes.length;
            }
            for (var index = 0; index < len; index++) {
                var subMesh = subMeshes[index];
                if (len > 1 && !subMesh.canIntersects(ray)) continue;
                var currentIntersectInfo = subMesh.intersects(ray, this._positions, this.getIndices(), fastCheck);
                if (currentIntersectInfo) {
                    if (fastCheck || !intersectInfo || currentIntersectInfo.distance < intersectInfo.distance) {
                        intersectInfo = currentIntersectInfo;
                        if (fastCheck) {
                            break;
                        }
                    }
                }
            }
            if (intersectInfo) {
                var world = this.getWorldMatrix();
                var worldOrigin = BABYLON.Vector3.TransformCoordinates(ray.origin, world);
                var direction = ray.direction.clone();
                direction.normalize();
                direction = direction.scale(intersectInfo.distance);
                var worldDirection = BABYLON.Vector3.TransformNormal(direction, world);
                var pickedPoint = worldOrigin.add(worldDirection);
                pickingInfo.hit = true;
                pickingInfo.distance = BABYLON.Vector3.Distance(worldOrigin, pickedPoint);
                pickingInfo.pickedPoint = pickedPoint;
                pickingInfo.pickedMesh = this;
                pickingInfo.bu = intersectInfo.bu;
                pickingInfo.bv = intersectInfo.bv;
                pickingInfo.faceId = intersectInfo.faceId;
                return pickingInfo;
            }
            return pickingInfo;
        };
        AbstractMesh.prototype.clone = function (name, newParent, doNotCloneChildren) {
            return null;
        };
        AbstractMesh.prototype.releaseSubMeshes = function () {
            if (this.subMeshes) {
                while (this.subMeshes.length) {
                    this.subMeshes[0].dispose();
                }
            } else {
                this.subMeshes = new Array();
            }
        };
        AbstractMesh.prototype.dispose = function (doNotRecurse) {
            if (this.getPhysicsImpostor() != BABYLON.PhysicsEngine.NoImpostor) {
                this.setPhysicsState(BABYLON.PhysicsEngine.NoImpostor);
            }
            for (index = 0; index < this._intersectionsInProgress.length; index++) {
                var other = this._intersectionsInProgress[index];
                var pos = other._intersectionsInProgress.indexOf(this);
                other._intersectionsInProgress.splice(pos, 1);
            }
            this._intersectionsInProgress = [];
            this.releaseSubMeshes();
            var index = this.getScene().meshes.indexOf(this);
            if (index != -1) {
                this.getScene().meshes.splice(index, 1);
            }
            if (!doNotRecurse) {
                for (index = 0; index < this.getScene().particleSystems.length; index++) {
                    if (this.getScene().particleSystems[index].emitter == this) {
                        this.getScene().particleSystems[index].dispose();
                        index--;
                    }
                }
                var objects = this.getScene().meshes.slice(0);
                for (index = 0; index < objects.length; index++) {
                    if (objects[index].parent == this) {
                        objects[index].dispose();
                    }
                }
            } else {
                for (index = 0; index < this.getScene().meshes.length; index++) {
                    var obj = this.getScene().meshes[index];
                    if (obj.parent === this) {
                        obj.parent = null;
                        obj.computeWorldMatrix(true);
                    }
                }
            }
            this._isDisposed = true;
            if (this.onDispose) {
                this.onDispose();
            }
        };
        AbstractMesh._BILLBOARDMODE_NONE = 0;
        AbstractMesh._BILLBOARDMODE_X = 1;
        AbstractMesh._BILLBOARDMODE_Y = 2;
        AbstractMesh._BILLBOARDMODE_Z = 4;
        AbstractMesh._BILLBOARDMODE_ALL = 7;
        return AbstractMesh;
    })(BABYLON.Node);
    BABYLON.AbstractMesh = AbstractMesh;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var _InstancesBatch = (function () {
        function _InstancesBatch() {
            this.mustReturn = false;
            this.visibleInstances = new Array();
            this.renderSelf = new Array();
        }
        return _InstancesBatch;
    })();
    BABYLON._InstancesBatch = _InstancesBatch;
    var Mesh = (function (_super) {
        __extends(Mesh, _super);

        function Mesh(name, scene) {
            _super.call(this, name, scene);
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NONE;
            this.instances = new Array();
            this._onBeforeRenderCallbacks = new Array();
            this._onAfterRenderCallbacks = new Array();
            this._visibleInstances = {};
            this._renderIdForInstances = new Array();
            this._batchCache = new _InstancesBatch();
            this._instancesBufferSize = 32 * 16 * 4;
        }
        Mesh.prototype.getTotalVertices = function () {
            if (!this._geometry) {
                return 0;
            }
            return this._geometry.getTotalVertices();
        };
        Mesh.prototype.getVerticesData = function (kind) {
            if (!this._geometry) {
                return null;
            }
            return this._geometry.getVerticesData(kind);
        };
        Mesh.prototype.getVertexBuffer = function (kind) {
            if (!this._geometry) {
                return undefined;
            }
            return this._geometry.getVertexBuffer(kind);
        };
        Mesh.prototype.isVerticesDataPresent = function (kind) {
            if (!this._geometry) {
                if (this._delayInfo) {
                    return this._delayInfo.indexOf(kind) !== -1;
                }
                return false;
            }
            return this._geometry.isVerticesDataPresent(kind);
        };
        Mesh.prototype.getVerticesDataKinds = function () {
            if (!this._geometry) {
                var result = [];
                if (this._delayInfo) {
                    for (var kind in this._delayInfo) {
                        result.push(kind);
                    }
                }
                return result;
            }
            return this._geometry.getVerticesDataKinds();
        };
        Mesh.prototype.getTotalIndices = function () {
            if (!this._geometry) {
                return 0;
            }
            return this._geometry.getTotalIndices();
        };
        Mesh.prototype.getIndices = function () {
            if (!this._geometry) {
                return [];
            }
            return this._geometry.getIndices();
        };
        Mesh.prototype.isReady = function () {
            if (this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADING) {
                return false;
            }
            return _super.prototype.isReady.call(this);
        };
        Mesh.prototype.isDisposed = function () {
            return this._isDisposed;
        };
        Mesh.prototype._preActivate = function () {
            var sceneRenderId = this.getScene().getRenderId();
            if (this._preActivateId == sceneRenderId) {
                return;
            }
            this._preActivateId = sceneRenderId;
            this._visibleInstances = null;
        };
        Mesh.prototype._registerInstanceForRenderId = function (instance, renderId) {
            if (!this._visibleInstances) {
                this._visibleInstances = {};
                this._visibleInstances.defaultRenderId = renderId;
                this._visibleInstances.selfDefaultRenderId = this._renderId;
            }
            if (!this._visibleInstances[renderId]) {
                this._visibleInstances[renderId] = new Array();
            }
            this._visibleInstances[renderId].push(instance);
        };
        Mesh.prototype.refreshBoundingInfo = function () {
            var data = this.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            if (data) {
                var extend = BABYLON.Tools.ExtractMinAndMax(data, 0, this.getTotalVertices());
                this._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
            }
            if (this.subMeshes) {
                for (var index = 0; index < this.subMeshes.length; index++) {
                    this.subMeshes[index].refreshBoundingInfo();
                }
            }
            this._updateBoundingInfo();
        };
        Mesh.prototype._createGlobalSubMesh = function () {
            var totalVertices = this.getTotalVertices();
            if (!totalVertices || !this.getIndices()) {
                return null;
            }
            this.releaseSubMeshes();
            return new BABYLON.SubMesh(0, 0, totalVertices, 0, this.getTotalIndices(), this);
        };
        Mesh.prototype.subdivide = function (count) {
            if (count < 1) {
                return;
            }
            var totalIndices = this.getTotalIndices();
            var subdivisionSize = (totalIndices / count) | 0;
            var offset = 0;
            while (subdivisionSize % 3 != 0) {
                subdivisionSize++;
            }
            this.releaseSubMeshes();
            for (var index = 0; index < count; index++) {
                if (offset >= totalIndices) {
                    break;
                }
                BABYLON.SubMesh.CreateFromIndices(0, offset, Math.min(subdivisionSize, totalIndices - offset), this);
                offset += subdivisionSize;
            }
            this.synchronizeInstances();
        };
        Mesh.prototype.setVerticesData = function (kind, data, updatable) {
            if (kind instanceof Array) {
                var temp = data;
                data = kind;
                kind = temp;
                BABYLON.Tools.Warn("Deprecated usage of setVerticesData detected (since v1.12). Current signature is setVerticesData(kind, data, updatable).");
            }
            if (!this._geometry) {
                var vertexData = new BABYLON.VertexData();
                vertexData.set(data, kind);
                var scene = this.getScene();
                new BABYLON.Geometry(BABYLON.Geometry.RandomId(), scene, vertexData, updatable, this);
            } else {
                this._geometry.setVerticesData(kind, data, updatable);
            }
        };
        Mesh.prototype.updateVerticesData = function (kind, data, updateExtends, makeItUnique) {
            if (!this._geometry) {
                return;
            }
            if (!makeItUnique) {
                this._geometry.updateVerticesData(kind, data, updateExtends);
            } else {
                this.makeGeometryUnique();
                this.updateVerticesData(kind, data, updateExtends, false);
            }
        };
        Mesh.prototype.makeGeometryUnique = function () {
            if (!this._geometry) {
                return;
            }
            var geometry = this._geometry.copy(BABYLON.Geometry.RandomId());
            geometry.applyToMesh(this);
        };
        Mesh.prototype.setIndices = function (indices) {
            if (!this._geometry) {
                var vertexData = new BABYLON.VertexData();
                vertexData.indices = indices;
                var scene = this.getScene();
                new BABYLON.Geometry(BABYLON.Geometry.RandomId(), scene, vertexData, false, this);
            } else {
                this._geometry.setIndices(indices);
            }
        };
        Mesh.prototype._bind = function (subMesh, effect, wireframe) {
            var engine = this.getScene().getEngine();
            var indexToBind = this._geometry.getIndexBuffer();
            if (wireframe) {
                indexToBind = subMesh.getLinesIndexBuffer(this.getIndices(), engine);
            }
            engine.bindMultiBuffers(this._geometry.getVertexBuffers(), indexToBind, effect);
        };
        Mesh.prototype._draw = function (subMesh, useTriangles, instancesCount) {
            if (!this._geometry || !this._geometry.getVertexBuffers() || !this._geometry.getIndexBuffer()) {
                return;
            }
            var engine = this.getScene().getEngine();
            engine.draw(useTriangles, useTriangles ? subMesh.indexStart : 0, useTriangles ? subMesh.indexCount : subMesh.linesIndexCount, instancesCount);
        };
        Mesh.prototype._fullDraw = function (subMesh, useTriangles, instancesCount) {
            if (!this._geometry || !this._geometry.getVertexBuffers() || !this._geometry.getIndexBuffer()) {
                return;
            }
            var engine = this.getScene().getEngine();
            engine.draw(useTriangles, useTriangles ? subMesh.indexStart : 0, useTriangles ? subMesh.indexCount : subMesh.linesIndexCount, instancesCount);
        };
        Mesh.prototype.registerBeforeRender = function (func) {
            this._onBeforeRenderCallbacks.push(func);
        };
        Mesh.prototype.unregisterBeforeRender = function (func) {
            var index = this._onBeforeRenderCallbacks.indexOf(func);
            if (index > -1) {
                this._onBeforeRenderCallbacks.splice(index, 1);
            }
        };
        Mesh.prototype.registerAfterRender = function (func) {
            this._onAfterRenderCallbacks.push(func);
        };
        Mesh.prototype.unregisterAfterRender = function (func) {
            var index = this._onAfterRenderCallbacks.indexOf(func);
            if (index > -1) {
                this._onAfterRenderCallbacks.splice(index, 1);
            }
        };
        Mesh.prototype._getInstancesRenderList = function (subMeshId) {
            var scene = this.getScene();
            this._batchCache.mustReturn = false;
            this._batchCache.renderSelf[subMeshId] = this.isEnabled() && this.isVisible;
            this._batchCache.visibleInstances[subMeshId] = null;
            if (this._visibleInstances) {
                var currentRenderId = scene.getRenderId();
                this._batchCache.visibleInstances[subMeshId] = this._visibleInstances[currentRenderId];
                var selfRenderId = this._renderId;
                if (!this._batchCache.visibleInstances[subMeshId] && this._visibleInstances.defaultRenderId) {
                    this._batchCache.visibleInstances[subMeshId] = this._visibleInstances[this._visibleInstances.defaultRenderId];
                    currentRenderId = this._visibleInstances.defaultRenderId;
                    selfRenderId = this._visibleInstances.selfDefaultRenderId;
                }
                if (this._batchCache.visibleInstances[subMeshId] && this._batchCache.visibleInstances[subMeshId].length) {
                    if (this._renderIdForInstances[subMeshId] === currentRenderId) {
                        this._batchCache.mustReturn = true;
                        return this._batchCache;
                    }
                    if (currentRenderId !== selfRenderId) {
                        this._batchCache.renderSelf[subMeshId] = false;
                    }
                }
                this._renderIdForInstances[subMeshId] = currentRenderId;
            }
            return this._batchCache;
        };
        Mesh.prototype._renderWithInstances = function (subMesh, wireFrame, batch, effect, engine) {
            var matricesCount = this.instances.length + 1;
            var bufferSize = matricesCount * 16 * 4;
            while (this._instancesBufferSize < bufferSize) {
                this._instancesBufferSize *= 2;
            }
            if (!this._worldMatricesInstancesBuffer || this._worldMatricesInstancesBuffer.capacity < this._instancesBufferSize) {
                if (this._worldMatricesInstancesBuffer) {
                    engine.deleteInstancesBuffer(this._worldMatricesInstancesBuffer);
                }
                this._worldMatricesInstancesBuffer = engine.createInstancesBuffer(this._instancesBufferSize);
                this._worldMatricesInstancesArray = new Float32Array(this._instancesBufferSize / 4);
            }
            var offset = 0;
            var instancesCount = 0;
            var world = this.getWorldMatrix();
            if (batch.renderSelf[subMesh._id]) {
                world.copyToArray(this._worldMatricesInstancesArray, offset);
                offset += 16;
                instancesCount++;
            }
            var visibleInstances = batch.visibleInstances[subMesh._id];
            if (visibleInstances) {
                for (var instanceIndex = 0; instanceIndex < visibleInstances.length; instanceIndex++) {
                    var instance = visibleInstances[instanceIndex];
                    instance.getWorldMatrix().copyToArray(this._worldMatricesInstancesArray, offset);
                    offset += 16;
                    instancesCount++;
                }
            }
            var offsetLocation0 = effect.getAttributeLocationByName("world0");
            var offsetLocation1 = effect.getAttributeLocationByName("world1");
            var offsetLocation2 = effect.getAttributeLocationByName("world2");
            var offsetLocation3 = effect.getAttributeLocationByName("world3");
            var offsetLocations = [offsetLocation0, offsetLocation1, offsetLocation2, offsetLocation3];
            engine.updateAndBindInstancesBuffer(this._worldMatricesInstancesBuffer, this._worldMatricesInstancesArray, offsetLocations);
            this._draw(subMesh, !wireFrame, instancesCount);
            engine.unBindInstancesBuffer(this._worldMatricesInstancesBuffer, offsetLocations);
        };
        Mesh.prototype.render = function (subMesh) {
            var scene = this.getScene();
            var batch = this._getInstancesRenderList(subMesh._id);
            if (batch.mustReturn) {
                return;
            }
            if (!this._geometry || !this._geometry.getVertexBuffers() || !this._geometry.getIndexBuffer()) {
                return;
            }
            for (var callbackIndex = 0; callbackIndex < this._onBeforeRenderCallbacks.length; callbackIndex++) {
                this._onBeforeRenderCallbacks[callbackIndex]();
            }
            var engine = scene.getEngine();
            var hardwareInstancedRendering = (engine.getCaps().instancedArrays !== null) && (batch.visibleInstances[subMesh._id] !== null);
            var effectiveMaterial = subMesh.getMaterial();
            if (!effectiveMaterial || !effectiveMaterial.isReady(this, hardwareInstancedRendering)) {
                return;
            }
            var savedDepthWrite = engine.getDepthWrite();
            if (this.renderOutline) {
                engine.setDepthWrite(false);
                scene.getOutlineRenderer().render(subMesh, batch);
            }
            effectiveMaterial._preBind();
            var effect = effectiveMaterial.getEffect();
            var wireFrame = engine.forceWireframe || effectiveMaterial.wireframe;
            this._bind(subMesh, effect, wireFrame);
            var world = this.getWorldMatrix();
            effectiveMaterial.bind(world, this);
            if (hardwareInstancedRendering) {
                this._renderWithInstances(subMesh, wireFrame, batch, effect, engine);
            } else {
                if (batch.renderSelf[subMesh._id]) {
                    this._draw(subMesh, !wireFrame);
                }
                if (batch.visibleInstances[subMesh._id]) {
                    for (var instanceIndex = 0; instanceIndex < batch.visibleInstances[subMesh._id].length; instanceIndex++) {
                        var instance = batch.visibleInstances[subMesh._id][instanceIndex];
                        world = instance.getWorldMatrix();
                        effectiveMaterial.bindOnlyWorldMatrix(world);
                        this._draw(subMesh, !wireFrame);
                    }
                }
            }
            effectiveMaterial.unbind();
            if (this.renderOutline && savedDepthWrite) {
                engine.setDepthWrite(true);
                engine.setColorWrite(false);
                scene.getOutlineRenderer().render(subMesh, batch);
                engine.setColorWrite(true);
            }
            for (callbackIndex = 0; callbackIndex < this._onAfterRenderCallbacks.length; callbackIndex++) {
                this._onAfterRenderCallbacks[callbackIndex]();
            }
        };
        Mesh.prototype.getEmittedParticleSystems = function () {
            var results = new Array();
            for (var index = 0; index < this.getScene().particleSystems.length; index++) {
                var particleSystem = this.getScene().particleSystems[index];
                if (particleSystem.emitter === this) {
                    results.push(particleSystem);
                }
            }
            return results;
        };
        Mesh.prototype.getHierarchyEmittedParticleSystems = function () {
            var results = new Array();
            var descendants = this.getDescendants();
            descendants.push(this);
            for (var index = 0; index < this.getScene().particleSystems.length; index++) {
                var particleSystem = this.getScene().particleSystems[index];
                if (descendants.indexOf(particleSystem.emitter) !== -1) {
                    results.push(particleSystem);
                }
            }
            return results;
        };
        Mesh.prototype.getChildren = function () {
            var results = [];
            for (var index = 0; index < this.getScene().meshes.length; index++) {
                var mesh = this.getScene().meshes[index];
                if (mesh.parent == this) {
                    results.push(mesh);
                }
            }
            return results;
        };
        Mesh.prototype._checkDelayState = function () {
            var _this = this;
            var that = this;
            var scene = this.getScene();
            if (this._geometry) {
                this._geometry.load(scene);
            } else if (that.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_NOTLOADED) {
                that.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADING;
                scene._addPendingData(that);
                BABYLON.Tools.LoadFile(this.delayLoadingFile, function (data) {
                    _this._delayLoadingFunction(JSON.parse(data), _this);
                    _this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADED;
                    scene._removePendingData(_this);
                }, function () {}, scene.database);
            }
        };
        Mesh.prototype.isInFrustum = function (frustumPlanes) {
            if (this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADING) {
                return false;
            }
            if (!_super.prototype.isInFrustum.call(this, frustumPlanes)) {
                return false;
            }
            this._checkDelayState();
            return true;
        };
        Mesh.prototype.setMaterialByID = function (id) {
            var materials = this.getScene().materials;
            for (var index = 0; index < materials.length; index++) {
                if (materials[index].id == id) {
                    this.material = materials[index];
                    return;
                }
            }
            var multiMaterials = this.getScene().multiMaterials;
            for (index = 0; index < multiMaterials.length; index++) {
                if (multiMaterials[index].id == id) {
                    this.material = multiMaterials[index];
                    return;
                }
            }
        };
        Mesh.prototype.getAnimatables = function () {
            var results = [];
            if (this.material) {
                results.push(this.material);
            }
            return results;
        };
        Mesh.prototype.bakeTransformIntoVertices = function (transform) {
            if (!this.isVerticesDataPresent(BABYLON.VertexBuffer.PositionKind)) {
                return;
            }
            this._resetPointsArrayCache();
            var data = this.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            var temp = [];
            for (var index = 0; index < data.length; index += 3) {
                BABYLON.Vector3.TransformCoordinates(BABYLON.Vector3.FromArray(data, index), transform).toArray(temp, index);
            }
            this.setVerticesData(BABYLON.VertexBuffer.PositionKind, temp, this.getVertexBuffer(BABYLON.VertexBuffer.PositionKind).isUpdatable());
            if (!this.isVerticesDataPresent(BABYLON.VertexBuffer.NormalKind)) {
                return;
            }
            data = this.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            for (index = 0; index < data.length; index += 3) {
                BABYLON.Vector3.TransformNormal(BABYLON.Vector3.FromArray(data, index), transform).toArray(temp, index);
            }
            this.setVerticesData(BABYLON.VertexBuffer.NormalKind, temp, this.getVertexBuffer(BABYLON.VertexBuffer.NormalKind).isUpdatable());
        };
        Mesh.prototype._resetPointsArrayCache = function () {
            this._positions = null;
        };
        Mesh.prototype._generatePointsArray = function () {
            if (this._positions) return true;
            this._positions = [];
            var data = this.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            if (!data) {
                return false;
            }
            for (var index = 0; index < data.length; index += 3) {
                this._positions.push(BABYLON.Vector3.FromArray(data, index));
            }
            return true;
        };
        Mesh.prototype.clone = function (name, newParent, doNotCloneChildren) {
            var result = new BABYLON.Mesh(name, this.getScene());
            this._geometry.applyToMesh(result);
            BABYLON.Tools.DeepCopy(this, result, ["name", "material", "skeleton"], []);
            result.material = this.material;
            if (newParent) {
                result.parent = newParent;
            }
            if (!doNotCloneChildren) {
                for (var index = 0; index < this.getScene().meshes.length; index++) {
                    var mesh = this.getScene().meshes[index];
                    if (mesh.parent == this) {
                        mesh.clone(mesh.name, result);
                    }
                }
            }
            for (index = 0; index < this.getScene().particleSystems.length; index++) {
                var system = this.getScene().particleSystems[index];
                if (system.emitter == this) {
                    system.clone(system.name, result);
                }
            }
            result.computeWorldMatrix(true);
            return result;
        };
        Mesh.prototype.dispose = function (doNotRecurse) {
            if (this._geometry) {
                this._geometry.releaseForMesh(this, true);
            }
            if (this._worldMatricesInstancesBuffer) {
                this.getEngine().deleteInstancesBuffer(this._worldMatricesInstancesBuffer);
                this._worldMatricesInstancesBuffer = null;
            }
            while (this.instances.length) {
                this.instances[0].dispose();
            }
            _super.prototype.dispose.call(this, doNotRecurse);
        };
        Mesh.prototype.convertToFlatShadedMesh = function () {
            var kinds = this.getVerticesDataKinds();
            var vbs = [];
            var data = [];
            var newdata = [];
            var updatableNormals = false;
            for (var kindIndex = 0; kindIndex < kinds.length; kindIndex++) {
                var kind = kinds[kindIndex];
                var vertexBuffer = this.getVertexBuffer(kind);
                if (kind === BABYLON.VertexBuffer.NormalKind) {
                    updatableNormals = vertexBuffer.isUpdatable();
                    kinds.splice(kindIndex, 1);
                    kindIndex--;
                    continue;
                }
                vbs[kind] = vertexBuffer;
                data[kind] = vbs[kind].getData();
                newdata[kind] = [];
            }
            var previousSubmeshes = this.subMeshes.slice(0);
            var indices = this.getIndices();
            var totalIndices = this.getTotalIndices();
            for (index = 0; index < totalIndices; index++) {
                var vertexIndex = indices[index];
                for (kindIndex = 0; kindIndex < kinds.length; kindIndex++) {
                    kind = kinds[kindIndex];
                    var stride = vbs[kind].getStrideSize();
                    for (var offset = 0; offset < stride; offset++) {
                        newdata[kind].push(data[kind][vertexIndex * stride + offset]);
                    }
                }
            }
            var normals = [];
            var positions = newdata[BABYLON.VertexBuffer.PositionKind];
            for (var index = 0; index < totalIndices; index += 3) {
                indices[index] = index;
                indices[index + 1] = index + 1;
                indices[index + 2] = index + 2;
                var p1 = BABYLON.Vector3.FromArray(positions, index * 3);
                var p2 = BABYLON.Vector3.FromArray(positions, (index + 1) * 3);
                var p3 = BABYLON.Vector3.FromArray(positions, (index + 2) * 3);
                var p1p2 = p1.subtract(p2);
                var p3p2 = p3.subtract(p2);
                var normal = BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(p1p2, p3p2));
                for (var localIndex = 0; localIndex < 3; localIndex++) {
                    normals.push(normal.x);
                    normals.push(normal.y);
                    normals.push(normal.z);
                }
            }
            this.setIndices(indices);
            this.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals, updatableNormals);
            for (kindIndex = 0; kindIndex < kinds.length; kindIndex++) {
                kind = kinds[kindIndex];
                this.setVerticesData(kind, newdata[kind], vbs[kind].isUpdatable());
            }
            this.releaseSubMeshes();
            for (var submeshIndex = 0; submeshIndex < previousSubmeshes.length; submeshIndex++) {
                var previousOne = previousSubmeshes[submeshIndex];
                var subMesh = new BABYLON.SubMesh(previousOne.materialIndex, previousOne.indexStart, previousOne.indexCount, previousOne.indexStart, previousOne.indexCount, this);
            }
            this.synchronizeInstances();
        };
        Mesh.prototype.createInstance = function (name) {
            return new BABYLON.InstancedMesh(name, this);
        };
        Mesh.prototype.synchronizeInstances = function () {
            for (var instanceIndex = 0; instanceIndex < this.instances.length; instanceIndex++) {
                var instance = this.instances[instanceIndex];
                instance._syncSubMeshes();
            }
        };
        Mesh.CreateBox = function (name, size, scene, updatable) {
            var box = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateBox(size);
            vertexData.applyToMesh(box, updatable);
            return box;
        };
        Mesh.CreateSphere = function (name, segments, diameter, scene, updatable) {
            var sphere = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateSphere(segments, diameter);
            vertexData.applyToMesh(sphere, updatable);
            return sphere;
        };
        Mesh.CreateCylinder = function (name, height, diameterTop, diameterBottom, tessellation, subdivisions, scene, updatable) {
            if (scene === undefined || !(scene instanceof BABYLON.Scene)) {
                if (scene !== undefined) {
                    updatable = scene;
                }
                scene = subdivisions;
                subdivisions = 1;
            }
            var cylinder = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateCylinder(height, diameterTop, diameterBottom, tessellation, subdivisions);
            vertexData.applyToMesh(cylinder, updatable);
            return cylinder;
        };
        Mesh.CreateTorus = function (name, diameter, thickness, tessellation, scene, updatable) {
            var torus = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateTorus(diameter, thickness, tessellation);
            vertexData.applyToMesh(torus, updatable);
            return torus;
        };
        Mesh.CreateTorusKnot = function (name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable) {
            var torusKnot = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateTorusKnot(radius, tube, radialSegments, tubularSegments, p, q);
            vertexData.applyToMesh(torusKnot, updatable);
            return torusKnot;
        };
        Mesh.CreateLines = function (name, points, scene, updatable) {
            var lines = new BABYLON.LinesMesh(name, scene, updatable);
            var vertexData = BABYLON.VertexData.CreateLines(points);
            vertexData.applyToMesh(lines, updatable);
            return lines;
        };
        Mesh.CreatePlane = function (name, size, scene, updatable) {
            var plane = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreatePlane(size);
            vertexData.applyToMesh(plane, updatable);
            return plane;
        };
        Mesh.CreateGround = function (name, width, height, subdivisions, scene, updatable) {
            var ground = new BABYLON.GroundMesh(name, scene);
            ground._setReady(false);
            ground._subdivisions = subdivisions;
            var vertexData = BABYLON.VertexData.CreateGround(width, height, subdivisions);
            vertexData.applyToMesh(ground, updatable);
            ground._setReady(true);
            return ground;
        };
        Mesh.CreateTiledGround = function (name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) {
            var tiledGround = new BABYLON.Mesh(name, scene);
            var vertexData = BABYLON.VertexData.CreateTiledGround(xmin, zmin, xmax, zmax, subdivisions, precision);
            vertexData.applyToMesh(tiledGround, updatable);
            return tiledGround;
        };
        Mesh.CreateGroundFromHeightMap = function (name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable) {
            var ground = new BABYLON.GroundMesh(name, scene);
            ground._subdivisions = subdivisions;
            ground._setReady(false);
            var onload = function (img) {
                    var canvas = document.createElement("canvas");
                    var context = canvas.getContext("2d");
                    var heightMapWidth = img.width;
                    var heightMapHeight = img.height;
                    canvas.width = heightMapWidth;
                    canvas.height = heightMapHeight;
                    context.drawImage(img, 0, 0);
                    var buffer = context.getImageData(0, 0, heightMapWidth, heightMapHeight).data;
                    var vertexData = BABYLON.VertexData.CreateGroundFromHeightMap(width, height, subdivisions, minHeight, maxHeight, buffer, heightMapWidth, heightMapHeight);
                    vertexData.applyToMesh(ground, updatable);
                    ground._setReady(true);
                };
            BABYLON.Tools.LoadImage(url, onload, function () {}, scene.database);
            return ground;
        };
        Mesh.MinMax = function (meshes) {
            var minVector = null;
            var maxVector = null;
            for (var i in meshes) {
                var mesh = meshes[i];
                var boundingBox = mesh.getBoundingInfo().boundingBox;
                if (!minVector) {
                    minVector = boundingBox.minimumWorld;
                    maxVector = boundingBox.maximumWorld;
                    continue;
                }
                minVector.MinimizeInPlace(boundingBox.minimumWorld);
                maxVector.MaximizeInPlace(boundingBox.maximumWorld);
            }
            return {
                min: minVector,
                max: maxVector
            };
        };
        Mesh.Center = function (meshesOrMinMaxVector) {
            var minMaxVector = meshesOrMinMaxVector.min !== undefined ? meshesOrMinMaxVector : BABYLON.Mesh.MinMax(meshesOrMinMaxVector);
            return BABYLON.Vector3.Center(minMaxVector.min, minMaxVector.max);
        };
        return Mesh;
    })(BABYLON.AbstractMesh);
    BABYLON.Mesh = Mesh;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var GroundMesh = (function (_super) {
        __extends(GroundMesh, _super);

        function GroundMesh(name, scene) {
            _super.call(this, name, scene);
            this.generateOctree = false;
            this._worldInverse = new BABYLON.Matrix();
        }
        Object.defineProperty(GroundMesh.prototype, "subdivisions", {
            get: function () {
                return this._subdivisions;
            },
            enumerable: true,
            configurable: true
        });
        GroundMesh.prototype.optimize = function (chunksCount) {
            this.subdivide(this._subdivisions);
            this.createOrUpdateSubmeshesOctree(32);
        };
        GroundMesh.prototype.getHeightAtCoordinates = function (x, z) {
            var ray = new BABYLON.Ray(new BABYLON.Vector3(x, this.getBoundingInfo().boundingBox.maximumWorld.y + 1, z), new BABYLON.Vector3(0, -1, 0));
            this.getWorldMatrix().invertToRef(this._worldInverse);
            ray = BABYLON.Ray.Transform(ray, this._worldInverse);
            var pickInfo = this.intersects(ray);
            if (pickInfo.hit) {
                return pickInfo.pickedPoint.y;
            }
            return 0;
        };
        return GroundMesh;
    })(BABYLON.Mesh);
    BABYLON.GroundMesh = GroundMesh;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var InstancedMesh = (function (_super) {
        __extends(InstancedMesh, _super);

        function InstancedMesh(name, source) {
            _super.call(this, name, source.getScene());
            source.instances.push(this);
            this._sourceMesh = source;
            this.position.copyFrom(source.position);
            this.rotation.copyFrom(source.rotation);
            this.scaling.copyFrom(source.scaling);
            if (source.rotationQuaternion) {
                this.rotationQuaternion = source.rotationQuaternion.clone();
            }
            this.infiniteDistance = source.infiniteDistance;
            this.setPivotMatrix(source.getPivotMatrix());
            this.refreshBoundingInfo();
            this._syncSubMeshes();
        }
        Object.defineProperty(InstancedMesh.prototype, "receiveShadows", {
            get: function () {
                return this._sourceMesh.receiveShadows;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstancedMesh.prototype, "material", {
            get: function () {
                return this._sourceMesh.material;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstancedMesh.prototype, "visibility", {
            get: function () {
                return this._sourceMesh.visibility;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(InstancedMesh.prototype, "skeleton", {
            get: function () {
                return this._sourceMesh.skeleton;
            },
            enumerable: true,
            configurable: true
        });
        InstancedMesh.prototype.getTotalVertices = function () {
            return this._sourceMesh.getTotalVertices();
        };
        Object.defineProperty(InstancedMesh.prototype, "sourceMesh", {
            get: function () {
                return this._sourceMesh;
            },
            enumerable: true,
            configurable: true
        });
        InstancedMesh.prototype.getVerticesData = function (kind) {
            return this._sourceMesh.getVerticesData(kind);
        };
        InstancedMesh.prototype.isVerticesDataPresent = function (kind) {
            return this._sourceMesh.isVerticesDataPresent(kind);
        };
        InstancedMesh.prototype.getIndices = function () {
            return this._sourceMesh.getIndices();
        };
        Object.defineProperty(InstancedMesh.prototype, "_positions", {
            get: function () {
                return this._sourceMesh._positions;
            },
            enumerable: true,
            configurable: true
        });
        InstancedMesh.prototype.refreshBoundingInfo = function () {
            var data = this._sourceMesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            if (data) {
                var extend = BABYLON.Tools.ExtractMinAndMax(data, 0, this._sourceMesh.getTotalVertices());
                this._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
            }
            this._updateBoundingInfo();
        };
        InstancedMesh.prototype._preActivate = function () {
            this.sourceMesh._preActivate();
        };
        InstancedMesh.prototype._activate = function (renderId) {
            this.sourceMesh._registerInstanceForRenderId(this, renderId);
        };
        InstancedMesh.prototype._syncSubMeshes = function () {
            this.releaseSubMeshes();
            for (var index = 0; index < this._sourceMesh.subMeshes.length; index++) {
                this._sourceMesh.subMeshes[index].clone(this, this._sourceMesh);
            }
        };
        InstancedMesh.prototype._generatePointsArray = function () {
            return this._sourceMesh._generatePointsArray();
        };
        InstancedMesh.prototype.clone = function (name, newParent, doNotCloneChildren) {
            var result = this._sourceMesh.createInstance(name);
            BABYLON.Tools.DeepCopy(this, result, ["name"], []);
            this.refreshBoundingInfo();
            if (newParent) {
                result.parent = newParent;
            }
            if (!doNotCloneChildren) {
                for (var index = 0; index < this.getScene().meshes.length; index++) {
                    var mesh = this.getScene().meshes[index];
                    if (mesh.parent == this) {
                        mesh.clone(mesh.name, result);
                    }
                }
            }
            result.computeWorldMatrix(true);
            return result;
        };
        InstancedMesh.prototype.dispose = function (doNotRecurse) {
            var index = this._sourceMesh.instances.indexOf(this);
            this._sourceMesh.instances.splice(index, 1);
            _super.prototype.dispose.call(this, doNotRecurse);
        };
        return InstancedMesh;
    })(BABYLON.AbstractMesh);
    BABYLON.InstancedMesh = InstancedMesh;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var SubMesh = (function () {
        function SubMesh(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox) {
            if (typeof createBoundingBox === "undefined") {
                createBoundingBox = true;
            }
            this.materialIndex = materialIndex;
            this.verticesStart = verticesStart;
            this.verticesCount = verticesCount;
            this.indexStart = indexStart;
            this.indexCount = indexCount;
            this._renderId = 0;
            this._mesh = mesh;
            this._renderingMesh = renderingMesh || mesh;
            mesh.subMeshes.push(this);
            this._id = mesh.subMeshes.length - 1;
            if (createBoundingBox) {
                this.refreshBoundingInfo();
            }
        }
        SubMesh.prototype.getBoundingInfo = function () {
            return this._boundingInfo;
        };
        SubMesh.prototype.getMesh = function () {
            return this._mesh;
        };
        SubMesh.prototype.getRenderingMesh = function () {
            return this._renderingMesh;
        };
        SubMesh.prototype.getMaterial = function () {
            var rootMaterial = this._renderingMesh.material;
            if (rootMaterial && rootMaterial instanceof BABYLON.MultiMaterial) {
                var multiMaterial = rootMaterial;
                return multiMaterial.getSubMaterial(this.materialIndex);
            }
            if (!rootMaterial) {
                return this._mesh.getScene().defaultMaterial;
            }
            return rootMaterial;
        };
        SubMesh.prototype.refreshBoundingInfo = function () {
            var data = this._renderingMesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            if (!data) {
                this._boundingInfo = this._mesh._boundingInfo;
                return;
            }
            var indices = this._renderingMesh.getIndices();
            var extend;
            if (this.indexStart === 0 && this.indexCount === indices.length) {
                extend = BABYLON.Tools.ExtractMinAndMax(data, this.verticesStart, this.verticesCount);
            } else {
                extend = BABYLON.Tools.ExtractMinAndMaxIndexed(data, indices, this.indexStart, this.indexCount);
            }
            this._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
        };
        SubMesh.prototype._checkCollision = function (collider) {
            return this._boundingInfo._checkCollision(collider);
        };
        SubMesh.prototype.updateBoundingInfo = function (world) {
            if (!this._boundingInfo) {
                this.refreshBoundingInfo();
            }
            this._boundingInfo._update(world);
        };
        SubMesh.prototype.isInFrustum = function (frustumPlanes) {
            return this._boundingInfo.isInFrustum(frustumPlanes);
        };
        SubMesh.prototype.render = function () {
            this._renderingMesh.render(this);
        };
        SubMesh.prototype.getLinesIndexBuffer = function (indices, engine) {
            if (!this._linesIndexBuffer) {
                var linesIndices = [];
                for (var index = this.indexStart; index < this.indexStart + this.indexCount; index += 3) {
                    linesIndices.push(indices[index], indices[index + 1], indices[index + 1], indices[index + 2], indices[index + 2], indices[index]);
                }
                this._linesIndexBuffer = engine.createIndexBuffer(linesIndices);
                this.linesIndexCount = linesIndices.length;
            }
            return this._linesIndexBuffer;
        };
        SubMesh.prototype.canIntersects = function (ray) {
            return ray.intersectsBox(this._boundingInfo.boundingBox);
        };
        SubMesh.prototype.intersects = function (ray, positions, indices, fastCheck) {
            var intersectInfo = null;
            for (var index = this.indexStart; index < this.indexStart + this.indexCount; index += 3) {
                var p0 = positions[indices[index]];
                var p1 = positions[indices[index + 1]];
                var p2 = positions[indices[index + 2]];
                var currentIntersectInfo = ray.intersectsTriangle(p0, p1, p2);
                if (currentIntersectInfo) {
                    if (fastCheck || !intersectInfo || currentIntersectInfo.distance < intersectInfo.distance) {
                        intersectInfo = currentIntersectInfo;
                        intersectInfo.faceId = index / 3;
                        if (fastCheck) {
                            break;
                        }
                    }
                }
            }
            return intersectInfo;
        };
        SubMesh.prototype.clone = function (newMesh, newRenderingMesh) {
            var result = new SubMesh(this.materialIndex, this.verticesStart, this.verticesCount, this.indexStart, this.indexCount, newMesh, newRenderingMesh, false);
            result._boundingInfo = new BABYLON.BoundingInfo(this._boundingInfo.minimum, this._boundingInfo.maximum);
            return result;
        };
        SubMesh.prototype.dispose = function () {
            if (this._linesIndexBuffer) {
                this._mesh.getScene().getEngine()._releaseBuffer(this._linesIndexBuffer);
                this._linesIndexBuffer = null;
            }
            var index = this._mesh.subMeshes.indexOf(this);
            this._mesh.subMeshes.splice(index, 1);
        };
        SubMesh.CreateFromIndices = function (materialIndex, startIndex, indexCount, mesh, renderingMesh) {
            var minVertexIndex = Number.MAX_VALUE;
            var maxVertexIndex = -Number.MAX_VALUE;
            renderingMesh = renderingMesh || mesh;
            var indices = renderingMesh.getIndices();
            for (var index = startIndex; index < startIndex + indexCount; index++) {
                var vertexIndex = indices[index];
                if (vertexIndex < minVertexIndex) minVertexIndex = vertexIndex;
                if (vertexIndex > maxVertexIndex) maxVertexIndex = vertexIndex;
            }
            return new BABYLON.SubMesh(materialIndex, minVertexIndex, maxVertexIndex - minVertexIndex + 1, startIndex, indexCount, mesh, renderingMesh);
        };
        return SubMesh;
    })();
    BABYLON.SubMesh = SubMesh;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var BaseTexture = (function () {
        function BaseTexture(scene) {
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NONE;
            this.hasAlpha = false;
            this.getAlphaFromRGB = false;
            this.level = 1;
            this.isCube = false;
            this.isRenderTarget = false;
            this.animations = new Array();
            this.coordinatesIndex = 0;
            this.coordinatesMode = BABYLON.Texture.EXPLICIT_MODE;
            this.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE;
            this.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE;
            this.anisotropicFilteringLevel = 4;
            this._scene = scene;
            this._scene.textures.push(this);
        }
        BaseTexture.prototype.getScene = function () {
            return this._scene;
        };
        BaseTexture.prototype.getTextureMatrix = function () {
            return null;
        };
        BaseTexture.prototype.getReflectionTextureMatrix = function () {
            return null;
        };
        BaseTexture.prototype.getInternalTexture = function () {
            return this._texture;
        };
        BaseTexture.prototype.isReady = function () {
            if (this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_NOTLOADED) {
                return true;
            }
            if (this._texture) {
                return this._texture.isReady;
            }
            return false;
        };
        BaseTexture.prototype.getSize = function () {
            if (this._texture._width) {
                return {
                    width: this._texture._width,
                    height: this._texture._height
                };
            }
            if (this._texture._size) {
                return {
                    width: this._texture._size,
                    height: this._texture._size
                };
            }
            return {
                width: 0,
                height: 0
            };
        };
        BaseTexture.prototype.getBaseSize = function () {
            if (!this.isReady()) return {
                width: 0,
                height: 0
            };
            if (this._texture._size) {
                return {
                    width: this._texture._size,
                    height: this._texture._size
                };
            }
            return {
                width: this._texture._baseWidth,
                height: this._texture._baseHeight
            };
        };
        BaseTexture.prototype._getFromCache = function (url, noMipmap) {
            var texturesCache = this._scene.getEngine().getLoadedTexturesCache();
            for (var index = 0; index < texturesCache.length; index++) {
                var texturesCacheEntry = texturesCache[index];
                if (texturesCacheEntry.url === url && texturesCacheEntry.noMipmap === noMipmap) {
                    texturesCacheEntry.references++;
                    return texturesCacheEntry;
                }
            }
            return null;
        };
        BaseTexture.prototype.delayLoad = function () {};
        BaseTexture.prototype.releaseInternalTexture = function () {
            if (!this._texture) {
                return;
            }
            var texturesCache = this._scene.getEngine().getLoadedTexturesCache();
            this._texture.references--;
            if (this._texture.references == 0) {
                var index = texturesCache.indexOf(this._texture);
                texturesCache.splice(index, 1);
                this._scene.getEngine()._releaseTexture(this._texture);
                delete this._texture;
            }
        };
        BaseTexture.prototype.clone = function () {
            return null;
        };
        BaseTexture.prototype.dispose = function () {
            var index = this._scene.textures.indexOf(this);
            if (index >= 0) {
                this._scene.textures.splice(index, 1);
            }
            if (this._texture === undefined) {
                return;
            }
            this.releaseInternalTexture();
            if (this.onDispose) {
                this.onDispose();
            }
        };
        return BaseTexture;
    })();
    BABYLON.BaseTexture = BaseTexture;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var RenderingGroup = (function () {
        function RenderingGroup(index, scene) {
            this.index = index;
            this._opaqueSubMeshes = new BABYLON.SmartArray(256);
            this._transparentSubMeshes = new BABYLON.SmartArray(256);
            this._alphaTestSubMeshes = new BABYLON.SmartArray(256);
            this._scene = scene;
        }
        RenderingGroup.prototype.render = function (customRenderFunction, beforeTransparents) {
            if (customRenderFunction) {
                customRenderFunction(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, beforeTransparents);
                return true;
            }
            if (this._opaqueSubMeshes.length === 0 && this._alphaTestSubMeshes.length === 0 && this._transparentSubMeshes.length === 0) {
                return false;
            }
            var engine = this._scene.getEngine();
            var subIndex;
            var submesh;
            for (subIndex = 0; subIndex < this._opaqueSubMeshes.length; subIndex++) {
                submesh = this._opaqueSubMeshes.data[subIndex];
                this._activeVertices += submesh.verticesCount;
                submesh.render();
            }
            engine.setAlphaTesting(true);
            for (subIndex = 0; subIndex < this._alphaTestSubMeshes.length; subIndex++) {
                submesh = this._alphaTestSubMeshes.data[subIndex];
                this._activeVertices += submesh.verticesCount;
                submesh.render();
            }
            engine.setAlphaTesting(false);
            if (beforeTransparents) {
                beforeTransparents();
            }
            if (this._transparentSubMeshes.length) {
                for (subIndex = 0; subIndex < this._transparentSubMeshes.length; subIndex++) {
                    submesh = this._transparentSubMeshes.data[subIndex];
                    submesh._distanceToCamera = submesh.getBoundingInfo().boundingSphere.centerWorld.subtract(this._scene.activeCamera.position).length();
                }
                var sortedArray = this._transparentSubMeshes.data.slice(0, this._transparentSubMeshes.length);
                sortedArray.sort(function (a, b) {
                    if (a._distanceToCamera < b._distanceToCamera) {
                        return 1;
                    }
                    if (a._distanceToCamera > b._distanceToCamera) {
                        return -1;
                    }
                    return 0;
                });
                engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);
                for (subIndex = 0; subIndex < sortedArray.length; subIndex++) {
                    submesh = sortedArray[subIndex];
                    this._activeVertices += submesh.verticesCount;
                    submesh.render();
                }
                engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
            }
            return true;
        };
        RenderingGroup.prototype.prepare = function () {
            this._opaqueSubMeshes.reset();
            this._transparentSubMeshes.reset();
            this._alphaTestSubMeshes.reset();
        };
        RenderingGroup.prototype.dispatch = function (subMesh) {
            var material = subMesh.getMaterial();
            var mesh = subMesh.getMesh();
            if (material.needAlphaBlending() || mesh.visibility < 1.0) {
                if (material.alpha > 0 || mesh.visibility < 1.0) {
                    this._transparentSubMeshes.push(subMesh);
                }
            } else if (material.needAlphaTesting()) {
                this._alphaTestSubMeshes.push(subMesh);
            } else {
                this._opaqueSubMeshes.push(subMesh);
            }
        };
        return RenderingGroup;
    })();
    BABYLON.RenderingGroup = RenderingGroup;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var RenderingManager = (function () {
        function RenderingManager(scene) {
            this._renderingGroups = new Array();
            this._scene = scene;
        }
        RenderingManager.prototype._renderParticles = function (index, activeMeshes) {
            if (this._scene._activeParticleSystems.length === 0) {
                return;
            }
            var beforeParticlesDate = new Date().getTime();
            for (var particleIndex = 0; particleIndex < this._scene._activeParticleSystems.length; particleIndex++) {
                var particleSystem = this._scene._activeParticleSystems.data[particleIndex];
                if (particleSystem.renderingGroupId !== index) {
                    continue;
                }
                this._clearDepthBuffer();
                if (!particleSystem.emitter.position || !activeMeshes || activeMeshes.indexOf(particleSystem.emitter) !== -1) {
                    this._scene._activeParticles += particleSystem.render();
                }
            }
            this._scene._particlesDuration += new Date().getTime() - beforeParticlesDate;
        };
        RenderingManager.prototype._renderSprites = function (index) {
            if (this._scene.spriteManagers.length === 0) {
                return;
            }
            var beforeSpritessDate = new Date().getTime();
            for (var id = 0; id < this._scene.spriteManagers.length; id++) {
                var spriteManager = this._scene.spriteManagers[id];
                if (spriteManager.renderingGroupId === index) {
                    this._clearDepthBuffer();
                    spriteManager.render();
                }
            }
            this._scene._spritesDuration += new Date().getTime() - beforeSpritessDate;
        };
        RenderingManager.prototype._clearDepthBuffer = function () {
            if (this._depthBufferAlreadyCleaned) {
                return;
            }
            this._scene.getEngine().clear(0, false, true);
            this._depthBufferAlreadyCleaned = true;
        };
        RenderingManager.prototype.render = function (customRenderFunction, activeMeshes, renderParticles, renderSprites) {
            var _this = this;
            for (var index = 0; index < BABYLON.RenderingManager.MAX_RENDERINGGROUPS; index++) {
                this._depthBufferAlreadyCleaned = false;
                var renderingGroup = this._renderingGroups[index];
                if (renderingGroup) {
                    this._clearDepthBuffer();
                    if (!renderingGroup.render(customRenderFunction, function () {
                        if (renderSprites) {
                            _this._renderSprites(index);
                        }
                    })) {
                        this._renderingGroups.splice(index, 1);
                    }
                } else if (renderSprites) {
                    this._renderSprites(index);
                }
                if (renderParticles) {
                    this._renderParticles(index, activeMeshes);
                }
            }
        };
        RenderingManager.prototype.reset = function () {
            for (var index in this._renderingGroups) {
                var renderingGroup = this._renderingGroups[index];
                renderingGroup.prepare();
            }
        };
        RenderingManager.prototype.dispatch = function (subMesh) {
            var mesh = subMesh.getMesh();
            var renderingGroupId = mesh.renderingGroupId || 0;
            if (!this._renderingGroups[renderingGroupId]) {
                this._renderingGroups[renderingGroupId] = new BABYLON.RenderingGroup(renderingGroupId, this._scene);
            }
            this._renderingGroups[renderingGroupId].dispatch(subMesh);
        };
        RenderingManager.MAX_RENDERINGGROUPS = 4;
        return RenderingManager;
    })();
    BABYLON.RenderingManager = RenderingManager;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Texture = (function (_super) {
        __extends(Texture, _super);

        function Texture(url, scene, noMipmap, invertY, samplingMode) {
            if (typeof samplingMode === "undefined") {
                samplingMode = Texture.TRILINEAR_SAMPLINGMODE;
            }
            _super.call(this, scene);
            this.uOffset = 0;
            this.vOffset = 0;
            this.uScale = 1.0;
            this.vScale = 1.0;
            this.uAng = 0;
            this.vAng = 0;
            this.wAng = 0;
            this.name = url;
            this.url = url;
            this._noMipmap = noMipmap;
            this._invertY = invertY;
            this._samplingMode = samplingMode;
            if (!url) {
                return;
            }
            this._texture = this._getFromCache(url, noMipmap);
            if (!this._texture) {
                if (!scene.useDelayedTextureLoading) {
                    this._texture = scene.getEngine().createTexture(url, noMipmap, invertY, scene, this._samplingMode);
                } else {
                    this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;
                }
            }
        }
        Texture.prototype.delayLoad = function () {
            if (this.delayLoadState != BABYLON.Engine.DELAYLOADSTATE_NOTLOADED) {
                return;
            }
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADED;
            this._texture = this._getFromCache(this.url, this._noMipmap);
            if (!this._texture) {
                this._texture = this.getScene().getEngine().createTexture(this.url, this._noMipmap, this._invertY, this.getScene(), this._samplingMode);
            }
        };
        Texture.prototype._prepareRowForTextureGeneration = function (x, y, z, t) {
            x -= this.uOffset + 0.5;
            y -= this.vOffset + 0.5;
            z -= 0.5;
            BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(x, y, z, this._rowGenerationMatrix, t);
            t.x *= this.uScale;
            t.y *= this.vScale;
            t.x += 0.5;
            t.y += 0.5;
            t.z += 0.5;
        };
        Texture.prototype.getTextureMatrix = function () {
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.uAng === this._cachedUAng && this.vAng === this._cachedVAng && this.wAng === this._cachedWAng) {
                return this._cachedTextureMatrix;
            }
            this._cachedUOffset = this.uOffset;
            this._cachedVOffset = this.vOffset;
            this._cachedUScale = this.uScale;
            this._cachedVScale = this.vScale;
            this._cachedUAng = this.uAng;
            this._cachedVAng = this.vAng;
            this._cachedWAng = this.wAng;
            if (!this._cachedTextureMatrix) {
                this._cachedTextureMatrix = BABYLON.Matrix.Zero();
                this._rowGenerationMatrix = new BABYLON.Matrix();
                this._t0 = BABYLON.Vector3.Zero();
                this._t1 = BABYLON.Vector3.Zero();
                this._t2 = BABYLON.Vector3.Zero();
            }
            BABYLON.Matrix.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix);
            this._prepareRowForTextureGeneration(0, 0, 0, this._t0);
            this._prepareRowForTextureGeneration(1.0, 0, 0, this._t1);
            this._prepareRowForTextureGeneration(0, 1.0, 0, this._t2);
            this._t1.subtractInPlace(this._t0);
            this._t2.subtractInPlace(this._t0);
            BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);
            this._cachedTextureMatrix.m[0] = this._t1.x;
            this._cachedTextureMatrix.m[1] = this._t1.y;
            this._cachedTextureMatrix.m[2] = this._t1.z;
            this._cachedTextureMatrix.m[4] = this._t2.x;
            this._cachedTextureMatrix.m[5] = this._t2.y;
            this._cachedTextureMatrix.m[6] = this._t2.z;
            this._cachedTextureMatrix.m[8] = this._t0.x;
            this._cachedTextureMatrix.m[9] = this._t0.y;
            this._cachedTextureMatrix.m[10] = this._t0.z;
            return this._cachedTextureMatrix;
        };
        Texture.prototype.getReflectionTextureMatrix = function () {
            if (this.uOffset === this._cachedUOffset && this.vOffset === this._cachedVOffset && this.uScale === this._cachedUScale && this.vScale === this._cachedVScale && this.coordinatesMode === this._cachedCoordinatesMode) {
                return this._cachedTextureMatrix;
            }
            if (!this._cachedTextureMatrix) {
                this._cachedTextureMatrix = BABYLON.Matrix.Zero();
                this._projectionModeMatrix = BABYLON.Matrix.Zero();
            }
            switch (this.coordinatesMode) {
            case BABYLON.Texture.SPHERICAL_MODE:
                BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);
                this._cachedTextureMatrix[0] = -0.5 * this.uScale;
                this._cachedTextureMatrix[5] = -0.5 * this.vScale;
                this._cachedTextureMatrix[12] = 0.5 + this.uOffset;
                this._cachedTextureMatrix[13] = 0.5 + this.vOffset;
                break;
            case BABYLON.Texture.PLANAR_MODE:
                BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);
                this._cachedTextureMatrix[0] = this.uScale;
                this._cachedTextureMatrix[5] = this.vScale;
                this._cachedTextureMatrix[12] = this.uOffset;
                this._cachedTextureMatrix[13] = this.vOffset;
                break;
            case BABYLON.Texture.PROJECTION_MODE:
                BABYLON.Matrix.IdentityToRef(this._projectionModeMatrix);
                this._projectionModeMatrix.m[0] = 0.5;
                this._projectionModeMatrix.m[5] = -0.5;
                this._projectionModeMatrix.m[10] = 0.0;
                this._projectionModeMatrix.m[12] = 0.5;
                this._projectionModeMatrix.m[13] = 0.5;
                this._projectionModeMatrix.m[14] = 1.0;
                this._projectionModeMatrix.m[15] = 1.0;
                this.getScene().getProjectionMatrix().multiplyToRef(this._projectionModeMatrix, this._cachedTextureMatrix);
                break;
            default:
                BABYLON.Matrix.IdentityToRef(this._cachedTextureMatrix);
                break;
            }
            return this._cachedTextureMatrix;
        };
        Texture.prototype.clone = function () {
            var newTexture = new BABYLON.Texture(this._texture.url, this.getScene(), this._noMipmap, this._invertY);
            newTexture.hasAlpha = this.hasAlpha;
            newTexture.level = this.level;
            newTexture.wrapU = this.wrapU;
            newTexture.wrapV = this.wrapV;
            newTexture.coordinatesIndex = this.coordinatesIndex;
            newTexture.coordinatesMode = this.coordinatesMode;
            newTexture.uOffset = this.uOffset;
            newTexture.vOffset = this.vOffset;
            newTexture.uScale = this.uScale;
            newTexture.vScale = this.vScale;
            newTexture.uAng = this.uAng;
            newTexture.vAng = this.vAng;
            newTexture.wAng = this.wAng;
            return newTexture;
        };
        Texture.NEAREST_SAMPLINGMODE = 1;
        Texture.BILINEAR_SAMPLINGMODE = 2;
        Texture.TRILINEAR_SAMPLINGMODE = 3;
        Texture.EXPLICIT_MODE = 0;
        Texture.SPHERICAL_MODE = 1;
        Texture.PLANAR_MODE = 2;
        Texture.CUBIC_MODE = 3;
        Texture.PROJECTION_MODE = 4;
        Texture.SKYBOX_MODE = 5;
        Texture.CLAMP_ADDRESSMODE = 0;
        Texture.WRAP_ADDRESSMODE = 1;
        Texture.MIRROR_ADDRESSMODE = 2;
        return Texture;
    })(BABYLON.BaseTexture);
    BABYLON.Texture = Texture;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var CubeTexture = (function (_super) {
        __extends(CubeTexture, _super);

        function CubeTexture(rootUrl, scene, extensions, noMipmap) {
            _super.call(this, scene);
            this.coordinatesMode = BABYLON.Texture.CUBIC_MODE;
            this.name = rootUrl;
            this.url = rootUrl;
            this._noMipmap = noMipmap;
            this.hasAlpha = false;
            this._texture = this._getFromCache(rootUrl, noMipmap);
            if (!extensions) {
                extensions = ["_px.jpg", "_py.jpg", "_pz.jpg", "_nx.jpg", "_ny.jpg", "_nz.jpg"];
            }
            this._extensions = extensions;
            if (!this._texture) {
                if (!scene.useDelayedTextureLoading) {
                    this._texture = scene.getEngine().createCubeTexture(rootUrl, scene, extensions, noMipmap);
                } else {
                    this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;
                }
            }
            this.isCube = true;
            this._textureMatrix = BABYLON.Matrix.Identity();
        }
        CubeTexture.prototype.clone = function () {
            var newTexture = new BABYLON.CubeTexture(this.url, this.getScene(), this._extensions, this._noMipmap);
            newTexture.level = this.level;
            newTexture.wrapU = this.wrapU;
            newTexture.wrapV = this.wrapV;
            newTexture.coordinatesIndex = this.coordinatesIndex;
            newTexture.coordinatesMode = this.coordinatesMode;
            return newTexture;
        };
        CubeTexture.prototype.delayLoad = function () {
            if (this.delayLoadState != BABYLON.Engine.DELAYLOADSTATE_NOTLOADED) {
                return;
            }
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADED;
            this._texture = this._getFromCache(this.url, this._noMipmap);
            if (!this._texture) {
                this._texture = this.getScene().getEngine().createCubeTexture(this.url, this.getScene(), this._extensions);
            }
        };
        CubeTexture.prototype.getReflectionTextureMatrix = function () {
            return this._textureMatrix;
        };
        return CubeTexture;
    })(BABYLON.BaseTexture);
    BABYLON.CubeTexture = CubeTexture;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var RenderTargetTexture = (function (_super) {
        __extends(RenderTargetTexture, _super);

        function RenderTargetTexture(name, size, scene, generateMipMaps, doNotChangeAspectRatio) {
            if (typeof doNotChangeAspectRatio === "undefined") {
                doNotChangeAspectRatio = true;
            }
            _super.call(this, null, scene, !generateMipMaps);
            this.renderList = new Array();
            this.renderParticles = true;
            this.renderSprites = false;
            this.coordinatesMode = BABYLON.Texture.PROJECTION_MODE;
            this._currentRefreshId = -1;
            this._refreshRate = 1;
            this.name = name;
            this.isRenderTarget = true;
            this._size = size;
            this._generateMipMaps = generateMipMaps;
            this._doNotChangeAspectRatio = doNotChangeAspectRatio;
            this._texture = scene.getEngine().createRenderTargetTexture(size, generateMipMaps);
            this._renderingManager = new BABYLON.RenderingManager(scene);
        }
        RenderTargetTexture.prototype.resetRefreshCounter = function () {
            this._currentRefreshId = -1;
        };
        Object.defineProperty(RenderTargetTexture.prototype, "refreshRate", {
            get: function () {
                return this._refreshRate;
            },
            set: function (value) {
                this._refreshRate = value;
                this.resetRefreshCounter();
            },
            enumerable: true,
            configurable: true
        });
        RenderTargetTexture.prototype._shouldRender = function () {
            if (this._currentRefreshId === -1) {
                this._currentRefreshId = 1;
                return true;
            }
            if (this.refreshRate == this._currentRefreshId) {
                this._currentRefreshId = 1;
                return true;
            }
            this._currentRefreshId++;
            return false;
        };
        RenderTargetTexture.prototype.getRenderSize = function () {
            return this._size;
        };
        RenderTargetTexture.prototype.resize = function (size, generateMipMaps) {
            this.releaseInternalTexture();
            this._texture = this.getScene().getEngine().createRenderTargetTexture(size, generateMipMaps);
        };
        RenderTargetTexture.prototype.render = function (useCameraPostProcess) {
            var scene = this.getScene();
            var engine = scene.getEngine();
            if (this._waitingRenderList) {
                this.renderList = [];
                for (var index = 0; index < this._waitingRenderList.length; index++) {
                    var id = this._waitingRenderList[index];
                    this.renderList.push(scene.getMeshByID(id));
                }
                delete this._waitingRenderList;
            }
            if (!this.renderList || this.renderList.length == 0) {
                return;
            }
            if (!useCameraPostProcess || !scene.postProcessManager._prepareFrame(this._texture)) {
                engine.bindFramebuffer(this._texture);
            }
            engine.clear(scene.clearColor, true, true);
            this._renderingManager.reset();
            for (var meshIndex = 0; meshIndex < this.renderList.length; meshIndex++) {
                var mesh = this.renderList[meshIndex];
                if (mesh) {
                    if (!mesh.isReady() || (mesh.material && !mesh.material.isReady())) {
                        this.resetRefreshCounter();
                        continue;
                    }
                    if (mesh.isEnabled() && mesh.isVisible && mesh.subMeshes && ((mesh.layerMask & scene.activeCamera.layerMask) != 0)) {
                        mesh._activate(scene.getRenderId());
                        for (var subIndex = 0; subIndex < mesh.subMeshes.length; subIndex++) {
                            var subMesh = mesh.subMeshes[subIndex];
                            scene._activeVertices += subMesh.verticesCount;
                            this._renderingManager.dispatch(subMesh);
                        }
                    }
                }
            }
            if (!this._doNotChangeAspectRatio) {
                scene.updateTransformMatrix(true);
            }
            if (this.onBeforeRender) {
                this.onBeforeRender();
            }
            this._renderingManager.render(this.customRenderFunction, this.renderList, this.renderParticles, this.renderSprites);
            if (useCameraPostProcess) {
                scene.postProcessManager._finalizeFrame(false, this._texture);
            }
            if (this.onAfterRender) {
                this.onAfterRender();
            }
            engine.unBindFramebuffer(this._texture);
            if (!this._doNotChangeAspectRatio) {
                scene.updateTransformMatrix(true);
            }
        };
        RenderTargetTexture.prototype.clone = function () {
            var textureSize = this.getSize();
            var newTexture = new BABYLON.RenderTargetTexture(this.name, textureSize.width, this.getScene(), this._generateMipMaps);
            newTexture.hasAlpha = this.hasAlpha;
            newTexture.level = this.level;
            newTexture.coordinatesMode = this.coordinatesMode;
            newTexture.renderList = this.renderList.slice(0);
            return newTexture;
        };
        return RenderTargetTexture;
    })(BABYLON.Texture);
    BABYLON.RenderTargetTexture = RenderTargetTexture;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var MirrorTexture = (function (_super) {
        __extends(MirrorTexture, _super);

        function MirrorTexture(name, size, scene, generateMipMaps) {
            var _this = this;
            _super.call(this, name, size, scene, generateMipMaps, true);
            this.mirrorPlane = new BABYLON.Plane(0, 1, 0, 1);
            this._transformMatrix = BABYLON.Matrix.Zero();
            this._mirrorMatrix = BABYLON.Matrix.Zero();
            this.onBeforeRender = function () {
                BABYLON.Matrix.ReflectionToRef(_this.mirrorPlane, _this._mirrorMatrix);
                _this._savedViewMatrix = scene.getViewMatrix();
                _this._mirrorMatrix.multiplyToRef(_this._savedViewMatrix, _this._transformMatrix);
                scene.setTransformMatrix(_this._transformMatrix, scene.getProjectionMatrix());
                scene.clipPlane = _this.mirrorPlane;
                scene.getEngine().cullBackFaces = false;
            };
            this.onAfterRender = function () {
                scene.setTransformMatrix(_this._savedViewMatrix, scene.getProjectionMatrix());
                scene.getEngine().cullBackFaces = true;
                delete scene.clipPlane;
            };
        }
        MirrorTexture.prototype.clone = function () {
            var textureSize = this.getSize();
            var newTexture = new BABYLON.MirrorTexture(this.name, textureSize.width, this.getScene(), this._generateMipMaps);
            newTexture.hasAlpha = this.hasAlpha;
            newTexture.level = this.level;
            newTexture.mirrorPlane = this.mirrorPlane.clone();
            newTexture.renderList = this.renderList.slice(0);
            return newTexture;
        };
        return MirrorTexture;
    })(BABYLON.RenderTargetTexture);
    BABYLON.MirrorTexture = MirrorTexture;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var DynamicTexture = (function (_super) {
        __extends(DynamicTexture, _super);

        function DynamicTexture(name, options, scene, generateMipMaps, samplingMode) {
            if (typeof samplingMode === "undefined") {
                samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
            }
            _super.call(this, null, scene, !generateMipMaps);
            this.name = name;
            this.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this._generateMipMaps = generateMipMaps;
            if (options.getContext) {
                this._canvas = options;
                this._texture = scene.getEngine().createDynamicTexture(options.width, options.height, generateMipMaps, samplingMode);
            } else {
                this._canvas = document.createElement("canvas");
                if (options.width) {
                    this._texture = scene.getEngine().createDynamicTexture(options.width, options.height, generateMipMaps, samplingMode);
                } else {
                    this._texture = scene.getEngine().createDynamicTexture(options, options, generateMipMaps, samplingMode);
                }
            }
            var textureSize = this.getSize();
            this._canvas.width = textureSize.width;
            this._canvas.height = textureSize.height;
            this._context = this._canvas.getContext("2d");
        }
        DynamicTexture.prototype.getContext = function () {
            return this._context;
        };
        DynamicTexture.prototype.update = function (invertY) {
            this.getScene().getEngine().updateDynamicTexture(this._texture, this._canvas, invertY === undefined ? true : invertY);
        };
        DynamicTexture.prototype.drawText = function (text, x, y, font, color, clearColor, invertY) {
            var size = this.getSize();
            if (clearColor) {
                this._context.fillStyle = clearColor;
                this._context.fillRect(0, 0, size.width, size.height);
            }
            this._context.font = font;
            if (x === null) {
                var textSize = this._context.measureText(text);
                x = (size.width - textSize.width) / 2;
            }
            this._context.fillStyle = color;
            this._context.fillText(text, x, y);
            this.update(invertY);
        };
        DynamicTexture.prototype.clone = function () {
            var textureSize = this.getSize();
            var newTexture = new BABYLON.DynamicTexture(this.name, textureSize.width, this.getScene(), this._generateMipMaps);
            newTexture.hasAlpha = this.hasAlpha;
            newTexture.level = this.level;
            newTexture.wrapU = this.wrapU;
            newTexture.wrapV = this.wrapV;
            return newTexture;
        };
        return DynamicTexture;
    })(BABYLON.Texture);
    BABYLON.DynamicTexture = DynamicTexture;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var VideoTexture = (function (_super) {
        __extends(VideoTexture, _super);

        function VideoTexture(name, urls, size, scene, generateMipMaps, invertY, samplingMode) {
            if (typeof samplingMode === "undefined") {
                samplingMode = BABYLON.Texture.TRILINEAR_SAMPLINGMODE;
            }
            var _this = this;
            _super.call(this, null, scene, !generateMipMaps, invertY);
            this._autoLaunch = true;
            this.name = name;
            this.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE;
            this.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE;
            var requiredWidth = size.width || size;
            var requiredHeight = size.height || size;
            this._texture = scene.getEngine().createDynamicTexture(requiredWidth, requiredHeight, generateMipMaps, samplingMode);
            var textureSize = this.getSize();
            this.video = document.createElement("video");
            this.video.width = textureSize.width;
            this.video.height = textureSize.height;
            this.video.autoplay = false;
            this.video.loop = true;
            this.video.addEventListener("canplaythrough", function () {
                if (_this._texture) {
                    _this._texture.isReady = true;
                }
            });
            urls.forEach(function (url) {
                var source = document.createElement("source");
                source.src = url;
                _this.video.appendChild(source);
            });
            this._lastUpdate = new Date().getTime();
        }
        VideoTexture.prototype.update = function () {
            if (this._autoLaunch) {
                this._autoLaunch = false;
                this.video.play();
            }
            var now = new Date().getTime();
            if (now - this._lastUpdate < 15) {
                return false;
            }
            this._lastUpdate = now;
            this.getScene().getEngine().updateVideoTexture(this._texture, this.video, this._invertY);
            return true;
        };
        return VideoTexture;
    })(BABYLON.Texture);
    BABYLON.VideoTexture = VideoTexture;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Effect = (function () {
        function Effect(baseName, attributesNames, uniformsNames, samplers, engine, defines, optionalDefines, onCompiled, onError) {
            var _this = this;
            this._isReady = false;
            this._compilationError = "";
            this._valueCache = [];
            this._engine = engine;
            this.name = baseName;
            this.defines = defines;
            this._uniformsNames = uniformsNames.concat(samplers);
            this._samplers = samplers;
            this._attributesNames = attributesNames;
            this.onError = onError;
            this.onCompiled = onCompiled;
            var vertexSource;
            var fragmentSource;
            if (baseName.vertexElement) {
                vertexSource = document.getElementById(baseName.vertexElement);
            } else {
                vertexSource = baseName.vertex || baseName;
            }
            if (baseName.fragmentElement) {
                fragmentSource = document.getElementById(baseName.fragmentElement);
            } else {
                fragmentSource = baseName.fragment || baseName;
            }
            this._loadVertexShader(vertexSource, function (vertexCode) {
                _this._loadFragmentShader(fragmentSource, function (fragmentCode) {
                    _this._prepareEffect(vertexCode, fragmentCode, attributesNames, defines, optionalDefines);
                });
            });
        }
        Effect.prototype.isReady = function () {
            return this._isReady;
        };
        Effect.prototype.getProgram = function () {
            return this._program;
        };
        Effect.prototype.getAttributesNames = function () {
            return this._attributesNames;
        };
        Effect.prototype.getAttributeLocation = function (index) {
            return this._attributes[index];
        };
        Effect.prototype.getAttributeLocationByName = function (name) {
            var index = this._attributesNames.indexOf(name);
            return this._attributes[index];
        };
        Effect.prototype.getAttributesCount = function () {
            return this._attributes.length;
        };
        Effect.prototype.getUniformIndex = function (uniformName) {
            return this._uniformsNames.indexOf(uniformName);
        };
        Effect.prototype.getUniform = function (uniformName) {
            return this._uniforms[this._uniformsNames.indexOf(uniformName)];
        };
        Effect.prototype.getSamplers = function () {
            return this._samplers;
        };
        Effect.prototype.getCompilationError = function () {
            return this._compilationError;
        };
        Effect.prototype._loadVertexShader = function (vertex, callback) {
            if (vertex instanceof HTMLElement) {
                var vertexCode = BABYLON.Tools.GetDOMTextContent(vertex);
                callback(vertexCode);
                return;
            }
            if (BABYLON.Effect.ShadersStore[vertex + "VertexShader"]) {
                callback(BABYLON.Effect.ShadersStore[vertex + "VertexShader"]);
                return;
            }
            var vertexShaderUrl;
            if (vertex[0] === ".") {
                vertexShaderUrl = vertex;
            } else {
                vertexShaderUrl = BABYLON.Engine.ShadersRepository + vertex;
            }
            BABYLON.Tools.LoadFile(vertexShaderUrl + ".vertex.fx", callback);
        };
        Effect.prototype._loadFragmentShader = function (fragment, callback) {
            if (fragment instanceof HTMLElement) {
                var fragmentCode = BABYLON.Tools.GetDOMTextContent(fragment);
                callback(fragmentCode);
                return;
            }
            if (BABYLON.Effect.ShadersStore[fragment + "PixelShader"]) {
                callback(BABYLON.Effect.ShadersStore[fragment + "PixelShader"]);
                return;
            }
            var fragmentShaderUrl;
            if (fragment[0] === ".") {
                fragmentShaderUrl = fragment;
            } else {
                fragmentShaderUrl = BABYLON.Engine.ShadersRepository + fragment;
            }
            BABYLON.Tools.LoadFile(fragmentShaderUrl + ".fragment.fx", callback);
        };
        Effect.prototype._prepareEffect = function (vertexSourceCode, fragmentSourceCode, attributesNames, defines, optionalDefines, useFallback) {
            try {
                var engine = this._engine;
                this._program = engine.createShaderProgram(vertexSourceCode, fragmentSourceCode, defines);
                this._uniforms = engine.getUniforms(this._program, this._uniformsNames);
                this._attributes = engine.getAttributes(this._program, attributesNames);
                for (var index = 0; index < this._samplers.length; index++) {
                    var sampler = this.getUniform(this._samplers[index]);
                    if (sampler == null) {
                        this._samplers.splice(index, 1);
                        index--;
                    }
                }
                engine.bindSamplers(this);
                this._isReady = true;
                if (this.onCompiled) {
                    this.onCompiled(this);
                }
            } catch (e) {
                if (!useFallback && optionalDefines) {
                    for (index = 0; index < optionalDefines.length; index++) {
                        defines = defines.replace(optionalDefines[index], "");
                    }
                    this._prepareEffect(vertexSourceCode, fragmentSourceCode, attributesNames, defines, optionalDefines, true);
                } else {
                    BABYLON.Tools.Error("Unable to compile effect: " + this.name);
                    BABYLON.Tools.Error("Defines: " + defines);
                    BABYLON.Tools.Error("Optional defines: " + optionalDefines);
                    BABYLON.Tools.Error("Error: " + e.message);
                    this._compilationError = e.message;
                    if (this.onError) {
                        this.onError(this, this._compilationError);
                    }
                }
            }
        };
        Effect.prototype._bindTexture = function (channel, texture) {
            this._engine._bindTexture(this._samplers.indexOf(channel), texture);
        };
        Effect.prototype.setTexture = function (channel, texture) {
            this._engine.setTexture(this._samplers.indexOf(channel), texture);
        };
        Effect.prototype.setTextureFromPostProcess = function (channel, postProcess) {
            this._engine.setTextureFromPostProcess(this._samplers.indexOf(channel), postProcess);
        };
        Effect.prototype._cacheFloat2 = function (uniformName, x, y) {
            if (!this._valueCache[uniformName]) {
                this._valueCache[uniformName] = [x, y];
                return;
            }
            this._valueCache[uniformName][0] = x;
            this._valueCache[uniformName][1] = y;
        };
        Effect.prototype._cacheFloat3 = function (uniformName, x, y, z) {
            if (!this._valueCache[uniformName]) {
                this._valueCache[uniformName] = [x, y, z];
                return;
            }
            this._valueCache[uniformName][0] = x;
            this._valueCache[uniformName][1] = y;
            this._valueCache[uniformName][2] = z;
        };
        Effect.prototype._cacheFloat4 = function (uniformName, x, y, z, w) {
            if (!this._valueCache[uniformName]) {
                this._valueCache[uniformName] = [x, y, z, w];
                return;
            }
            this._valueCache[uniformName][0] = x;
            this._valueCache[uniformName][1] = y;
            this._valueCache[uniformName][2] = z;
            this._valueCache[uniformName][3] = w;
        };
        Effect.prototype.setArray = function (uniformName, array) {
            this._engine.setArray(this.getUniform(uniformName), array);
            return this;
        };
        Effect.prototype.setMatrices = function (uniformName, matrices) {
            this._engine.setMatrices(this.getUniform(uniformName), matrices);
            return this;
        };
        Effect.prototype.setMatrix = function (uniformName, matrix) {
            this._engine.setMatrix(this.getUniform(uniformName), matrix);
            return this;
        };
        Effect.prototype.setFloat = function (uniformName, value) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName] === value) return this;
            this._valueCache[uniformName] = value;
            this._engine.setFloat(this.getUniform(uniformName), value);
            return this;
        };
        Effect.prototype.setBool = function (uniformName, bool) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName] === bool) return this;
            this._valueCache[uniformName] = bool;
            this._engine.setBool(this.getUniform(uniformName), bool ? 1 : 0);
            return this;
        };
        Effect.prototype.setVector2 = function (uniformName, vector2) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == vector2.x && this._valueCache[uniformName][1] == vector2.y) return this;
            this._cacheFloat2(uniformName, vector2.x, vector2.y);
            this._engine.setFloat2(this.getUniform(uniformName), vector2.x, vector2.y);
            return this;
        };
        Effect.prototype.setFloat2 = function (uniformName, x, y) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == x && this._valueCache[uniformName][1] == y) return this;
            this._cacheFloat2(uniformName, x, y);
            this._engine.setFloat2(this.getUniform(uniformName), x, y);
            return this;
        };
        Effect.prototype.setVector3 = function (uniformName, vector3) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == vector3.x && this._valueCache[uniformName][1] == vector3.y && this._valueCache[uniformName][2] == vector3.z) return this;
            this._cacheFloat3(uniformName, vector3.x, vector3.y, vector3.z);
            this._engine.setFloat3(this.getUniform(uniformName), vector3.x, vector3.y, vector3.z);
            return this;
        };
        Effect.prototype.setFloat3 = function (uniformName, x, y, z) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == x && this._valueCache[uniformName][1] == y && this._valueCache[uniformName][2] == z) return this;
            this._cacheFloat3(uniformName, x, y, z);
            this._engine.setFloat3(this.getUniform(uniformName), x, y, z);
            return this;
        };
        Effect.prototype.setFloat4 = function (uniformName, x, y, z, w) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == x && this._valueCache[uniformName][1] == y && this._valueCache[uniformName][2] == z && this._valueCache[uniformName][3] == w) return this;
            this._cacheFloat4(uniformName, x, y, z, w);
            this._engine.setFloat4(this.getUniform(uniformName), x, y, z, w);
            return this;
        };
        Effect.prototype.setColor3 = function (uniformName, color3) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == color3.r && this._valueCache[uniformName][1] == color3.g && this._valueCache[uniformName][2] == color3.b) return this;
            this._cacheFloat3(uniformName, color3.r, color3.g, color3.b);
            this._engine.setColor3(this.getUniform(uniformName), color3);
            return this;
        };
        Effect.prototype.setColor4 = function (uniformName, color3, alpha) {
            if (this._valueCache[uniformName] && this._valueCache[uniformName][0] == color3.r && this._valueCache[uniformName][1] == color3.g && this._valueCache[uniformName][2] == color3.b && this._valueCache[uniformName][3] == alpha) return this;
            this._cacheFloat4(uniformName, color3.r, color3.g, color3.b, alpha);
            this._engine.setColor4(this.getUniform(uniformName), color3, alpha);
            return this;
        };
        Effect.ShadersStore = {
            anaglyphPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D leftSampler;\n\nvoid main(void)\n{\n    vec4 leftFrag = texture2D(leftSampler, vUV);\n    leftFrag = vec4(1.0, leftFrag.g, leftFrag.b, 1.0);\n\n	vec4 rightFrag = texture2D(textureSampler, vUV);\n    rightFrag = vec4(rightFrag.r, 1.0, 1.0, 1.0);\n\n    gl_FragColor = vec4(rightFrag.rgb * leftFrag.rgb, 1.0);\n}",
            blackAndWhitePixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nvoid main(void) \n{\n	float luminance = dot(texture2D(textureSampler, vUV).rgb, vec3(0.3, 0.59, 0.11));\n	gl_FragColor = vec4(luminance, luminance, luminance, 1.0);\n}",
            blurPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Parameters\nuniform vec2 screenSize;\nuniform vec2 direction;\nuniform float blurWidth;\n\nvoid main(void)\n{\n	float weights[7];\n	weights[0] = 0.05;\n	weights[1] = 0.1;\n	weights[2] = 0.2;\n	weights[3] = 0.3;\n	weights[4] = 0.2;\n	weights[5] = 0.1;\n	weights[6] = 0.05;\n\n	vec2 texelSize = vec2(1.0 / screenSize.x, 1.0 / screenSize.y);\n	vec2 texelStep = texelSize * direction * blurWidth;\n	vec2 start = vUV - 3.0 * texelStep;\n\n	vec4 baseColor = vec4(0., 0., 0., 0.);\n	vec2 texelOffset = vec2(0., 0.);\n\n	for (int i = 0; i < 7; i++)\n	{\n		baseColor += texture2D(textureSampler, start + texelOffset) * weights[i];\n		texelOffset += texelStep;\n	}\n\n	gl_FragColor = baseColor;\n}",
            colorPixelShader: "precision mediump float;\n\nuniform vec3 color;\n\nvoid main(void) {\n	gl_FragColor = vec4(color, 1.);\n}",
            colorVertexShader: "precision mediump float;\n\n// Attributes\nattribute vec3 position;\n\n// Uniforms\nuniform mat4 worldViewProjection;\n\nvoid main(void) {\n	gl_Position = worldViewProjection * vec4(position, 1.0);\n}",
            convolutionPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nuniform vec2 screenSize;\nuniform float kernel[9];\n\nvoid main(void)\n{\n	vec2 onePixel = vec2(1.0, 1.0) / screenSize;\n	vec4 colorSum =\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, -1)) * kernel[0] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, -1)) * kernel[1] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, -1)) * kernel[2] +\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, 0)) * kernel[3] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, 0)) * kernel[4] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, 0)) * kernel[5] +\n		texture2D(textureSampler, vUV + onePixel * vec2(-1, 1)) * kernel[6] +\n		texture2D(textureSampler, vUV + onePixel * vec2(0, 1)) * kernel[7] +\n		texture2D(textureSampler, vUV + onePixel * vec2(1, 1)) * kernel[8];\n\n	float kernelWeight =\n		kernel[0] +\n		kernel[1] +\n		kernel[2] +\n		kernel[3] +\n		kernel[4] +\n		kernel[5] +\n		kernel[6] +\n		kernel[7] +\n		kernel[8];\n\n	if (kernelWeight <= 0.0) {\n		kernelWeight = 1.0;\n	}\n\n	gl_FragColor = vec4((colorSum / kernelWeight).rgb, 1);\n}",
            defaultPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec4 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\nuniform float darkness0;\n#endif\n#ifdef SPOTLIGHT0\nuniform vec4 vLightDirection0;\n#endif\n#ifdef HEMILIGHT0\nuniform vec3 vLightGround0;\n#endif\n#endif\n\n#ifdef LIGHT1\nuniform vec4 vLightData1;\nuniform vec4 vLightDiffuse1;\nuniform vec3 vLightSpecular1;\n#ifdef SHADOW1\nvarying vec4 vPositionFromLight1;\nuniform sampler2D shadowSampler1;\nuniform float darkness1;\n#endif\n#ifdef SPOTLIGHT1\nuniform vec4 vLightDirection1;\n#endif\n#ifdef HEMILIGHT1\nuniform vec3 vLightGround1;\n#endif\n#endif\n\n#ifdef LIGHT2\nuniform vec4 vLightData2;\nuniform vec4 vLightDiffuse2;\nuniform vec3 vLightSpecular2;\n#ifdef SHADOW2\nvarying vec4 vPositionFromLight2;\nuniform sampler2D shadowSampler2;\nuniform float darkness2;\n#endif\n#ifdef SPOTLIGHT2\nuniform vec4 vLightDirection2;\n#endif\n#ifdef HEMILIGHT2\nuniform vec3 vLightGround2;\n#endif\n#endif\n\n#ifdef LIGHT3\nuniform vec4 vLightData3;\nuniform vec4 vLightDiffuse3;\nuniform vec3 vLightSpecular3;\n#ifdef SHADOW3\nvarying vec4 vPositionFromLight3;\nuniform sampler2D shadowSampler3;\nuniform float darkness3;\n#endif\n#ifdef SPOTLIGHT3\nuniform vec4 vLightDirection3;\n#endif\n#ifdef HEMILIGHT3\nuniform vec3 vLightGround3;\n#endif\n#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Reflection\n#ifdef REFLECTION\nvarying vec3 vPositionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\nuniform mat4 view;\n\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return vPositionUVW;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color)\n{\n	return color.x + (color.y / 255.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler, float darkness)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float shadow = unpack(texture2D(shadowSampler, uv));\n\n	if (depth.z > shadow)\n	{\n		return darkness;\n	}\n	return 1.;\n}\n\nfloat computeShadowWithPCF(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float visibility = 1.;\n\n	vec2 poissonDisk[4];\n	poissonDisk[0] = vec2(-0.94201624, -0.39906216);\n	poissonDisk[1] = vec2(0.94558609, -0.76890725);\n	poissonDisk[2] = vec2(-0.094184101, -0.92938870);\n	poissonDisk[3] = vec2(0.34495938, 0.29387760);\n\n	// Poisson Sampling\n	for (int i = 0; i<4; i++){\n		if (unpack(texture2D(shadowSampler, uv + poissonDisk[i] / 1500.0))  <  depth.z){\n			visibility -= 0.2;\n		}\n	}\n	return visibility;\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t)\n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n\n	float variance = moments.y - (moments.x * moments.x);\n	variance = max(variance, 0.);\n\n	float d = t - moments.x;\n	return variance / (variance + d * d);\n}\n\nfloat computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	vec4 texel = texture2D(shadowSampler, uv);\n\n	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n	return clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);\n}\n#endif\n\n// Bump\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform sampler2D bumpSampler;\n\n// Thanks to http://www.thetenthplanet.de/archives/1180\nmat3 cotangent_frame(vec3 normal, vec3 p, vec2 uv)\n{\n	// get edge vectors of the pixel triangle\n	vec3 dp1 = dFdx(p);\n	vec3 dp2 = dFdy(p);\n	vec2 duv1 = dFdx(uv);\n	vec2 duv2 = dFdy(uv);\n\n	// solve the linear system\n	vec3 dp2perp = cross(dp2, normal);\n	vec3 dp1perp = cross(normal, dp1);\n	vec3 tangent = dp2perp * duv1.x + dp1perp * duv2.x;\n	vec3 binormal = dp2perp * duv1.y + dp1perp * duv2.y;\n\n	// construct a scale-invariant frame \n	float invmax = inversesqrt(max(dot(tangent, tangent), dot(binormal, binormal)));\n	return mat3(tangent * invmax, binormal * invmax, normal);\n}\n\nvec3 perturbNormal(vec3 viewDir)\n{\n	vec3 map = texture2D(bumpSampler, vBumpUV).xyz * vBumpInfos.y;\n	map = map * 255. / 127. - 128. / 127.;\n	mat3 TBN = cotangent_frame(vNormalW, -viewDir, vBumpUV);\n	return normalize(TBN * map);\n}\n#endif\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n#endif\n\n// Light Computing\nstruct lightingInfo\n{\n	vec3 diffuse;\n	vec3 specular;\n};\n\nlightingInfo computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, float range) {\n	lightingInfo result;\n\n	vec3 lightVectorW;\n	float attenuation = 1.0;\n	if (lightData.w == 0.)\n	{\n		vec3 direction = lightData.xyz - vPositionW;\n\n		attenuation = max(0., 1.0 - length(direction) / range);\n		lightVectorW = normalize(direction);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, max(1., vSpecularColor.a));\n\n	result.diffuse = ndl * diffuseColor * attenuation;\n	result.specular = specComp * specularColor * attenuation;\n\n	return result;\n}\n\nlightingInfo computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec3 diffuseColor, vec3 specularColor, float range) {\n	lightingInfo result;\n\n	vec3 direction = lightData.xyz - vPositionW;\n	vec3 lightVectorW = normalize(direction);\n	float attenuation = max(0., 1.0 - length(direction) / range);\n\n	// diffuse\n	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));\n	float spotAtten = 0.0;\n\n	if (cosAngle >= lightDirection.w)\n	{\n		cosAngle = max(0., pow(cosAngle, lightData.w));\n		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));\n\n		// Diffuse\n		float ndl = max(0., dot(vNormal, -lightDirection.xyz));\n\n		// Specular\n		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);\n		float specComp = max(0., dot(vNormal, angleW));\n		specComp = pow(specComp, vSpecularColor.a);\n\n		result.diffuse = ndl * spotAtten * diffuseColor * attenuation;\n		result.specular = specComp * specularColor * spotAtten * attenuation;\n\n		return result;\n	}\n\n	result.diffuse = vec3(0.);\n	result.specular = vec3(0.);\n\n	return result;\n}\n\nlightingInfo computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec3 diffuseColor, vec3 specularColor, vec3 groundColor) {\n	lightingInfo result;\n\n	// Diffuse\n	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightData.xyz);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result.diffuse = mix(groundColor, diffuseColor, ndl);\n	result.specular = specComp * specularColor;\n\n	return result;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef VERTEXCOLOR\n	diffuseColor *= vColor;\n#endif\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n#ifdef ALPHAFROMDIFFUSE\n	alpha *= baseColor.a;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = normalize(vNormalW);\n\n#ifdef BUMP\n	normalW = perturbNormal(viewDirectionW);\n#endif\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.;\n\n#ifdef LIGHT0\n#ifdef SPOTLIGHT0\n	lightingInfo info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0.rgb, vLightSpecular0, vLightDiffuse0.a);\n#endif\n#ifdef HEMILIGHT0\n	lightingInfo info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightGround0);\n#endif\n#ifdef POINTDIRLIGHT0\n	lightingInfo info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0.rgb, vLightSpecular0, vLightDiffuse0.a);\n#endif\n#ifdef SHADOW0\n#ifdef SHADOWVSM0\n	shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);\n#else\n	#ifdef SHADOWPCF0\n		shadow = computeShadowWithPCF(vPositionFromLight0, shadowSampler0);\n	#else\n		shadow = computeShadow(vPositionFromLight0, shadowSampler0, darkness0);\n	#endif\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT1\n#ifdef SPOTLIGHT1\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1.rgb, vLightSpecular1, vLightDiffuse1.a);\n#endif\n#ifdef HEMILIGHT1\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightGround1);\n#endif\n#ifdef POINTDIRLIGHT1\n	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1.rgb, vLightSpecular1, vLightDiffuse1.a);\n#endif\n#ifdef SHADOW1\n#ifdef SHADOWVSM1\n	shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);\n#else\n	#ifdef SHADOWPCF1\n		shadow = computeShadowWithPCF(vPositionFromLight1, shadowSampler1);\n	#else\n		shadow = computeShadow(vPositionFromLight1, shadowSampler1, darkness1);\n	#endif\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT2\n#ifdef SPOTLIGHT2\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2.rgb, vLightSpecular2, vLightDiffuse2.a);\n#endif\n#ifdef HEMILIGHT2\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightGround2);\n#endif\n#ifdef POINTDIRLIGHT2\n	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2.rgb, vLightSpecular2, vLightDiffuse2.a);\n#endif\n#ifdef SHADOW2\n#ifdef SHADOWVSM2\n	shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);\n#else\n	#ifdef SHADOWPCF2\n		shadow = computeShadowWithPCF(vPositionFromLight2, shadowSampler2);\n	#else\n		shadow = computeShadow(vPositionFromLight2, shadowSampler2, darkness2);\n	#endif	\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n#ifdef LIGHT3\n#ifdef SPOTLIGHT3\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3.rgb, vLightSpecular3, vLightDiffuse3.a);\n#endif\n#ifdef HEMILIGHT3\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightGround3);\n#endif\n#ifdef POINTDIRLIGHT3\n	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3.rgb, vLightSpecular3, vLightDiffuse3.a);\n#endif\n#ifdef SHADOW3\n#ifdef SHADOWVSM3\n	shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);\n#else\n	#ifdef SHADOWPCF3\n		shadow = computeShadowWithPCF(vPositionFromLight3, shadowSampler3);\n	#else\n		shadow = computeShadow(vPositionFromLight3, shadowSampler3, darkness3);\n	#endif	\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info.diffuse * shadow;\n	specularBase += info.specular * shadow;\n#endif\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	vec3 vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), normalW);\n\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y * shadow;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y * shadow;\n	}\n#endif\n\n#ifdef OPACITY\n	vec4 opacityMap = texture2D(opacitySampler, vOpacityUV);\n\n#ifdef OPACITYRGB\n	opacityMap.rgb = opacityMap.rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z)* vOpacityInfos.y;\n#else\n	alpha *= opacityMap.a * vOpacityInfos.y;\n#endif\n\n\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
            defaultVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec3 color;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\n\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 view;\nuniform mat4 viewProjection;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#ifdef LIGHT1\nuniform mat4 lightMatrix1;\nvarying vec4 vPositionFromLight1;\n#endif\n#ifdef LIGHT2\nuniform mat4 lightMatrix2;\nvarying vec4 vPositionFromLight2;\n#endif\n#ifdef LIGHT3\nuniform mat4 lightMatrix3;\nvarying vec4 vPositionFromLight3;\n#endif\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vPositionUVW;\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef REFLECTION\n	vPositionUVW = position;\n#endif \n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n\n#ifdef BONES4\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = world * (m0 + m1 + m2 + m3);\n#else\n	finalWorld = world * (m0 + m1 + m2);\n#endif \n\n#else\n#ifdef INSTANCES\n	finalWorld = mat4(world0, world1, world2, world3);\n#else\n	finalWorld = world;\n#endif\n#endif\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef BUMP\n	if (vBumpInfos.x == 0.)\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * worldPos;\n#endif\n#ifdef LIGHT1\n	vPositionFromLight1 = lightMatrix1 * worldPos;\n#endif\n#ifdef LIGHT2\n	vPositionFromLight2 = lightMatrix2 * worldPos;\n#endif\n#ifdef LIGHT3\n	vPositionFromLight3 = lightMatrix3 * worldPos;\n#endif\n#endif\n\n	// Vertex color\n#ifdef VERTEXCOLOR\n	vColor = color;\n#endif\n}",
            displayPassPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D passSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(passSampler, vUV);\n}",
            filterPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nuniform mat4 kernelMatrix;\n\nvoid main(void)\n{\n	vec3 baseColor = texture2D(textureSampler, vUV).rgb;\n	vec3 updatedColor = (kernelMatrix * vec4(baseColor, 1.0)).rgb;\n\n	gl_FragColor = vec4(updatedColor, 1.0);\n}",
            fxaaPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define FXAA_REDUCE_MIN   (1.0/128.0)\n#define FXAA_REDUCE_MUL   (1.0/8.0)\n#define FXAA_SPAN_MAX     8.0\n\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform vec2 texelSize;\n\nvoid main(){\n	vec2 localTexelSize = texelSize;\n	vec4 rgbNW = texture2D(textureSampler, (vUV + vec2(-1.0, -1.0) * localTexelSize));\n	vec4 rgbNE = texture2D(textureSampler, (vUV + vec2(1.0, -1.0) * localTexelSize));\n	vec4 rgbSW = texture2D(textureSampler, (vUV + vec2(-1.0, 1.0) * localTexelSize));\n	vec4 rgbSE = texture2D(textureSampler, (vUV + vec2(1.0, 1.0) * localTexelSize));\n	vec4 rgbM = texture2D(textureSampler, vUV);\n	vec4 luma = vec4(0.299, 0.587, 0.114, 1.0);\n	float lumaNW = dot(rgbNW, luma);\n	float lumaNE = dot(rgbNE, luma);\n	float lumaSW = dot(rgbSW, luma);\n	float lumaSE = dot(rgbSE, luma);\n	float lumaM = dot(rgbM, luma);\n	float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n	float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n	vec2 dir = vec2(-((lumaNW + lumaNE) - (lumaSW + lumaSE)), ((lumaNW + lumaSW) - (lumaNE + lumaSE)));\n\n	float dirReduce = max(\n		(lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL),\n		FXAA_REDUCE_MIN);\n\n	float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n	dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n		max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n		dir * rcpDirMin)) * localTexelSize;\n\n	vec4 rgbA = 0.5 * (\n		texture2D(textureSampler, vUV + dir * (1.0 / 3.0 - 0.5)) +\n		texture2D(textureSampler, vUV + dir * (2.0 / 3.0 - 0.5)));\n\n	vec4 rgbB = rgbA * 0.5 + 0.25 * (\n		texture2D(textureSampler, vUV + dir *  -0.5) +\n		texture2D(textureSampler, vUV + dir * 0.5));\n	float lumaB = dot(rgbB, luma);\n	if ((lumaB < lumaMin) || (lumaB > lumaMax)) {\n		gl_FragColor = rgbA;\n	}\n	else {\n		gl_FragColor = rgbB;\n	}\n}",
            layerPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Color\nuniform vec4 color;\n\nvoid main(void) {\n	vec4 baseColor = texture2D(textureSampler, vUV);\n\n	gl_FragColor = baseColor * color;\n}",
            layerVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Uniforms\nuniform mat4 textureMatrix;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = vec2(textureMatrix * vec4(position * madd + madd, 1.0, 0.0));\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
            legacydefaultPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_PROJECTION	4.\n\n// Constants\nuniform vec3 vEyePosition;\nuniform vec3 vAmbientColor;\nuniform vec4 vDiffuseColor;\nuniform vec4 vSpecularColor;\nuniform vec3 vEmissiveColor;\n\n// Input\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n// Lights\n#ifdef LIGHT0\nuniform vec4 vLightData0;\nuniform vec4 vLightDiffuse0;\nuniform vec3 vLightSpecular0;\n#ifdef SHADOW0\nvarying vec4 vPositionFromLight0;\nuniform sampler2D shadowSampler0;\n#endif\n#ifdef SPOTLIGHT0\nuniform vec4 vLightDirection0;\n#endif\n#ifdef HEMILIGHT0\nuniform vec3 vLightGround0;\n#endif\n#endif\n\n#ifdef LIGHT1\nuniform vec4 vLightData1;\nuniform vec4 vLightDiffuse1;\nuniform vec3 vLightSpecular1;\n#ifdef SHADOW1\nvarying vec4 vPositionFromLight1;\nuniform sampler2D shadowSampler1;\n#endif\n#ifdef SPOTLIGHT1\nuniform vec4 vLightDirection1;\n#endif\n#ifdef HEMILIGHT1\nuniform vec3 vLightGround1;\n#endif\n#endif\n\n#ifdef LIGHT2\nuniform vec4 vLightData2;\nuniform vec4 vLightDiffuse2;\nuniform vec3 vLightSpecular2;\n#ifdef SHADOW2\nvarying vec4 vPositionFromLight2;\nuniform sampler2D shadowSampler2;\n#endif\n#ifdef SPOTLIGHT2\nuniform vec4 vLightDirection2;\n#endif\n#ifdef HEMILIGHT2\nuniform vec3 vLightGround2;\n#endif\n#endif\n\n#ifdef LIGHT3\nuniform vec4 vLightData3;\nuniform vec4 vLightDiffuse3;\nuniform vec3 vLightSpecular3;\n#ifdef SHADOW3\nvarying vec4 vPositionFromLight3;\nuniform sampler2D shadowSampler3;\n#endif\n#ifdef SPOTLIGHT3\nuniform vec4 vLightDirection3;\n#endif\n#ifdef HEMILIGHT3\nuniform vec3 vLightGround3;\n#endif\n#endif\n\n// Samplers\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform sampler2D diffuseSampler;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform sampler2D ambientSampler;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY	\nvarying vec2 vOpacityUV;\nuniform sampler2D opacitySampler;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nvarying vec3 vReflectionUVW;\nuniform samplerCube reflectionCubeSampler;\nuniform sampler2D reflection2DSampler;\nuniform vec3 vReflectionInfos;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform sampler2D emissiveSampler;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform sampler2D specularSampler;\n#endif\n\n// Shadows\n#ifdef SHADOWS\n\nfloat unpack(vec4 color)\n{\n	const vec4 bitShift = vec4(1. / (255. * 255. * 255.), 1. / (255. * 255.), 1. / 255., 1.);\n	return dot(color, bitShift);\n}\n\nfloat unpackHalf(vec2 color)\n{\n	return color.x + (color.y / 255.0);\n}\n\nfloat computeShadow(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	float shadow = unpack(texture2D(shadowSampler, uv));\n\n	if (depth.z > shadow)\n	{\n		return 0.;\n	}\n	return 1.;\n}\n\n// Thanks to http://devmaster.net/\nfloat ChebychevInequality(vec2 moments, float t)\n{\n	if (t <= moments.x)\n	{\n		return 1.0;\n	}\n\n	float variance = moments.y - (moments.x * moments.x);\n	variance = max(variance, 0.);\n\n	float d = t - moments.x;\n	return variance / (variance + d * d);\n}\n\nfloat computeShadowWithVSM(vec4 vPositionFromLight, sampler2D shadowSampler)\n{\n	vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n	vec2 uv = 0.5 * depth.xy + vec2(0.5, 0.5);\n\n	if (uv.x < 0. || uv.x > 1.0 || uv.y < 0. || uv.y > 1.0)\n	{\n		return 1.0;\n	}\n\n	vec4 texel = texture2D(shadowSampler, uv);\n\n	vec2 moments = vec2(unpackHalf(texel.xy), unpackHalf(texel.zw));\n	return clamp(1.3 - ChebychevInequality(moments, depth.z), 0., 1.0);\n}\n#endif\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return clamp(fogCoeff, 0.0, 1.0);\n}\n#endif\n\n// Light Computing\nmat3 computeLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 diffuseColor, vec3 specularColor) {\n	mat3 result;\n\n	vec3 lightVectorW;\n	if (lightData.w == 0.)\n	{\n		lightVectorW = normalize(lightData.xyz - vPositionW);\n	}\n	else\n	{\n		lightVectorW = normalize(-lightData.xyz);\n	}\n\n	// diffuse\n	float ndl = max(0., dot(vNormal, lightVectorW));\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightVectorW);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = max(0., pow(specComp, max(1.0, vSpecularColor.a)));\n\n	result[0] = ndl * diffuseColor.rgb;\n	result[1] = specComp * specularColor;\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nmat3 computeSpotLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 lightDirection, vec4 diffuseColor, vec3 specularColor) {\n	mat3 result;\n\n	vec3 lightVectorW = normalize(lightData.xyz - vPositionW);\n\n	// diffuse\n	float cosAngle = max(0., dot(-lightDirection.xyz, lightVectorW));\n	float spotAtten = 0.0;\n\n	if (cosAngle >= lightDirection.w)\n	{\n		cosAngle = max(0., pow(cosAngle, lightData.w));\n		spotAtten = max(0., (cosAngle - lightDirection.w) / (1. - cosAngle));\n\n		// Diffuse\n		float ndl = max(0., dot(vNormal, -lightDirection.xyz));\n\n		// Specular\n		vec3 angleW = normalize(viewDirectionW - lightDirection.xyz);\n		float specComp = max(0., dot(vNormal, angleW));\n		specComp = pow(specComp, vSpecularColor.a);\n\n		result[0] = ndl * spotAtten * diffuseColor.rgb;\n		result[1] = specComp * specularColor * spotAtten;\n		result[2] = vec3(0.);\n\n		return result;\n	}\n\n	result[0] = vec3(0.);\n	result[1] = vec3(0.);\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nmat3 computeHemisphericLighting(vec3 viewDirectionW, vec3 vNormal, vec4 lightData, vec4 diffuseColor, vec3 specularColor, vec3 groundColor) {\n	mat3 result;\n\n	// Diffuse\n	float ndl = dot(vNormal, lightData.xyz) * 0.5 + 0.5;\n\n	// Specular\n	vec3 angleW = normalize(viewDirectionW + lightData.xyz);\n	float specComp = max(0., dot(vNormal, angleW));\n	specComp = pow(specComp, vSpecularColor.a);\n\n	result[0] = mix(groundColor, diffuseColor.rgb, ndl);\n	result[1] = specComp * specularColor;\n	result[2] = vec3(0.);\n\n	return result;\n}\n\nvoid main(void) {\n	// Clip plane\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n\n	vec3 viewDirectionW = normalize(vEyePosition - vPositionW);\n\n	// Base color\n	vec4 baseColor = vec4(1., 1., 1., 1.);\n	vec3 diffuseColor = vDiffuseColor.rgb;\n\n#ifdef VERTEXCOLOR\n	diffuseColor *= vColor;\n#endif\n\n#ifdef DIFFUSE\n	baseColor = texture2D(diffuseSampler, vDiffuseUV);\n\n#ifdef ALPHATEST\n	if (baseColor.a < 0.4)\n		discard;\n#endif\n\n	baseColor.rgb *= vDiffuseInfos.y;\n#endif\n\n	// Bump\n	vec3 normalW = normalize(vNormalW);\n\n	// Ambient color\n	vec3 baseAmbientColor = vec3(1., 1., 1.);\n\n#ifdef AMBIENT\n	baseAmbientColor = texture2D(ambientSampler, vAmbientUV).rgb * vAmbientInfos.y;\n#endif\n\n	// Lighting\n	vec3 diffuseBase = vec3(0., 0., 0.);\n	vec3 specularBase = vec3(0., 0., 0.);\n	float shadow = 1.;\n\n#ifdef LIGHT0\n#ifdef SPOTLIGHT0\n	mat3 info = computeSpotLighting(viewDirectionW, normalW, vLightData0, vLightDirection0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef HEMILIGHT0\n	mat3 info = computeHemisphericLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0, vLightGround0);\n#endif\n#ifdef POINTDIRLIGHT0\n	mat3 info = computeLighting(viewDirectionW, normalW, vLightData0, vLightDiffuse0, vLightSpecular0);\n#endif\n#ifdef SHADOW0\n#ifdef SHADOWVSM0\n	shadow = computeShadowWithVSM(vPositionFromLight0, shadowSampler0);\n#else\n	shadow = computeShadow(vPositionFromLight0, shadowSampler0);\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT1\n#ifdef SPOTLIGHT1\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData1, vLightDirection1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef HEMILIGHT1\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1, vLightGround1);\n#endif\n#ifdef POINTDIRLIGHT1\n	info = computeLighting(viewDirectionW, normalW, vLightData1, vLightDiffuse1, vLightSpecular1);\n#endif\n#ifdef SHADOW1\n#ifdef SHADOWVSM1\n	shadow = computeShadowWithVSM(vPositionFromLight1, shadowSampler1);\n#else\n	shadow = computeShadow(vPositionFromLight1, shadowSampler1);\n#endif\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT2\n#ifdef SPOTLIGHT2\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData2, vLightDirection2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef HEMILIGHT2\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2, vLightGround2);\n#endif\n#ifdef POINTDIRLIGHT2\n	info = computeLighting(viewDirectionW, normalW, vLightData2, vLightDiffuse2, vLightSpecular2);\n#endif\n#ifdef SHADOW2\n#ifdef SHADOWVSM2\n	shadow = computeShadowWithVSM(vPositionFromLight2, shadowSampler2);\n#else\n	shadow = computeShadow(vPositionFromLight2, shadowSampler2);\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n#ifdef LIGHT3\n#ifdef SPOTLIGHT3\n	info = computeSpotLighting(viewDirectionW, normalW, vLightData3, vLightDirection3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef HEMILIGHT3\n	info = computeHemisphericLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3, vLightGround3);\n#endif\n#ifdef POINTDIRLIGHT3\n	info = computeLighting(viewDirectionW, normalW, vLightData3, vLightDiffuse3, vLightSpecular3);\n#endif\n#ifdef SHADOW3\n#ifdef SHADOWVSM3\n	shadow = computeShadowWithVSM(vPositionFromLight3, shadowSampler3);\n#else\n	shadow = computeShadow(vPositionFromLight3, shadowSampler3);\n#endif	\n#else\n	shadow = 1.;\n#endif\n	diffuseBase += info[0] * shadow;\n	specularBase += info[1] * shadow;\n#endif\n\n	// Reflection\n	vec3 reflectionColor = vec3(0., 0., 0.);\n\n#ifdef REFLECTION\n	if (vReflectionInfos.z != 0.0)\n	{\n		reflectionColor = textureCube(reflectionCubeSampler, vReflectionUVW).rgb * vReflectionInfos.y;\n	}\n	else\n	{\n		vec2 coords = vReflectionUVW.xy;\n\n		if (vReflectionInfos.x == MAP_PROJECTION)\n		{\n			coords /= vReflectionUVW.z;\n		}\n\n		coords.y = 1.0 - coords.y;\n\n		reflectionColor = texture2D(reflection2DSampler, coords).rgb * vReflectionInfos.y;\n	}\n#endif\n\n	// Alpha\n	float alpha = vDiffuseColor.a;\n\n#ifdef OPACITY\n	vec4 opacityMap = texture2D(opacitySampler, vOpacityUV);\n#ifdef OPACITYRGB\n	opacityMap.rgb = opacityMap.rgb * vec3(0.3, 0.59, 0.11);\n	alpha *= (opacityMap.x + opacityMap.y + opacityMap.z)* vOpacityInfos.y;\n#else\n	alpha *= opacityMap.a * vOpacityInfos.y;\n#endif\n#endif\n\n	// Emissive\n	vec3 emissiveColor = vEmissiveColor;\n#ifdef EMISSIVE\n	emissiveColor += texture2D(emissiveSampler, vEmissiveUV).rgb * vEmissiveInfos.y;\n#endif\n\n	// Specular map\n	vec3 specularColor = vSpecularColor.rgb;\n#ifdef SPECULAR\n	specularColor = texture2D(specularSampler, vSpecularUV).rgb * vSpecularInfos.y;\n#endif\n\n	// Composition\n	vec3 finalDiffuse = clamp(diffuseBase * diffuseColor + emissiveColor + vAmbientColor, 0.0, 1.0) * baseColor.rgb;\n	vec3 finalSpecular = specularBase * specularColor;\n\n	vec4 color = vec4(finalDiffuse * baseAmbientColor + finalSpecular + reflectionColor, alpha);\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	color.rgb = fog * color.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = color;\n}",
            legacydefaultVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n#define MAP_EXPLICIT	0.\n#define MAP_SPHERICAL	1.\n#define MAP_PLANAR		2.\n#define MAP_CUBIC		3.\n#define MAP_PROJECTION	4.\n#define MAP_SKYBOX		5.\n\n// Attributes\nattribute vec3 position;\nattribute vec3 normal;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec3 color;\n#endif\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniforms\nuniform mat4 world;\nuniform mat4 view;\nuniform mat4 viewProjection;\n\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;\nuniform mat4 diffuseMatrix;\nuniform vec2 vDiffuseInfos;\n#endif\n\n#ifdef AMBIENT\nvarying vec2 vAmbientUV;\nuniform mat4 ambientMatrix;\nuniform vec2 vAmbientInfos;\n#endif\n\n#ifdef OPACITY\nvarying vec2 vOpacityUV;\nuniform mat4 opacityMatrix;\nuniform vec2 vOpacityInfos;\n#endif\n\n#ifdef REFLECTION\nuniform vec3 vEyePosition;\nvarying vec3 vReflectionUVW;\nuniform vec3 vReflectionInfos;\nuniform mat4 reflectionMatrix;\n#endif\n\n#ifdef EMISSIVE\nvarying vec2 vEmissiveUV;\nuniform vec2 vEmissiveInfos;\nuniform mat4 emissiveMatrix;\n#endif\n\n#ifdef SPECULAR\nvarying vec2 vSpecularUV;\nuniform vec2 vSpecularInfos;\nuniform mat4 specularMatrix;\n#endif\n\n#ifdef BUMP\nvarying vec2 vBumpUV;\nuniform vec2 vBumpInfos;\nuniform mat4 bumpMatrix;\n#endif\n\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n// Output\nvarying vec3 vPositionW;\nvarying vec3 vNormalW;\n\n#ifdef VERTEXCOLOR\nvarying vec3 vColor;\n#endif\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nvarying float fClipDistance;\n#endif\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\n#ifdef SHADOWS\n#ifdef LIGHT0\nuniform mat4 lightMatrix0;\nvarying vec4 vPositionFromLight0;\n#endif\n#ifdef LIGHT1\nuniform mat4 lightMatrix1;\nvarying vec4 vPositionFromLight1;\n#endif\n#ifdef LIGHT2\nuniform mat4 lightMatrix2;\nvarying vec4 vPositionFromLight2;\n#endif\n#ifdef LIGHT3\nuniform mat4 lightMatrix3;\nvarying vec4 vPositionFromLight3;\n#endif\n#endif\n\n#ifdef REFLECTION\nvec3 computeReflectionCoords(float mode, vec4 worldPos, vec3 worldNormal)\n{\n	if (mode == MAP_SPHERICAL)\n	{\n		vec3 coords = vec3(view * vec4(worldNormal, 0.0));\n\n		return vec3(reflectionMatrix * vec4(coords, 1.0));\n	}\n	else if (mode == MAP_PLANAR)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = normalize(reflect(viewDir, worldNormal));\n\n		return vec3(reflectionMatrix * vec4(coords, 1));\n	}\n	else if (mode == MAP_CUBIC)\n	{\n		vec3 viewDir = worldPos.xyz - vEyePosition;\n		vec3 coords = reflect(viewDir, worldNormal);\n\n		return vec3(reflectionMatrix * vec4(coords, 0));\n	}\n	else if (mode == MAP_PROJECTION)\n	{\n		return vec3(reflectionMatrix * (view * worldPos));\n	}\n	else if (mode == MAP_SKYBOX)\n	{\n		return position;\n	}\n\n	return vec3(0, 0, 0);\n}\n#endif\n\nvoid main(void) {\n	mat4 finalWorld;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n\n#ifdef BONES4\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = world * (m0 + m1 + m2 + m3);\n#else\n	finalWorld = world * (m0 + m1 + m2);\n#endif \n\n#else\n	finalWorld = world;\n#endif\n\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n\n	vec4 worldPos = finalWorld * vec4(position, 1.0);\n	vPositionW = vec3(worldPos);\n	vNormalW = normalize(vec3(finalWorld * vec4(normal, 0.0)));\n\n	// Texture coordinates\n#ifndef UV1\n	vec2 uv = vec2(0., 0.);\n#endif\n#ifndef UV2\n	vec2 uv2 = vec2(0., 0.);\n#endif\n\n#ifdef DIFFUSE\n	if (vDiffuseInfos.x == 0.)\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vDiffuseUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef AMBIENT\n	if (vAmbientInfos.x == 0.)\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vAmbientUV = vec2(ambientMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef OPACITY\n	if (vOpacityInfos.x == 0.)\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vOpacityUV = vec2(opacityMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef REFLECTION\n	vReflectionUVW = computeReflectionCoords(vReflectionInfos.x, vec4(vPositionW, 1.0), vNormalW);\n#endif\n\n#ifdef EMISSIVE\n	if (vEmissiveInfos.x == 0.)\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vEmissiveUV = vec2(emissiveMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef SPECULAR\n	if (vSpecularInfos.x == 0.)\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vSpecularUV = vec2(specularMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n#ifdef BUMP\n	if (vBumpInfos.x == 0.)\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv, 1.0, 0.0));\n	}\n	else\n	{\n		vBumpUV = vec2(bumpMatrix * vec4(uv2, 1.0, 0.0));\n	}\n#endif\n\n	// Clip plane\n#ifdef CLIPPLANE\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n\n	// Fog\n#ifdef FOG\n	fFogDistance = (view * worldPos).z;\n#endif\n\n	// Shadows\n#ifdef SHADOWS\n#ifdef LIGHT0\n	vPositionFromLight0 = lightMatrix0 * worldPos;\n#endif\n#ifdef LIGHT1\n	vPositionFromLight1 = lightMatrix1 * worldPos;\n#endif\n#ifdef LIGHT2\n	vPositionFromLight2 = lightMatrix2 * worldPos;\n#endif\n#ifdef LIGHT3\n	vPositionFromLight3 = lightMatrix3 * worldPos;\n#endif\n#endif\n\n	// Vertex color\n#ifdef VERTEXCOLOR\n	vColor = color;\n#endif\n}",
            lensFlarePixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\n// Color\nuniform vec4 color;\n\nvoid main(void) {\n	vec4 baseColor = texture2D(textureSampler, vUV);\n\n	gl_FragColor = baseColor * color;\n}",
            lensFlareVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Uniforms\nuniform mat4 viewportMatrix;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = position * madd + madd;\n	gl_Position = viewportMatrix * vec4(position, 0.0, 1.0);\n}",
            oculusDistortionCorrectionPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform vec2 LensCenter;\nuniform vec2 Scale;\nuniform vec2 ScaleIn;\nuniform vec4 HmdWarpParam;\n\nvec2 HmdWarp(vec2 in01) {\n\n	vec2 theta = (in01 - LensCenter) * ScaleIn; // Scales to [-1, 1]\n	float rSq = theta.x * theta.x + theta.y * theta.y;\n	vec2 rvector = theta * (HmdWarpParam.x + HmdWarpParam.y * rSq + HmdWarpParam.z * rSq * rSq + HmdWarpParam.w * rSq * rSq * rSq);\n	return LensCenter + Scale * rvector;\n}\n\n\n\nvoid main(void)\n{\n	vec2 tc = HmdWarp(vUV);\n	if (tc.x <0.0 || tc.x>1.0 || tc.y<0.0 || tc.y>1.0)\n		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n	else{\n		gl_FragColor = vec4(texture2D(textureSampler, tc).rgb, 1.0);\n	}\n}",
            outlinePixelShader: "precision mediump float;\n\nuniform vec3 color;\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n#endif\n\nvoid main(void) {\n#ifdef ALPHATEST\n	if (texture2D(diffuseSampler, vUV).a < 0.4)\n		discard;\n#endif\n\n	gl_FragColor = vec4(color, 1.);\n}",
            outlineVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attribute\nattribute vec3 position;\nattribute vec3 normal;\n\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\nuniform float offset;\n\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 viewProjection;\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform mat4 diffuseMatrix;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#endif\n\nvoid main(void)\n{\n#ifdef INSTANCES\n	mat4 finalWorld = mat4(world0, world1, world2, world3);\n#else\n	mat4 finalWorld = world;\n#endif\n\n	vec3 offsetPosition = position + normal * offset;\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(offsetPosition, 1.0);\n#else\n	gl_Position = viewProjection * finalWorld * vec4(offsetPosition, 1.0);\n#endif\n\n#ifdef ALPHATEST\n#ifdef UV1\n	vUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n#endif\n#ifdef UV2\n	vUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n#endif\n#endif\n}",
            particlesPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nvarying vec4 vColor;\nuniform vec4 textureMask;\nuniform sampler2D diffuseSampler;\n\n#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {\n#ifdef CLIPPLANE\n	if (fClipDistance > 0.0)\n		discard;\n#endif\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	gl_FragColor = (baseColor * textureMask + (vec4(1., 1., 1., 1.) - textureMask)) * vColor;\n}",
            particlesVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 color;\nattribute vec4 options;\n\n// Uniforms\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef CLIPPLANE\nuniform vec4 vClipPlane;\nuniform mat4 invView;\nvarying float fClipDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	float size = options.y;\n	float angle = options.x;\n	vec2 offset = options.zw;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n	\n	vColor = color;\n	vUV = offset;\n\n	// Clip plane\n#ifdef CLIPPLANE\n	vec4 worldPos = invView * vec4(viewPos, 1.0);\n	fClipDistance = dot(worldPos, vClipPlane);\n#endif\n}",
            passPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\n\nvoid main(void) \n{\n	gl_FragColor = texture2D(textureSampler, vUV);\n}",
            postprocessVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec2 position;\n\n// Output\nvarying vec2 vUV;\n\nconst vec2 madd = vec2(0.5, 0.5);\n\nvoid main(void) {	\n\n	vUV = position * madd + madd;\n	gl_Position = vec4(position, 0.0, 1.0);\n}",
            refractionPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D textureSampler;\nuniform sampler2D refractionSampler;\n\n// Parameters\nuniform vec3 baseColor;\nuniform float depth;\nuniform float colorLevel;\n\nvoid main() {\n	float ref = 1.0 - texture2D(refractionSampler, vUV).r;\n\n	vec2 uv = vUV - vec2(0.5);\n	vec2 offset = uv * depth * ref;\n	vec3 sourceColor = texture2D(textureSampler, vUV - offset).rgb;\n\n	gl_FragColor = vec4(sourceColor + sourceColor * ref * colorLevel, 1.0);\n}",
            shadowMapPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvec4 pack(float depth)\n{\n	const vec4 bitOffset = vec4(255. * 255. * 255., 255. * 255., 255., 1.);\n	const vec4 bitMask = vec4(0., 1. / 255., 1. / 255., 1. / 255.);\n	\n	vec4 comp = mod(depth * bitOffset * vec4(254.), vec4(255.)) / vec4(254.);\n	comp -= comp.xxyz * bitMask;\n	\n	return comp;\n}\n\n// Thanks to http://devmaster.net/\nvec2 packHalf(float depth) \n{ \n	const vec2 bitOffset = vec2(1.0 / 255., 0.);\n	vec2 color = vec2(depth, fract(depth * 255.));\n\n	return color - (color.yy * bitOffset);\n}\n\n#ifndef VSM\nvarying vec4 vPosition;\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n#endif\n\nvoid main(void)\n{\n#ifdef ALPHATEST\n	if (texture2D(diffuseSampler, vUV).a < 0.4)\n		discard;\n#endif\n\n#ifdef VSM\n	float moment1 = gl_FragCoord.z / gl_FragCoord.w;\n	float moment2 = moment1 * moment1;\n	gl_FragColor = vec4(packHalf(moment1), packHalf(moment2));\n#else\n	gl_FragColor = pack(vPosition.z / vPosition.w);\n#endif\n}",
            shadowMapVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attribute\nattribute vec3 position;\n#ifdef BONES\nattribute vec4 matricesIndices;\nattribute vec4 matricesWeights;\n#endif\n\n// Uniform\n#ifdef INSTANCES\nattribute vec4 world0;\nattribute vec4 world1;\nattribute vec4 world2;\nattribute vec4 world3;\n#else\nuniform mat4 world;\n#endif\n\nuniform mat4 viewProjection;\n#ifdef BONES\nuniform mat4 mBones[BonesPerMesh];\n#endif\n\n#ifndef VSM\nvarying vec4 vPosition;\n#endif\n\n#ifdef ALPHATEST\nvarying vec2 vUV;\nuniform mat4 diffuseMatrix;\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#endif\n\nvoid main(void)\n{\n#ifdef INSTANCES\n	mat4 finalWorld = mat4(world0, world1, world2, world3);\n#else\n	mat4 finalWorld = world;\n#endif\n\n#ifdef BONES\n	mat4 m0 = mBones[int(matricesIndices.x)] * matricesWeights.x;\n	mat4 m1 = mBones[int(matricesIndices.y)] * matricesWeights.y;\n	mat4 m2 = mBones[int(matricesIndices.z)] * matricesWeights.z;\n	mat4 m3 = mBones[int(matricesIndices.w)] * matricesWeights.w;\n	finalWorld = finalWorld * (m0 + m1 + m2 + m3);\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#else\n#ifndef VSM\n	vPosition = viewProjection * finalWorld * vec4(position, 1.0);\n#endif\n	gl_Position = viewProjection * finalWorld * vec4(position, 1.0);\n#endif\n\n#ifdef ALPHATEST\n#ifdef UV1\n	vUV = vec2(diffuseMatrix * vec4(uv, 1.0, 0.0));\n#endif\n#ifdef UV2\n	vUV = vec2(diffuseMatrix * vec4(uv2, 1.0, 0.0));\n#endif\n#endif\n}",
            spritesPixelShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform bool alphaTest;\n\nvarying vec4 vColor;\n\n// Samplers\nvarying vec2 vUV;\nuniform sampler2D diffuseSampler;\n\n// Fog\n#ifdef FOG\n\n#define FOGMODE_NONE    0.\n#define FOGMODE_EXP     1.\n#define FOGMODE_EXP2    2.\n#define FOGMODE_LINEAR  3.\n#define E 2.71828\n\nuniform vec4 vFogInfos;\nuniform vec3 vFogColor;\nvarying float fFogDistance;\n\nfloat CalcFogFactor()\n{\n	float fogCoeff = 1.0;\n	float fogStart = vFogInfos.y;\n	float fogEnd = vFogInfos.z;\n	float fogDensity = vFogInfos.w;\n\n	if (FOGMODE_LINEAR == vFogInfos.x)\n	{\n		fogCoeff = (fogEnd - fFogDistance) / (fogEnd - fogStart);\n	}\n	else if (FOGMODE_EXP == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fogDensity);\n	}\n	else if (FOGMODE_EXP2 == vFogInfos.x)\n	{\n		fogCoeff = 1.0 / pow(E, fFogDistance * fFogDistance * fogDensity * fogDensity);\n	}\n\n	return min(1., max(0., fogCoeff));\n}\n#endif\n\n\nvoid main(void) {\n	vec4 baseColor = texture2D(diffuseSampler, vUV);\n\n	if (alphaTest) \n	{\n		if (baseColor.a < 0.95)\n			discard;\n	}\n\n	baseColor *= vColor;\n\n#ifdef FOG\n	float fog = CalcFogFactor();\n	baseColor.rgb = fog * baseColor.rgb + (1.0 - fog) * vFogColor;\n#endif\n\n	gl_FragColor = baseColor;\n}",
            spritesVertexShader: "#ifdef GL_ES\nprecision mediump float;\n#endif\n\n// Attributes\nattribute vec3 position;\nattribute vec4 options;\nattribute vec4 cellInfo;\nattribute vec4 color;\n\n// Uniforms\nuniform vec2 textureInfos;\nuniform mat4 view;\nuniform mat4 projection;\n\n// Output\nvarying vec2 vUV;\nvarying vec4 vColor;\n\n#ifdef FOG\nvarying float fFogDistance;\n#endif\n\nvoid main(void) {	\n	vec3 viewPos = (view * vec4(position, 1.0)).xyz; \n	vec3 cornerPos;\n	\n	float angle = options.x;\n	float size = options.y;\n	vec2 offset = options.zw;\n	vec2 uvScale = textureInfos.xy;\n\n	cornerPos = vec3(offset.x - 0.5, offset.y  - 0.5, 0.) * size;\n\n	// Rotate\n	vec3 rotatedCorner;\n	rotatedCorner.x = cornerPos.x * cos(angle) - cornerPos.y * sin(angle);\n	rotatedCorner.y = cornerPos.x * sin(angle) + cornerPos.y * cos(angle);\n	rotatedCorner.z = 0.;\n\n	// Position\n	viewPos += rotatedCorner;\n	gl_Position = projection * vec4(viewPos, 1.0);   \n\n	// Color\n	vColor = color;\n	\n	// Texture\n	vec2 uvOffset = vec2(abs(offset.x - cellInfo.x), 1.0 - abs(offset.y - cellInfo.y));\n\n	vUV = (uvOffset + cellInfo.zw) * uvScale;\n\n	// Fog\n#ifdef FOG\n	fFogDistance = viewPos.z;\n#endif\n}",
        };
        return Effect;
    })();
    BABYLON.Effect = Effect;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Material = (function () {
        function Material(name, scene, doNotAdd) {
            this.name = name;
            this.checkReadyOnEveryCall = true;
            this.checkReadyOnlyOnce = false;
            this.state = "";
            this.alpha = 1.0;
            this.wireframe = false;
            this.backFaceCulling = true;
            this._wasPreviouslyReady = false;
            this.id = name;
            this._scene = scene;
            if (!doNotAdd) {
                scene.materials.push(this);
            }
        }
        Material.prototype.isReady = function (mesh, useInstances) {
            return true;
        };
        Material.prototype.getEffect = function () {
            return this._effect;
        };
        Material.prototype.getScene = function () {
            return this._scene;
        };
        Material.prototype.needAlphaBlending = function () {
            return (this.alpha < 1.0);
        };
        Material.prototype.needAlphaTesting = function () {
            return false;
        };
        Material.prototype.getAlphaTestTexture = function () {
            return null;
        };
        Material.prototype.trackCreation = function (onCompiled, onError) {};
        Material.prototype._preBind = function () {
            var engine = this._scene.getEngine();
            engine.enableEffect(this._effect);
            engine.setState(this.backFaceCulling);
        };
        Material.prototype.bind = function (world, mesh) {};
        Material.prototype.bindOnlyWorldMatrix = function (world) {};
        Material.prototype.unbind = function () {};
        Material.prototype.dispose = function (forceDisposeEffect) {
            var index = this._scene.materials.indexOf(this);
            this._scene.materials.splice(index, 1);
            if (forceDisposeEffect && this._effect) {
                this._scene.getEngine()._releaseEffect(this._effect);
                this._effect = null;
            }
            if (this.onDispose) {
                this.onDispose();
            }
        };
        return Material;
    })();
    BABYLON.Material = Material;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var maxSimultaneousLights = 4;
    var StandardMaterial = (function (_super) {
        __extends(StandardMaterial, _super);

        function StandardMaterial(name, scene) {
            var _this = this;
            _super.call(this, name, scene);
            this.ambientColor = new BABYLON.Color3(0, 0, 0);
            this.diffuseColor = new BABYLON.Color3(1, 1, 1);
            this.specularColor = new BABYLON.Color3(1, 1, 1);
            this.specularPower = 64;
            this.emissiveColor = new BABYLON.Color3(0, 0, 0);
            this.useAlphaFromDiffuseTexture = false;
            this._cachedDefines = null;
            this._renderTargets = new BABYLON.SmartArray(16);
            this._worldViewProjectionMatrix = BABYLON.Matrix.Zero();
            this._globalAmbientColor = new BABYLON.Color3(0, 0, 0);
            this._baseColor = new BABYLON.Color3();
            this._scaledDiffuse = new BABYLON.Color3();
            this._scaledSpecular = new BABYLON.Color3();
            this.getRenderTargetTextures = function () {
                _this._renderTargets.reset();
                if (_this.reflectionTexture && _this.reflectionTexture.isRenderTarget) {
                    _this._renderTargets.push(_this.reflectionTexture);
                }
                return _this._renderTargets;
            };
        }
        StandardMaterial.prototype.needAlphaBlending = function () {
            return (this.alpha < 1.0) || (this.opacityTexture != null) || this._shouldUseAlphaFromDiffuseTexture();
        };
        StandardMaterial.prototype.needAlphaTesting = function () {
            return this.diffuseTexture != null && this.diffuseTexture.hasAlpha && !this.diffuseTexture.getAlphaFromRGB;
        };
        StandardMaterial.prototype._shouldUseAlphaFromDiffuseTexture = function () {
            return this.diffuseTexture != null && this.diffuseTexture.hasAlpha && this.useAlphaFromDiffuseTexture;
        };
        StandardMaterial.prototype.getAlphaTestTexture = function () {
            return this.diffuseTexture;
        };
        StandardMaterial.prototype.isReady = function (mesh, useInstances) {
            if (this.checkReadyOnlyOnce) {
                if (this._wasPreviouslyReady) {
                    return true;
                }
            }
            var scene = this.getScene();
            if (!this.checkReadyOnEveryCall) {
                if (this._renderId === scene.getRenderId()) {
                    return true;
                }
            }
            var engine = scene.getEngine();
            var defines = [];
            var optionalDefines = new Array();
            if (scene.texturesEnabled) {
                if (this.diffuseTexture && BABYLON.StandardMaterial.DiffuseTextureEnabled) {
                    if (!this.diffuseTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define DIFFUSE");
                    }
                }
                if (this.ambientTexture && BABYLON.StandardMaterial.AmbientTextureEnabled) {
                    if (!this.ambientTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define AMBIENT");
                    }
                }
                if (this.opacityTexture && BABYLON.StandardMaterial.OpacityTextureEnabled) {
                    if (!this.opacityTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define OPACITY");
                        if (this.opacityTexture.getAlphaFromRGB) {
                            defines.push("#define OPACITYRGB");
                        }
                    }
                }
                if (this.reflectionTexture && BABYLON.StandardMaterial.ReflectionTextureEnabled) {
                    if (!this.reflectionTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define REFLECTION");
                    }
                }
                if (this.emissiveTexture && BABYLON.StandardMaterial.EmissiveTextureEnabled) {
                    if (!this.emissiveTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define EMISSIVE");
                    }
                }
                if (this.specularTexture && BABYLON.StandardMaterial.SpecularTextureEnabled) {
                    if (!this.specularTexture.isReady()) {
                        return false;
                    } else {
                        defines.push("#define SPECULAR");
                        optionalDefines.push(defines[defines.length - 1]);
                    }
                }
            }
            if (scene.getEngine().getCaps().standardDerivatives && this.bumpTexture && BABYLON.StandardMaterial.BumpTextureEnabled) {
                if (!this.bumpTexture.isReady()) {
                    return false;
                } else {
                    defines.push("#define BUMP");
                    optionalDefines.push(defines[defines.length - 1]);
                }
            }
            if (scene.clipPlane) {
                defines.push("#define CLIPPLANE");
            }
            if (engine.getAlphaTesting()) {
                defines.push("#define ALPHATEST");
            }
            if (this._shouldUseAlphaFromDiffuseTexture()) {
                defines.push("#define ALPHAFROMDIFFUSE");
            }
            if (scene.fogMode !== BABYLON.Scene.FOGMODE_NONE) {
                defines.push("#define FOG");
                optionalDefines.push(defines[defines.length - 1]);
            }
            var shadowsActivated = false;
            var lightIndex = 0;
            if (scene.lightsEnabled) {
                for (var index = 0; index < scene.lights.length; index++) {
                    var light = scene.lights[index];
                    if (!light.isEnabled()) {
                        continue;
                    }
                    if (light._excludedMeshesIds.length > 0) {
                        for (var excludedIndex = 0; excludedIndex < light._excludedMeshesIds.length; excludedIndex++) {
                            var excludedMesh = scene.getMeshByID(light._excludedMeshesIds[excludedIndex]);
                            if (excludedMesh) {
                                light.excludedMeshes.push(excludedMesh);
                            }
                        }
                        light._excludedMeshesIds = [];
                    }
                    if (light._includedOnlyMeshesIds.length > 0) {
                        for (var includedOnlyIndex = 0; includedOnlyIndex < light._includedOnlyMeshesIds.length; includedOnlyIndex++) {
                            var includedOnlyMesh = scene.getMeshByID(light._includedOnlyMeshesIds[includedOnlyIndex]);
                            if (includedOnlyMesh) {
                                light.includedOnlyMeshes.push(includedOnlyMesh);
                            }
                        }
                        light._includedOnlyMeshesIds = [];
                    }
                    if (!light.canAffectMesh(mesh)) {
                        continue;
                    }
                    defines.push("#define LIGHT" + lightIndex);
                    if (lightIndex > 0) {
                        optionalDefines.push(defines[defines.length - 1]);
                    }
                    var type;
                    if (light instanceof BABYLON.SpotLight) {
                        type = "#define SPOTLIGHT" + lightIndex;
                    } else if (light instanceof BABYLON.HemisphericLight) {
                        type = "#define HEMILIGHT" + lightIndex;
                    } else {
                        type = "#define POINTDIRLIGHT" + lightIndex;
                    }
                    defines.push(type);
                    if (lightIndex > 0) {
                        optionalDefines.push(defines[defines.length - 1]);
                    }
                    var shadowGenerator = light.getShadowGenerator();
                    if (mesh && mesh.receiveShadows && shadowGenerator) {
                        defines.push("#define SHADOW" + lightIndex);
                        if (lightIndex > 0) {
                            optionalDefines.push(defines[defines.length - 1]);
                        }
                        if (!shadowsActivated) {
                            defines.push("#define SHADOWS");
                            shadowsActivated = true;
                        }
                        if (shadowGenerator.useVarianceShadowMap) {
                            defines.push("#define SHADOWVSM" + lightIndex);
                            if (lightIndex > 0) {
                                optionalDefines.push(defines[defines.length - 1]);
                            }
                        }
                        if (shadowGenerator.usePoissonSampling) {
                            defines.push("#define SHADOWPCF" + lightIndex);
                            if (lightIndex > 0) {
                                optionalDefines.push(defines[defines.length - 1]);
                            }
                        }
                    }
                    lightIndex++;
                    if (lightIndex == maxSimultaneousLights) break;
                }
            }
            var attribs = [BABYLON.VertexBuffer.PositionKind, BABYLON.VertexBuffer.NormalKind];
            if (mesh) {
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                    attribs.push(BABYLON.VertexBuffer.UVKind);
                    defines.push("#define UV1");
                }
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)) {
                    attribs.push(BABYLON.VertexBuffer.UV2Kind);
                    defines.push("#define UV2");
                }
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.ColorKind)) {
                    attribs.push(BABYLON.VertexBuffer.ColorKind);
                    defines.push("#define VERTEXCOLOR");
                }
                if (mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                    attribs.push(BABYLON.VertexBuffer.MatricesIndicesKind);
                    attribs.push(BABYLON.VertexBuffer.MatricesWeightsKind);
                    defines.push("#define BONES");
                    defines.push("#define BonesPerMesh " + (mesh.skeleton.bones.length + 1));
                    defines.push("#define BONES4");
                    optionalDefines.push(defines[defines.length - 1]);
                }
                if (useInstances) {
                    defines.push("#define INSTANCES");
                    attribs.push("world0");
                    attribs.push("world1");
                    attribs.push("world2");
                    attribs.push("world3");
                }
            }
            var join = defines.join("\n");
            if (this._cachedDefines != join) {
                this._cachedDefines = join;
                var shaderName = "default";
                if (!scene.getEngine().getCaps().standardDerivatives) {
                    shaderName = "legacydefault";
                }
                this._effect = scene.getEngine().createEffect(shaderName, attribs, ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "vLightData0", "vLightDiffuse0", "vLightSpecular0", "vLightDirection0", "vLightGround0", "lightMatrix0", "vLightData1", "vLightDiffuse1", "vLightSpecular1", "vLightDirection1", "vLightGround1", "lightMatrix1", "vLightData2", "vLightDiffuse2", "vLightSpecular2", "vLightDirection2", "vLightGround2", "lightMatrix2", "vLightData3", "vLightDiffuse3", "vLightSpecular3", "vLightDirection3", "vLightGround3", "lightMatrix3", "vFogInfos", "vFogColor", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vReflectionInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "mBones", "vClipPlane", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "reflectionMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "darkness0", "darkness1", "darkness2", "darkness3"], ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "shadowSampler0", "shadowSampler1", "shadowSampler2", "shadowSampler3"], join, optionalDefines, this.onCompiled, this.onError);
            }
            if (!this._effect.isReady()) {
                return false;
            }
            this._renderId = scene.getRenderId();
            this._wasPreviouslyReady = true;
            return true;
        };
        StandardMaterial.prototype.unbind = function () {
            if (this.reflectionTexture && this.reflectionTexture.isRenderTarget) {
                this._effect.setTexture("reflection2DSampler", null);
            }
        };
        StandardMaterial.prototype.bindOnlyWorldMatrix = function (world) {
            this._effect.setMatrix("world", world);
        };
        StandardMaterial.prototype.bind = function (world, mesh) {
            var scene = this.getScene();
            this._baseColor.copyFrom(this.diffuseColor);
            this.bindOnlyWorldMatrix(world);
            this._effect.setMatrix("viewProjection", scene.getTransformMatrix());
            if (mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                this._effect.setMatrices("mBones", mesh.skeleton.getTransformMatrices());
            }
            if (this.diffuseTexture && BABYLON.StandardMaterial.DiffuseTextureEnabled) {
                this._effect.setTexture("diffuseSampler", this.diffuseTexture);
                this._effect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                this._effect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
                this._baseColor.copyFromFloats(1, 1, 1);
            }
            if (this.ambientTexture && BABYLON.StandardMaterial.AmbientTextureEnabled) {
                this._effect.setTexture("ambientSampler", this.ambientTexture);
                this._effect.setFloat2("vAmbientInfos", this.ambientTexture.coordinatesIndex, this.ambientTexture.level);
                this._effect.setMatrix("ambientMatrix", this.ambientTexture.getTextureMatrix());
            }
            if (this.opacityTexture && BABYLON.StandardMaterial.OpacityTextureEnabled) {
                this._effect.setTexture("opacitySampler", this.opacityTexture);
                this._effect.setFloat2("vOpacityInfos", this.opacityTexture.coordinatesIndex, this.opacityTexture.level);
                this._effect.setMatrix("opacityMatrix", this.opacityTexture.getTextureMatrix());
            }
            if (this.reflectionTexture && BABYLON.StandardMaterial.ReflectionTextureEnabled) {
                if (this.reflectionTexture.isCube) {
                    this._effect.setTexture("reflectionCubeSampler", this.reflectionTexture);
                } else {
                    this._effect.setTexture("reflection2DSampler", this.reflectionTexture);
                }
                this._effect.setMatrix("reflectionMatrix", this.reflectionTexture.getReflectionTextureMatrix());
                this._effect.setFloat3("vReflectionInfos", this.reflectionTexture.coordinatesMode, this.reflectionTexture.level, this.reflectionTexture.isCube ? 1 : 0);
            }
            if (this.emissiveTexture && BABYLON.StandardMaterial.EmissiveTextureEnabled) {
                this._effect.setTexture("emissiveSampler", this.emissiveTexture);
                this._effect.setFloat2("vEmissiveInfos", this.emissiveTexture.coordinatesIndex, this.emissiveTexture.level);
                this._effect.setMatrix("emissiveMatrix", this.emissiveTexture.getTextureMatrix());
            }
            if (this.specularTexture && BABYLON.StandardMaterial.SpecularTextureEnabled) {
                this._effect.setTexture("specularSampler", this.specularTexture);
                this._effect.setFloat2("vSpecularInfos", this.specularTexture.coordinatesIndex, this.specularTexture.level);
                this._effect.setMatrix("specularMatrix", this.specularTexture.getTextureMatrix());
            }
            if (this.bumpTexture && scene.getEngine().getCaps().standardDerivatives && BABYLON.StandardMaterial.BumpTextureEnabled) {
                this._effect.setTexture("bumpSampler", this.bumpTexture);
                this._effect.setFloat2("vBumpInfos", this.bumpTexture.coordinatesIndex, this.bumpTexture.level);
                this._effect.setMatrix("bumpMatrix", this.bumpTexture.getTextureMatrix());
            }
            scene.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor);
            this._effect.setVector3("vEyePosition", scene.activeCamera.position);
            this._effect.setColor3("vAmbientColor", this._globalAmbientColor);
            this._effect.setColor4("vDiffuseColor", this._baseColor, this.alpha * mesh.visibility);
            this._effect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
            this._effect.setColor3("vEmissiveColor", this.emissiveColor);
            if (scene.lightsEnabled) {
                var lightIndex = 0;
                for (var index = 0; index < scene.lights.length; index++) {
                    var light = scene.lights[index];
                    if (!light.isEnabled()) {
                        continue;
                    }
                    if (!light.canAffectMesh(mesh)) {
                        continue;
                    }
                    if (light instanceof BABYLON.PointLight) {
                        light.transferToEffect(this._effect, "vLightData" + lightIndex);
                    } else if (light instanceof BABYLON.DirectionalLight) {
                        light.transferToEffect(this._effect, "vLightData" + lightIndex);
                    } else if (light instanceof BABYLON.SpotLight) {
                        light.transferToEffect(this._effect, "vLightData" + lightIndex, "vLightDirection" + lightIndex);
                    } else if (light instanceof BABYLON.HemisphericLight) {
                        light.transferToEffect(this._effect, "vLightData" + lightIndex, "vLightGround" + lightIndex);
                    }
                    light.diffuse.scaleToRef(light.intensity, this._scaledDiffuse);
                    light.specular.scaleToRef(light.intensity, this._scaledSpecular);
                    this._effect.setColor4("vLightDiffuse" + lightIndex, this._scaledDiffuse, light.range);
                    this._effect.setColor3("vLightSpecular" + lightIndex, this._scaledSpecular);
                    var shadowGenerator = light.getShadowGenerator();
                    if (mesh.receiveShadows && shadowGenerator) {
                        this._effect.setMatrix("lightMatrix" + lightIndex, shadowGenerator.getTransformMatrix());
                        this._effect.setTexture("shadowSampler" + lightIndex, shadowGenerator.getShadowMap());
                        this._effect.setFloat("darkness" + lightIndex, shadowGenerator.getDarkness());
                    }
                    lightIndex++;
                    if (lightIndex == maxSimultaneousLights) break;
                }
            }
            if (scene.clipPlane) {
                var clipPlane = scene.clipPlane;
                this._effect.setFloat4("vClipPlane", clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.d);
            }
            if (scene.fogMode !== BABYLON.Scene.FOGMODE_NONE || this.reflectionTexture) {
                this._effect.setMatrix("view", scene.getViewMatrix());
            }
            if (scene.fogMode !== BABYLON.Scene.FOGMODE_NONE) {
                this._effect.setFloat4("vFogInfos", scene.fogMode, scene.fogStart, scene.fogEnd, scene.fogDensity);
                this._effect.setColor3("vFogColor", scene.fogColor);
            }
        };
        StandardMaterial.prototype.getAnimatables = function () {
            var results = [];
            if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
                results.push(this.diffuseTexture);
            }
            if (this.ambientTexture && this.ambientTexture.animations && this.ambientTexture.animations.length > 0) {
                results.push(this.ambientTexture);
            }
            if (this.opacityTexture && this.opacityTexture.animations && this.opacityTexture.animations.length > 0) {
                results.push(this.opacityTexture);
            }
            if (this.reflectionTexture && this.reflectionTexture.animations && this.reflectionTexture.animations.length > 0) {
                results.push(this.reflectionTexture);
            }
            if (this.emissiveTexture && this.emissiveTexture.animations && this.emissiveTexture.animations.length > 0) {
                results.push(this.emissiveTexture);
            }
            if (this.specularTexture && this.specularTexture.animations && this.specularTexture.animations.length > 0) {
                results.push(this.specularTexture);
            }
            if (this.bumpTexture && this.bumpTexture.animations && this.bumpTexture.animations.length > 0) {
                results.push(this.bumpTexture);
            }
            return results;
        };
        StandardMaterial.prototype.dispose = function (forceDisposeEffect) {
            if (this.diffuseTexture) {
                this.diffuseTexture.dispose();
            }
            if (this.ambientTexture) {
                this.ambientTexture.dispose();
            }
            if (this.opacityTexture) {
                this.opacityTexture.dispose();
            }
            if (this.reflectionTexture) {
                this.reflectionTexture.dispose();
            }
            if (this.emissiveTexture) {
                this.emissiveTexture.dispose();
            }
            if (this.specularTexture) {
                this.specularTexture.dispose();
            }
            if (this.bumpTexture) {
                this.bumpTexture.dispose();
            }
            _super.prototype.dispose.call(this, forceDisposeEffect);
        };
        StandardMaterial.prototype.clone = function (name) {
            var newStandardMaterial = new BABYLON.StandardMaterial(name, this.getScene());
            newStandardMaterial.checkReadyOnEveryCall = this.checkReadyOnEveryCall;
            newStandardMaterial.alpha = this.alpha;
            newStandardMaterial.wireframe = this.wireframe;
            newStandardMaterial.backFaceCulling = this.backFaceCulling;
            if (this.diffuseTexture && this.diffuseTexture.clone) {
                newStandardMaterial.diffuseTexture = this.diffuseTexture.clone();
            }
            if (this.ambientTexture && this.ambientTexture.clone) {
                newStandardMaterial.ambientTexture = this.ambientTexture.clone();
            }
            if (this.opacityTexture && this.opacityTexture.clone) {
                newStandardMaterial.opacityTexture = this.opacityTexture.clone();
            }
            if (this.reflectionTexture && this.reflectionTexture.clone) {
                newStandardMaterial.reflectionTexture = this.reflectionTexture.clone();
            }
            if (this.emissiveTexture && this.emissiveTexture.clone) {
                newStandardMaterial.emissiveTexture = this.emissiveTexture.clone();
            }
            if (this.specularTexture && this.specularTexture.clone) {
                newStandardMaterial.specularTexture = this.specularTexture.clone();
            }
            if (this.bumpTexture && this.bumpTexture.clone) {
                newStandardMaterial.bumpTexture = this.bumpTexture.clone();
            }
            newStandardMaterial.ambientColor = this.ambientColor.clone();
            newStandardMaterial.diffuseColor = this.diffuseColor.clone();
            newStandardMaterial.specularColor = this.specularColor.clone();
            newStandardMaterial.specularPower = this.specularPower;
            newStandardMaterial.emissiveColor = this.emissiveColor.clone();
            return newStandardMaterial;
        };
        StandardMaterial.DiffuseTextureEnabled = true;
        StandardMaterial.AmbientTextureEnabled = true;
        StandardMaterial.OpacityTextureEnabled = true;
        StandardMaterial.ReflectionTextureEnabled = true;
        StandardMaterial.EmissiveTextureEnabled = true;
        StandardMaterial.SpecularTextureEnabled = true;
        StandardMaterial.BumpTextureEnabled = true;
        return StandardMaterial;
    })(BABYLON.Material);
    BABYLON.StandardMaterial = StandardMaterial;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var MultiMaterial = (function (_super) {
        __extends(MultiMaterial, _super);

        function MultiMaterial(name, scene) {
            _super.call(this, name, scene, true);
            this.subMaterials = new Array();
            scene.multiMaterials.push(this);
        }
        MultiMaterial.prototype.getSubMaterial = function (index) {
            if (index < 0 || index >= this.subMaterials.length) {
                return this.getScene().defaultMaterial;
            }
            return this.subMaterials[index];
        };
        MultiMaterial.prototype.isReady = function (mesh) {
            for (var index = 0; index < this.subMaterials.length; index++) {
                var subMaterial = this.subMaterials[index];
                if (subMaterial) {
                    if (!this.subMaterials[index].isReady(mesh)) {
                        return false;
                    }
                }
            }
            return true;
        };
        return MultiMaterial;
    })(BABYLON.Material);
    BABYLON.MultiMaterial = MultiMaterial;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Database = (function () {
        function Database(urlToScene, callbackManifestChecked) {
            this.idbFactory = (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB);
            this.callbackManifestChecked = callbackManifestChecked;
            this.currentSceneUrl = BABYLON.Database.ReturnFullUrlLocation(urlToScene);
            this.db = null;
            this.enableSceneOffline = false;
            this.enableTexturesOffline = false;
            this.manifestVersionFound = 0;
            this.mustUpdateRessources = false;
            this.hasReachedQuota = false;
            this.checkManifestFile();
        }
        Database.prototype.checkManifestFile = function () {
            var _this = this;

            function noManifestFile() {
                BABYLON.Tools.Log("Valid manifest file not found. Scene & textures will be loaded directly from the web server.");
                that.enableSceneOffline = false;
                that.enableTexturesOffline = false;
                that.callbackManifestChecked(false);
            }
            var that = this;
            var manifestURL = this.currentSceneUrl + ".manifest";
            var xhr = new XMLHttpRequest();
            var manifestURLTimeStamped = manifestURL + (manifestURL.match(/\?/) == null ? "?" : "&") + (new Date()).getTime();
            xhr.open("GET", manifestURLTimeStamped, true);
            xhr.addEventListener("load", function () {
                if (xhr.status === 200 || BABYLON.Tools.ValidateXHRData(xhr, 1)) {
                    try {
                        var manifestFile = JSON.parse(xhr.response);
                        _this.enableSceneOffline = manifestFile.enableSceneOffline;
                        _this.enableTexturesOffline = manifestFile.enableTexturesOffline;
                        if (manifestFile.version && !isNaN(parseInt(manifestFile.version))) {
                            _this.manifestVersionFound = manifestFile.version;
                        }
                        if (_this.callbackManifestChecked) {
                            _this.callbackManifestChecked(true);
                        }
                    } catch (ex) {
                        noManifestFile();
                    }
                } else {
                    noManifestFile();
                }
            }, false);
            xhr.addEventListener("error", function (event) {
                noManifestFile();
            }, false);
            try {
                xhr.send();
            } catch (ex) {
                BABYLON.Tools.Error("Error on XHR send request.");
                that.callbackManifestChecked(false);
            }
        };
        Database.prototype.openAsync = function (successCallback, errorCallback) {
            var _this = this;

            function handleError() {
                that.isSupported = false;
                if (errorCallback) errorCallback();
            }
            var that = this;
            if (!this.idbFactory || !(this.enableSceneOffline || this.enableTexturesOffline)) {
                this.isSupported = false;
                if (errorCallback) errorCallback();
            } else {
                if (!this.db) {
                    this.hasReachedQuota = false;
                    this.isSupported = true;
                    var request = this.idbFactory.open("babylonjs", 1);
                    request.onerror = function (event) {
                        handleError();
                    };
                    request.onblocked = function (event) {
                        BABYLON.Tools.Error("IDB request blocked. Please reload the page.");
                        handleError();
                    };
                    request.onsuccess = function (event) {
                        _this.db = request.result;
                        successCallback();
                    };
                    request.onupgradeneeded = function (event) {
                        _this.db = (event.target).result;
                        try {
                            if (event.oldVersion > 0) {
                                _this.db.deleteObjectStore("scenes");
                                _this.db.deleteObjectStore("versions");
                                _this.db.deleteObjectStore("textures");
                            }
                            var scenesStore = _this.db.createObjectStore("scenes", {
                                keyPath: "sceneUrl"
                            });
                            var versionsStore = _this.db.createObjectStore("versions", {
                                keyPath: "sceneUrl"
                            });
                            var texturesStore = _this.db.createObjectStore("textures", {
                                keyPath: "textureUrl"
                            });
                        } catch (ex) {
                            BABYLON.Tools.Error("Error while creating object stores. Exception: " + ex.message);
                            handleError();
                        }
                    };
                } else {
                    if (successCallback) successCallback();
                }
            }
        };
        Database.prototype.loadImageFromDB = function (url, image) {
            var _this = this;
            var completeURL = BABYLON.Database.ReturnFullUrlLocation(url);
            var saveAndLoadImage = function () {
                    if (!_this.hasReachedQuota && _this.db !== null) {
                        _this._saveImageIntoDBAsync(completeURL, image);
                    } else {
                        image.src = url;
                    }
                };
            if (!this.mustUpdateRessources) {
                this._loadImageFromDBAsync(completeURL, image, saveAndLoadImage);
            } else {
                saveAndLoadImage();
            }
        };
        Database.prototype._loadImageFromDBAsync = function (url, image, notInDBCallback) {
            if (this.isSupported && this.db !== null) {
                var texture;
                var transaction = this.db.transaction(["textures"]);
                transaction.onabort = function (event) {
                    image.src = url;
                };
                transaction.oncomplete = function (event) {
                    var blobTextureURL;
                    if (texture) {
                        var URL = window.URL || window.webkitURL;
                        blobTextureURL = URL.createObjectURL(texture.data, {
                            oneTimeOnly: true
                        });
                        image.onerror = function () {
                            BABYLON.Tools.Error("Error loading image from blob URL: " + blobTextureURL + " switching back to web url: " + url);
                            image.src = url;
                        };
                        image.src = blobTextureURL;
                    } else {
                        notInDBCallback();
                    }
                };
                var getRequest = transaction.objectStore("textures").get(url);
                getRequest.onsuccess = function (event) {
                    texture = (event.target).result;
                };
                getRequest.onerror = function (event) {
                    BABYLON.Tools.Error("Error loading texture " + url + " from DB.");
                    image.src = url;
                };
            } else {
                BABYLON.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");
                image.src = url;
            }
        };
        Database.prototype._saveImageIntoDBAsync = function (url, image) {
            var _this = this;
            if (this.isSupported) {
                var generateBlobUrl = function () {
                        var blobTextureURL;
                        if (blob) {
                            var URL = window.URL || window.webkitURL;
                            try {
                                blobTextureURL = URL.createObjectURL(blob, {
                                    oneTimeOnly: true
                                });
                            } catch (ex) {
                                blobTextureURL = URL.createObjectURL(blob);
                            }
                        }
                        image.src = blobTextureURL;
                    };
                if (BABYLON.Database.isUASupportingBlobStorage) {
                    var xhr = new XMLHttpRequest(),
                        blob;
                    xhr.open("GET", url, true);
                    xhr.responseType = "blob";
                    xhr.addEventListener("load", function () {
                        if (xhr.status === 200) {
                            blob = xhr.response;
                            var transaction = _this.db.transaction(["textures"], "readwrite");
                            transaction.onabort = function (event) {
                                try {
                                    if (event.srcElement.error.name === "QuotaExceededError") {
                                        this.hasReachedQuota = true;
                                    }
                                } catch (ex) {}
                                generateBlobUrl();
                            };
                            transaction.oncomplete = function (event) {
                                generateBlobUrl();
                            };
                            var newTexture = {
                                textureUrl: url,
                                data: blob
                            };
                            try {
                                var addRequest = transaction.objectStore("textures").put(newTexture);
                                addRequest.onsuccess = function (event) {};
                                addRequest.onerror = function (event) {
                                    generateBlobUrl();
                                };
                            } catch (ex) {
                                if (ex.code === 25) {
                                    BABYLON.Database.isUASupportingBlobStorage = false;
                                }
                                image.src = url;
                            }
                        } else {
                            image.src = url;
                        }
                    }, false);
                    xhr.addEventListener("error", function (event) {
                        BABYLON.Tools.Error("Error in XHR request in BABYLON.Database.");
                        image.src = url;
                    }, false);
                    xhr.send();
                } else {
                    image.src = url;
                }
            } else {
                BABYLON.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");
                image.src = url;
            }
        };
        Database.prototype._checkVersionFromDB = function (url, versionLoaded) {
            var _this = this;
            var updateVersion = function (event) {
                    _this._saveVersionIntoDBAsync(url, versionLoaded);
                };
            this._loadVersionFromDBAsync(url, versionLoaded, updateVersion);
        };
        Database.prototype._loadVersionFromDBAsync = function (url, callback, updateInDBCallback) {
            var _this = this;
            if (this.isSupported) {
                var version;
                try {
                    var transaction = this.db.transaction(["versions"]);
                    transaction.oncomplete = function (event) {
                        if (version) {
                            if (_this.manifestVersionFound > version.data) {
                                _this.mustUpdateRessources = true;
                                updateInDBCallback();
                            } else {
                                callback(version.data);
                            }
                        } else {
                            _this.mustUpdateRessources = true;
                            updateInDBCallback();
                        }
                    };
                    transaction.onabort = function (event) {
                        callback(-1);
                    };
                    var getRequest = transaction.objectStore("versions").get(url);
                    getRequest.onsuccess = function (event) {
                        version = (event.target).result;
                    };
                    getRequest.onerror = function (event) {
                        BABYLON.Tools.Error("Error loading version for scene " + url + " from DB.");
                        callback(-1);
                    };
                } catch (ex) {
                    BABYLON.Tools.Error("Error while accessing 'versions' object store (READ OP). Exception: " + ex.message);
                    callback(-1);
                }
            } else {
                BABYLON.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");
                callback(-1);
            }
        };
        Database.prototype._saveVersionIntoDBAsync = function (url, callback) {
            var _this = this;
            if (this.isSupported && !this.hasReachedQuota) {
                try {
                    var transaction = this.db.transaction(["versions"], "readwrite");
                    transaction.onabort = function (event) {
                        try {
                            if (event.srcElement.error.name === "QuotaExceededError") {
                                _this.hasReachedQuota = true;
                            }
                        } catch (ex) {}
                        callback(-1);
                    };
                    transaction.oncomplete = function (event) {
                        callback(_this.manifestVersionFound);
                    };
                    var newVersion = {
                        sceneUrl: url,
                        data: this.manifestVersionFound
                    };
                    var addRequest = transaction.objectStore("versions").put(newVersion);
                    addRequest.onsuccess = function (event) {};
                    addRequest.onerror = function (event) {
                        BABYLON.Tools.Error("Error in DB add version request in BABYLON.Database.");
                    };
                } catch (ex) {
                    BABYLON.Tools.Error("Error while accessing 'versions' object store (WRITE OP). Exception: " + ex.message);
                    callback(-1);
                }
            } else {
                callback(-1);
            }
        };
        Database.prototype.loadFileFromDB = function (url, sceneLoaded, progressCallBack, errorCallback, useArrayBuffer) {
            var _this = this;
            var completeUrl = BABYLON.Database.ReturnFullUrlLocation(url);
            var saveAndLoadFile = function (event) {
                    _this._saveFileIntoDBAsync(completeUrl, sceneLoaded, progressCallBack);
                };
            this._checkVersionFromDB(completeUrl, function (version) {
                if (version !== -1) {
                    if (!_this.mustUpdateRessources) {
                        _this._loadFileFromDBAsync(completeUrl, sceneLoaded, saveAndLoadFile, useArrayBuffer);
                    } else {
                        _this._saveFileIntoDBAsync(completeUrl, sceneLoaded, progressCallBack, useArrayBuffer);
                    }
                } else {
                    errorCallback();
                }
            });
        };
        Database.prototype._loadFileFromDBAsync = function (url, callback, notInDBCallback, useArrayBuffer) {
            if (this.isSupported) {
                var targetStore;
                if (url.indexOf(".babylon") !== -1) {
                    targetStore = "scenes";
                } else {
                    targetStore = "textures";
                }
                var file;
                var transaction = this.db.transaction([targetStore]);
                transaction.oncomplete = function (event) {
                    if (file) {
                        callback(file.data);
                    } else {
                        notInDBCallback();
                    }
                };
                transaction.onabort = function (event) {
                    notInDBCallback();
                };
                var getRequest = transaction.objectStore(targetStore).get(url);
                getRequest.onsuccess = function (event) {
                    file = (event.target).result;
                };
                getRequest.onerror = function (event) {
                    BABYLON.Tools.Error("Error loading file " + url + " from DB.");
                    notInDBCallback();
                };
            } else {
                BABYLON.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");
                callback();
            }
        };
        Database.prototype._saveFileIntoDBAsync = function (url, callback, progressCallback, useArrayBuffer) {
            var _this = this;
            if (this.isSupported) {
                var targetStore;
                if (url.indexOf(".babylon") !== -1) {
                    targetStore = "scenes";
                } else {
                    targetStore = "textures";
                }
                var xhr = new XMLHttpRequest(),
                    fileData;
                xhr.open("GET", url, true);
                if (useArrayBuffer) {
                    xhr.responseType = "arraybuffer";
                }
                xhr.onprogress = progressCallback;
                xhr.addEventListener("load", function () {
                    if (xhr.status === 200 || BABYLON.Tools.ValidateXHRData(xhr, !useArrayBuffer ? 1 : 6)) {
                        fileData = !useArrayBuffer ? xhr.responseText : xhr.response;
                        if (!_this.hasReachedQuota) {
                            var transaction = _this.db.transaction([targetStore], "readwrite");
                            transaction.onabort = function (event) {
                                try {
                                    if (event.srcElement.error.name === "QuotaExceededError") {
                                        this.hasReachedQuota = true;
                                    }
                                } catch (ex) {}
                                callback(fileData);
                            };
                            transaction.oncomplete = function (event) {
                                callback(fileData);
                            };
                            var newFile;
                            if (targetStore === "scenes") {
                                newFile = {
                                    sceneUrl: url,
                                    data: fileData,
                                    version: _this.manifestVersionFound
                                };
                            } else {
                                newFile = {
                                    textureUrl: url,
                                    data: fileData
                                };
                            }
                            try {
                                var addRequest = transaction.objectStore(targetStore).put(newFile);
                                addRequest.onsuccess = function (event) {};
                                addRequest.onerror = function (event) {
                                    BABYLON.Tools.Error("Error in DB add file request in BABYLON.Database.");
                                };
                            } catch (ex) {
                                callback(fileData);
                            }
                        } else {
                            callback(fileData);
                        }
                    } else {
                        callback();
                    }
                }, false);
                xhr.addEventListener("error", function (event) {
                    BABYLON.Tools.Error("error on XHR request.");
                    callback();
                }, false);
                xhr.send();
            } else {
                BABYLON.Tools.Error("Error: IndexedDB not supported by your browser or BabylonJS Database is not open.");
                callback();
            }
        };
        Database.isUASupportingBlobStorage = true;
        Database.parseURL = function (url) {
            var a = document.createElement('a');
            a.href = url;
            var fileName = url.substring(url.lastIndexOf("/") + 1, url.length);
            var absLocation = url.substring(0, url.indexOf(fileName, 0));
            return absLocation;
        };
        Database.ReturnFullUrlLocation = function (url) {
            if (url.indexOf("http:/") === -1) {
                return (BABYLON.Database.parseURL(window.location.href) + url);
            } else {
                return url;
            }
        };
        return Database;
    })();
    BABYLON.Database = Database;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var SpriteManager = (function () {
        function SpriteManager(name, imgUrl, capacity, cellSize, scene, epsilon) {
            this.name = name;
            this.cellSize = cellSize;
            this.sprites = new Array();
            this.renderingGroupId = 0;
            this._vertexDeclaration = [3, 4, 4, 4];
            this._vertexStrideSize = 15 * 4;
            this._capacity = capacity;
            this._spriteTexture = new BABYLON.Texture(imgUrl, scene, true, false);
            this._spriteTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this._spriteTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this._epsilon = epsilon === undefined ? 0.01 : epsilon;
            this._scene = scene;
            this._scene.spriteManagers.push(this);
            this._vertexDeclaration = [3, 4, 4, 4];
            this._vertexStrideSize = 15 * 4;
            this._vertexBuffer = scene.getEngine().createDynamicVertexBuffer(capacity * this._vertexStrideSize * 4);
            var indices = [];
            var index = 0;
            for (var count = 0; count < capacity; count++) {
                indices.push(index);
                indices.push(index + 1);
                indices.push(index + 2);
                indices.push(index);
                indices.push(index + 2);
                indices.push(index + 3);
                index += 4;
            }
            this._indexBuffer = scene.getEngine().createIndexBuffer(indices);
            this._vertices = new Float32Array(capacity * this._vertexStrideSize);
            this._effectBase = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest"], ["diffuseSampler"], "");
            this._effectFog = this._scene.getEngine().createEffect("sprites", ["position", "options", "cellInfo", "color"], ["view", "projection", "textureInfos", "alphaTest", "vFogInfos", "vFogColor"], ["diffuseSampler"], "#define FOG");
        }
        SpriteManager.prototype._appendSpriteVertex = function (index, sprite, offsetX, offsetY, rowSize) {
            var arrayOffset = index * 15;
            if (offsetX == 0) offsetX = this._epsilon;
            else if (offsetX == 1) offsetX = 1 - this._epsilon;
            if (offsetY == 0) offsetY = this._epsilon;
            else if (offsetY == 1) offsetY = 1 - this._epsilon;
            this._vertices[arrayOffset] = sprite.position.x;
            this._vertices[arrayOffset + 1] = sprite.position.y;
            this._vertices[arrayOffset + 2] = sprite.position.z;
            this._vertices[arrayOffset + 3] = sprite.angle;
            this._vertices[arrayOffset + 4] = sprite.size;
            this._vertices[arrayOffset + 5] = offsetX;
            this._vertices[arrayOffset + 6] = offsetY;
            this._vertices[arrayOffset + 7] = sprite.invertU ? 1 : 0;
            this._vertices[arrayOffset + 8] = sprite.invertV ? 1 : 0;
            var offset = (sprite.cellIndex / rowSize) >> 0;
            this._vertices[arrayOffset + 9] = sprite.cellIndex - offset * rowSize;
            this._vertices[arrayOffset + 10] = offset;
            this._vertices[arrayOffset + 11] = sprite.color.r;
            this._vertices[arrayOffset + 12] = sprite.color.g;
            this._vertices[arrayOffset + 13] = sprite.color.b;
            this._vertices[arrayOffset + 14] = sprite.color.a;
        };
        SpriteManager.prototype.render = function () {
            if (!this._effectBase.isReady() || !this._effectFog.isReady() || !this._spriteTexture || !this._spriteTexture.isReady()) return;
            var engine = this._scene.getEngine();
            var baseSize = this._spriteTexture.getBaseSize();
            var deltaTime = BABYLON.Tools.GetDeltaTime();
            var max = Math.min(this._capacity, this.sprites.length);
            var rowSize = baseSize.width / this.cellSize;
            var offset = 0;
            for (var index = 0; index < max; index++) {
                var sprite = this.sprites[index];
                if (!sprite) {
                    continue;
                }
                sprite._animate(deltaTime);
                this._appendSpriteVertex(offset++, sprite, 0, 0, rowSize);
                this._appendSpriteVertex(offset++, sprite, 1, 0, rowSize);
                this._appendSpriteVertex(offset++, sprite, 1, 1, rowSize);
                this._appendSpriteVertex(offset++, sprite, 0, 1, rowSize);
            }
            engine.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices, max * this._vertexStrideSize);
            var effect = this._effectBase;
            if (this._scene.fogMode !== BABYLON.Scene.FOGMODE_NONE) {
                effect = this._effectFog;
            }
            engine.enableEffect(effect);
            var viewMatrix = this._scene.getViewMatrix();
            effect.setTexture("diffuseSampler", this._spriteTexture);
            effect.setMatrix("view", viewMatrix);
            effect.setMatrix("projection", this._scene.getProjectionMatrix());
            effect.setFloat2("textureInfos", this.cellSize / baseSize.width, this.cellSize / baseSize.height);
            if (this._scene.fogMode !== BABYLON.Scene.FOGMODE_NONE) {
                effect.setFloat4("vFogInfos", this._scene.fogMode, this._scene.fogStart, this._scene.fogEnd, this._scene.fogDensity);
                effect.setColor3("vFogColor", this._scene.fogColor);
            }
            engine.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, effect);
            effect.setBool("alphaTest", true);
            engine.setColorWrite(false);
            engine.draw(true, 0, max * 6);
            engine.setColorWrite(true);
            effect.setBool("alphaTest", false);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);
            engine.draw(true, 0, max * 6);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
        };
        SpriteManager.prototype.dispose = function () {
            if (this._vertexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
            }
            if (this._indexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
            if (this._spriteTexture) {
                this._spriteTexture.dispose();
                this._spriteTexture = null;
            }
            var index = this._scene.spriteManagers.indexOf(this);
            this._scene.spriteManagers.splice(index, 1);
            if (this.onDispose) {
                this.onDispose();
            }
        };
        return SpriteManager;
    })();
    BABYLON.SpriteManager = SpriteManager;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Sprite = (function () {
        function Sprite(name, manager) {
            this.name = name;
            this.color = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
            this.size = 1.0;
            this.angle = 0;
            this.cellIndex = 0;
            this.invertU = 0;
            this.invertV = 0;
            this.animations = new Array();
            this._animationStarted = false;
            this._loopAnimation = false;
            this._fromIndex = 0;
            this._toIndex = 0;
            this._delay = 0;
            this._direction = 1;
            this._frameCount = 0;
            this._time = 0;
            this._manager = manager;
            this._manager.sprites.push(this);
            this.position = BABYLON.Vector3.Zero();
        }
        Sprite.prototype.playAnimation = function (from, to, loop, delay) {
            this._fromIndex = from;
            this._toIndex = to;
            this._loopAnimation = loop;
            this._delay = delay;
            this._animationStarted = true;
            this._direction = from < to ? 1 : -1;
            this.cellIndex = from;
            this._time = 0;
        };
        Sprite.prototype.stopAnimation = function () {
            this._animationStarted = false;
        };
        Sprite.prototype._animate = function (deltaTime) {
            if (!this._animationStarted) return;
            this._time += deltaTime;
            if (this._time > this._delay) {
                this._time = this._time % this._delay;
                this.cellIndex += this._direction;
                if (this.cellIndex == this._toIndex) {
                    if (this._loopAnimation) {
                        this.cellIndex = this._fromIndex;
                    } else {
                        this._animationStarted = false;
                        if (this.disposeWhenFinishedAnimating) {
                            this.dispose();
                        }
                    }
                }
            }
        };
        Sprite.prototype.dispose = function () {
            for (var i = 0; i < this._manager.sprites.length; i++) {
                if (this._manager.sprites[i] == this) {
                    this._manager.sprites.splice(i, 1);
                }
            }
        };
        return Sprite;
    })();
    BABYLON.Sprite = Sprite;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Layer = (function () {
        function Layer(name, imgUrl, scene, isBackground, color) {
            this.name = name;
            this._vertexDeclaration = [2];
            this._vertexStrideSize = 2 * 4;
            this.texture = imgUrl ? new BABYLON.Texture(imgUrl, scene, true) : null;
            this.isBackground = isBackground === undefined ? true : isBackground;
            this.color = color === undefined ? new BABYLON.Color4(1, 1, 1, 1) : color;
            this._scene = scene;
            this._scene.layers.push(this);
            var vertices = [];
            vertices.push(1, 1);
            vertices.push(-1, 1);
            vertices.push(-1, -1);
            vertices.push(1, -1);
            this._vertexBuffer = scene.getEngine().createVertexBuffer(vertices);
            var indices = [];
            indices.push(0);
            indices.push(1);
            indices.push(2);
            indices.push(0);
            indices.push(2);
            indices.push(3);
            this._indexBuffer = scene.getEngine().createIndexBuffer(indices);
            this._effect = this._scene.getEngine().createEffect("layer", ["position"], ["textureMatrix", "color"], ["textureSampler"], "");
        }
        Layer.prototype.render = function () {
            if (!this._effect.isReady() || !this.texture || !this.texture.isReady()) return;
            var engine = this._scene.getEngine();
            engine.enableEffect(this._effect);
            engine.setState(false);
            this._effect.setTexture("textureSampler", this.texture);
            this._effect.setMatrix("textureMatrix", this.texture.getTextureMatrix());
            this._effect.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a);
            engine.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);
            engine.draw(true, 0, 6);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
        };
        Layer.prototype.dispose = function () {
            if (this._vertexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
            }
            if (this._indexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
            if (this.texture) {
                this.texture.dispose();
                this.texture = null;
            }
            var index = this._scene.layers.indexOf(this);
            this._scene.layers.splice(index, 1);
            if (this.onDispose) {
                this.onDispose();
            }
        };
        return Layer;
    })();
    BABYLON.Layer = Layer;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Particle = (function () {
        function Particle() {
            this.position = BABYLON.Vector3.Zero();
            this.direction = BABYLON.Vector3.Zero();
            this.color = new BABYLON.Color4(0, 0, 0, 0);
            this.colorStep = new BABYLON.Color4(0, 0, 0, 0);
            this.lifeTime = 1.0;
            this.age = 0;
            this.size = 0;
            this.angle = 0;
            this.angularSpeed = 0;
        }
        return Particle;
    })();
    BABYLON.Particle = Particle;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var randomNumber = function (min, max) {
            if (min == max) {
                return (min);
            }
            var random = Math.random();
            return ((random * (max - min)) + min);
        };
    var ParticleSystem = (function () {
        function ParticleSystem(name, capacity, scene, fragmentElement) {
            var _this = this;
            this.name = name;
            this.fragmentElement = fragmentElement;
            this.renderingGroupId = 0;
            this.emitter = null;
            this.emitRate = 10;
            this.manualEmitCount = -1;
            this.updateSpeed = 0.01;
            this.targetStopDuration = 0;
            this.disposeOnStop = false;
            this.minEmitPower = 1;
            this.maxEmitPower = 1;
            this.minLifeTime = 1;
            this.maxLifeTime = 1;
            this.minSize = 1;
            this.maxSize = 1;
            this.minAngularSpeed = 0;
            this.maxAngularSpeed = 0;
            this.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            this.forceDepthWrite = false;
            this.gravity = BABYLON.Vector3.Zero();
            this.direction1 = new BABYLON.Vector3(0, 1.0, 0);
            this.direction2 = new BABYLON.Vector3(0, 1.0, 0);
            this.minEmitBox = new BABYLON.Vector3(-0.5, -0.5, -0.5);
            this.maxEmitBox = new BABYLON.Vector3(0.5, 0.5, 0.5);
            this.color1 = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
            this.color2 = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
            this.colorDead = new BABYLON.Color4(0, 0, 0, 1.0);
            this.textureMask = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
            this.particles = new Array();
            this._vertexDeclaration = [3, 4, 4];
            this._vertexStrideSize = 11 * 4;
            this._stockParticles = new Array();
            this._newPartsExcess = 0;
            this._scaledColorStep = new BABYLON.Color4(0, 0, 0, 0);
            this._colorDiff = new BABYLON.Color4(0, 0, 0, 0);
            this._scaledDirection = BABYLON.Vector3.Zero();
            this._scaledGravity = BABYLON.Vector3.Zero();
            this._currentRenderId = -1;
            this._started = false;
            this._stopped = false;
            this._actualFrame = 0;
            this.id = name;
            this._capacity = capacity;
            this._scene = scene;
            scene.particleSystems.push(this);
            this._vertexBuffer = scene.getEngine().createDynamicVertexBuffer(capacity * this._vertexStrideSize * 4);
            var indices = [];
            var index = 0;
            for (var count = 0; count < capacity; count++) {
                indices.push(index);
                indices.push(index + 1);
                indices.push(index + 2);
                indices.push(index);
                indices.push(index + 2);
                indices.push(index + 3);
                index += 4;
            }
            this._indexBuffer = scene.getEngine().createIndexBuffer(indices);
            this._vertices = new Float32Array(capacity * this._vertexStrideSize);
            this.startDirectionFunction = function (emitPower, worldMatrix, directionToUpdate) {
                var randX = randomNumber(_this.direction1.x, _this.direction2.x);
                var randY = randomNumber(_this.direction1.y, _this.direction2.y);
                var randZ = randomNumber(_this.direction1.z, _this.direction2.z);
                BABYLON.Vector3.TransformNormalFromFloatsToRef(randX * emitPower, randY * emitPower, randZ * emitPower, worldMatrix, directionToUpdate);
            };
            this.startPositionFunction = function (worldMatrix, positionToUpdate) {
                var randX = randomNumber(_this.minEmitBox.x, _this.maxEmitBox.x);
                var randY = randomNumber(_this.minEmitBox.y, _this.maxEmitBox.y);
                var randZ = randomNumber(_this.minEmitBox.z, _this.maxEmitBox.z);
                BABYLON.Vector3.TransformCoordinatesFromFloatsToRef(randX, randY, randZ, worldMatrix, positionToUpdate);
            };
        }
        ParticleSystem.prototype.getCapacity = function () {
            return this._capacity;
        };
        ParticleSystem.prototype.isAlive = function () {
            return this._alive;
        };
        ParticleSystem.prototype.isStarted = function () {
            return this._started;
        };
        ParticleSystem.prototype.start = function () {
            this._started = true;
            this._stopped = false;
            this._actualFrame = 0;
        };
        ParticleSystem.prototype.stop = function () {
            this._stopped = true;
        };
        ParticleSystem.prototype._appendParticleVertex = function (index, particle, offsetX, offsetY) {
            var offset = index * 11;
            this._vertices[offset] = particle.position.x;
            this._vertices[offset + 1] = particle.position.y;
            this._vertices[offset + 2] = particle.position.z;
            this._vertices[offset + 3] = particle.color.r;
            this._vertices[offset + 4] = particle.color.g;
            this._vertices[offset + 5] = particle.color.b;
            this._vertices[offset + 6] = particle.color.a;
            this._vertices[offset + 7] = particle.angle;
            this._vertices[offset + 8] = particle.size;
            this._vertices[offset + 9] = offsetX;
            this._vertices[offset + 10] = offsetY;
        };
        ParticleSystem.prototype._update = function (newParticles) {
            this._alive = this.particles.length > 0;
            for (var index = 0; index < this.particles.length; index++) {
                var particle = this.particles[index];
                particle.age += this._scaledUpdateSpeed;
                if (particle.age >= particle.lifeTime) {
                    this._stockParticles.push(this.particles.splice(index, 1)[0]);
                    index--;
                    continue;
                } else {
                    particle.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep);
                    particle.color.addInPlace(this._scaledColorStep);
                    if (particle.color.a < 0) particle.color.a = 0;
                    particle.angle += particle.angularSpeed * this._scaledUpdateSpeed;
                    particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                    particle.position.addInPlace(this._scaledDirection);
                    this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                    particle.direction.addInPlace(this._scaledGravity);
                }
            }
            var worldMatrix;
            if (this.emitter.position) {
                worldMatrix = this.emitter.getWorldMatrix();
            } else {
                worldMatrix = BABYLON.Matrix.Translation(this.emitter.x, this.emitter.y, this.emitter.z);
            }
            for (index = 0; index < newParticles; index++) {
                if (this.particles.length == this._capacity) {
                    break;
                }
                if (this._stockParticles.length !== 0) {
                    particle = this._stockParticles.pop();
                    particle.age = 0;
                } else {
                    particle = new BABYLON.Particle();
                }
                this.particles.push(particle);
                var emitPower = randomNumber(this.minEmitPower, this.maxEmitPower);
                this.startDirectionFunction(emitPower, worldMatrix, particle.direction);
                particle.lifeTime = randomNumber(this.minLifeTime, this.maxLifeTime);
                particle.size = randomNumber(this.minSize, this.maxSize);
                particle.angularSpeed = randomNumber(this.minAngularSpeed, this.maxAngularSpeed);
                this.startPositionFunction(worldMatrix, particle.position);
                var step = randomNumber(0, 1.0);
                BABYLON.Color4.LerpToRef(this.color1, this.color2, step, particle.color);
                this.colorDead.subtractToRef(particle.color, this._colorDiff);
                this._colorDiff.scaleToRef(1.0 / particle.lifeTime, particle.colorStep);
            }
        };
        ParticleSystem.prototype._getEffect = function () {
            var defines = [];
            if (this._scene.clipPlane) {
                defines.push("#define CLIPPLANE");
            }
            var join = defines.join("\n");
            if (this._cachedDefines != join) {
                this._cachedDefines = join;
                var baseName;
                if (this.fragmentElement) {
                    baseName = {
                        vertex: "particles",
                        fragmentElement: this.fragmentElement
                    };
                } else {
                    baseName = "particles";
                }
                this._effect = this._scene.getEngine().createEffect(baseName, ["position", "color", "options"], ["invView", "view", "projection", "vClipPlane", "textureMask"], ["diffuseSampler"], join);
            }
            return this._effect;
        };
        ParticleSystem.prototype.animate = function () {
            if (!this._started) return;
            var effect = this._getEffect();
            if (!this.emitter || !effect.isReady() || !this.particleTexture || !this.particleTexture.isReady()) return;
            if (this._currentRenderId === this._scene.getRenderId()) {
                return;
            }
            this._currentRenderId = this._scene.getRenderId();
            this._scaledUpdateSpeed = this.updateSpeed * this._scene.getAnimationRatio();
            var emitCout;
            if (this.manualEmitCount > -1) {
                emitCout = this.manualEmitCount;
                this.manualEmitCount = 0;
            } else {
                emitCout = this.emitRate;
            }
            var newParticles = ((emitCout * this._scaledUpdateSpeed) >> 0);
            this._newPartsExcess += emitCout * this._scaledUpdateSpeed - newParticles;
            if (this._newPartsExcess > 1.0) {
                newParticles += this._newPartsExcess >> 0;
                this._newPartsExcess -= this._newPartsExcess >> 0;
            }
            this._alive = false;
            if (!this._stopped) {
                this._actualFrame += this._scaledUpdateSpeed;
                if (this.targetStopDuration && this._actualFrame >= this.targetStopDuration) this.stop();
            } else {
                newParticles = 0;
            }
            this._update(newParticles);
            if (this._stopped) {
                if (!this._alive) {
                    this._started = false;
                    if (this.disposeOnStop) {
                        this._scene._toBeDisposed.push(this);
                    }
                }
            }
            var offset = 0;
            for (var index = 0; index < this.particles.length; index++) {
                var particle = this.particles[index];
                this._appendParticleVertex(offset++, particle, 0, 0);
                this._appendParticleVertex(offset++, particle, 1, 0);
                this._appendParticleVertex(offset++, particle, 1, 1);
                this._appendParticleVertex(offset++, particle, 0, 1);
            }
            var engine = this._scene.getEngine();
            engine.updateDynamicVertexBuffer(this._vertexBuffer, this._vertices, this.particles.length * this._vertexStrideSize);
        };
        ParticleSystem.prototype.render = function () {
            var effect = this._getEffect();
            if (!this.emitter || !effect.isReady() || !this.particleTexture || !this.particleTexture.isReady() || !this.particles.length) return 0;
            var engine = this._scene.getEngine();
            engine.enableEffect(effect);
            var viewMatrix = this._scene.getViewMatrix();
            effect.setTexture("diffuseSampler", this.particleTexture);
            effect.setMatrix("view", viewMatrix);
            effect.setMatrix("projection", this._scene.getProjectionMatrix());
            effect.setFloat4("textureMask", this.textureMask.r, this.textureMask.g, this.textureMask.b, this.textureMask.a);
            if (this._scene.clipPlane) {
                var clipPlane = this._scene.clipPlane;
                var invView = viewMatrix.clone();
                invView.invert();
                effect.setMatrix("invView", invView);
                effect.setFloat4("vClipPlane", clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.d);
            }
            engine.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, effect);
            if (this.blendMode === BABYLON.ParticleSystem.BLENDMODE_ONEONE) {
                engine.setAlphaMode(BABYLON.Engine.ALPHA_ADD);
            } else {
                engine.setAlphaMode(BABYLON.Engine.ALPHA_COMBINE);
            }
            if (this.forceDepthWrite) {
                engine.setDepthWrite(true);
            }
            engine.draw(true, 0, this.particles.length * 6);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
            return this.particles.length;
        };
        ParticleSystem.prototype.dispose = function () {
            if (this._vertexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
            }
            if (this._indexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
            if (this.particleTexture) {
                this.particleTexture.dispose();
                this.particleTexture = null;
            }
            var index = this._scene.particleSystems.indexOf(this);
            this._scene.particleSystems.splice(index, 1);
            if (this.onDispose) {
                this.onDispose();
            }
        };
        ParticleSystem.prototype.clone = function (name, newEmitter) {
            var result = new BABYLON.ParticleSystem(name, this._capacity, this._scene);
            BABYLON.Tools.DeepCopy(this, result, ["particles"], ["_vertexDeclaration", "_vertexStrideSize"]);
            if (newEmitter === undefined) {
                newEmitter = this.emitter;
            }
            result.emitter = newEmitter;
            if (this.particleTexture) {
                result.particleTexture = new BABYLON.Texture(this.particleTexture.url, this._scene);
            }
            result.start();
            return result;
        };
        ParticleSystem.BLENDMODE_ONEONE = 0;
        ParticleSystem.BLENDMODE_STANDARD = 1;
        return ParticleSystem;
    })();
    BABYLON.ParticleSystem = ParticleSystem;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Animation = (function () {
        function Animation(name, targetProperty, framePerSecond, dataType, loopMode) {
            this.name = name;
            this.targetProperty = targetProperty;
            this.framePerSecond = framePerSecond;
            this.dataType = dataType;
            this.loopMode = loopMode;
            this._offsetsCache = {};
            this._highLimitsCache = {};
            this._stopped = false;
            this.targetPropertyPath = targetProperty.split(".");
            this.dataType = dataType;
            this.loopMode = loopMode === undefined ? Animation.ANIMATIONLOOPMODE_CYCLE : loopMode;
        }
        Animation.prototype.isStopped = function () {
            return this._stopped;
        };
        Animation.prototype.getKeys = function () {
            return this._keys;
        };
        Animation.prototype.floatInterpolateFunction = function (startValue, endValue, gradient) {
            return startValue + (endValue - startValue) * gradient;
        };
        Animation.prototype.quaternionInterpolateFunction = function (startValue, endValue, gradient) {
            return BABYLON.Quaternion.Slerp(startValue, endValue, gradient);
        };
        Animation.prototype.vector3InterpolateFunction = function (startValue, endValue, gradient) {
            return BABYLON.Vector3.Lerp(startValue, endValue, gradient);
        };
        Animation.prototype.color3InterpolateFunction = function (startValue, endValue, gradient) {
            return BABYLON.Color3.Lerp(startValue, endValue, gradient);
        };
        Animation.prototype.clone = function () {
            var clone = new Animation(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.loopMode);
            clone.setKeys(this._keys);
            return clone;
        };
        Animation.prototype.setKeys = function (values) {
            this._keys = values.slice(0);
            this._offsetsCache = {};
            this._highLimitsCache = {};
        };
        Animation.prototype._interpolate = function (currentFrame, repeatCount, loopMode, offsetValue, highLimitValue) {
            if (loopMode === Animation.ANIMATIONLOOPMODE_CONSTANT && repeatCount > 0) {
                return highLimitValue.clone ? highLimitValue.clone() : highLimitValue;
            }
            this.currentFrame = currentFrame;
            for (var key = 0; key < this._keys.length; key++) {
                if (this._keys[key + 1].frame >= currentFrame) {
                    var startValue = this._keys[key].value;
                    var endValue = this._keys[key + 1].value;
                    var gradient = (currentFrame - this._keys[key].frame) / (this._keys[key + 1].frame - this._keys[key].frame);
                    switch (this.dataType) {
                    case Animation.ANIMATIONTYPE_FLOAT:
                        switch (loopMode) {
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                            return this.floatInterpolateFunction(startValue, endValue, gradient);
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                            return offsetValue * repeatCount + this.floatInterpolateFunction(startValue, endValue, gradient);
                        }
                        break;
                    case Animation.ANIMATIONTYPE_QUATERNION:
                        var quaternion = null;
                        switch (loopMode) {
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                            quaternion = this.quaternionInterpolateFunction(startValue, endValue, gradient);
                            break;
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                            quaternion = this.quaternionInterpolateFunction(startValue, endValue, gradient).add(offsetValue.scale(repeatCount));
                            break;
                        }
                        return quaternion;
                    case Animation.ANIMATIONTYPE_VECTOR3:
                        switch (loopMode) {
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                            return this.vector3InterpolateFunction(startValue, endValue, gradient);
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                            return this.vector3InterpolateFunction(startValue, endValue, gradient).add(offsetValue.scale(repeatCount));
                        }
                    case Animation.ANIMATIONTYPE_COLOR3:
                        switch (loopMode) {
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                            return this.color3InterpolateFunction(startValue, endValue, gradient);
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                            return this.color3InterpolateFunction(startValue, endValue, gradient).add(offsetValue.scale(repeatCount));
                        }
                    case Animation.ANIMATIONTYPE_MATRIX:
                        switch (loopMode) {
                        case Animation.ANIMATIONLOOPMODE_CYCLE:
                        case Animation.ANIMATIONLOOPMODE_CONSTANT:
                        case Animation.ANIMATIONLOOPMODE_RELATIVE:
                            return startValue;
                        }
                    default:
                        break;
                    }
                    break;
                }
            }
            return this._keys[this._keys.length - 1].value;
        };
        Animation.prototype.animate = function (delay, from, to, loop, speedRatio) {
            if (!this.targetPropertyPath || this.targetPropertyPath.length < 1) {
                this._stopped = true;
                return false;
            }
            var returnValue = true;
            if (this._keys[0].frame != 0) {
                var newKey = {
                    frame: 0,
                    value: this._keys[0].value
                };
                this._keys.splice(0, 0, newKey);
            }
            if (from < this._keys[0].frame || from > this._keys[this._keys.length - 1].frame) {
                from = this._keys[0].frame;
            }
            if (to < this._keys[0].frame || to > this._keys[this._keys.length - 1].frame) {
                to = this._keys[this._keys.length - 1].frame;
            }
            var range = to - from;
            var offsetValue;
            var ratio = delay * (this.framePerSecond * speedRatio) / 1000.0;
            if (ratio > range && !loop) {
                returnValue = false;
                highLimitValue = this._keys[this._keys.length - 1].value;
            } else {
                var highLimitValue = 0;
                if (this.loopMode != Animation.ANIMATIONLOOPMODE_CYCLE) {
                    var keyOffset = to.toString() + from.toString();
                    if (!this._offsetsCache[keyOffset]) {
                        var fromValue = this._interpolate(from, 0, Animation.ANIMATIONLOOPMODE_CYCLE);
                        var toValue = this._interpolate(to, 0, Animation.ANIMATIONLOOPMODE_CYCLE);
                        switch (this.dataType) {
                        case Animation.ANIMATIONTYPE_FLOAT:
                            this._offsetsCache[keyOffset] = toValue - fromValue;
                            break;
                        case Animation.ANIMATIONTYPE_QUATERNION:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                            break;
                        case Animation.ANIMATIONTYPE_VECTOR3:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        case Animation.ANIMATIONTYPE_COLOR3:
                            this._offsetsCache[keyOffset] = toValue.subtract(fromValue);
                        default:
                            break;
                        }
                        this._highLimitsCache[keyOffset] = toValue;
                    }
                    highLimitValue = this._highLimitsCache[keyOffset];
                    offsetValue = this._offsetsCache[keyOffset];
                }
            }
            if (offsetValue === undefined) {
                switch (this.dataType) {
                case Animation.ANIMATIONTYPE_FLOAT:
                    offsetValue = 0;
                    break;
                case Animation.ANIMATIONTYPE_QUATERNION:
                    offsetValue = new BABYLON.Quaternion();
                    break;
                case Animation.ANIMATIONTYPE_VECTOR3:
                    offsetValue = BABYLON.Vector3.Zero();
                    break;
                case Animation.ANIMATIONTYPE_COLOR3:
                    offsetValue = BABYLON.Color3.Black();
                }
            }
            var repeatCount = (ratio / range) >> 0;
            var currentFrame = returnValue ? from + ratio % range : to;
            var currentValue = this._interpolate(currentFrame, repeatCount, this.loopMode, offsetValue, highLimitValue);
            if (this.targetPropertyPath.length > 1) {
                var property = this._target[this.targetPropertyPath[0]];
                for (var index = 1; index < this.targetPropertyPath.length - 1; index++) {
                    property = property[this.targetPropertyPath[index]];
                }
                property[this.targetPropertyPath[this.targetPropertyPath.length - 1]] = currentValue;
            } else {
                this._target[this.targetPropertyPath[0]] = currentValue;
            }
            if (this._target.markAsDirty) {
                this._target.markAsDirty(this.targetProperty);
            }
            if (!returnValue) {
                this._stopped = true;
            }
            return returnValue;
        };
        Object.defineProperty(Animation, "ANIMATIONTYPE_FLOAT", {
            get: function () {
                return Animation._ANIMATIONTYPE_FLOAT;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONTYPE_VECTOR3", {
            get: function () {
                return Animation._ANIMATIONTYPE_VECTOR3;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONTYPE_QUATERNION", {
            get: function () {
                return Animation._ANIMATIONTYPE_QUATERNION;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONTYPE_MATRIX", {
            get: function () {
                return Animation._ANIMATIONTYPE_MATRIX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONTYPE_COLOR3", {
            get: function () {
                return Animation._ANIMATIONTYPE_COLOR3;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONLOOPMODE_RELATIVE", {
            get: function () {
                return Animation._ANIMATIONLOOPMODE_RELATIVE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONLOOPMODE_CYCLE", {
            get: function () {
                return Animation._ANIMATIONLOOPMODE_CYCLE;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Animation, "ANIMATIONLOOPMODE_CONSTANT", {
            get: function () {
                return Animation._ANIMATIONLOOPMODE_CONSTANT;
            },
            enumerable: true,
            configurable: true
        });
        Animation._ANIMATIONTYPE_FLOAT = 0;
        Animation._ANIMATIONTYPE_VECTOR3 = 1;
        Animation._ANIMATIONTYPE_QUATERNION = 2;
        Animation._ANIMATIONTYPE_MATRIX = 3;
        Animation._ANIMATIONTYPE_COLOR3 = 4;
        Animation._ANIMATIONLOOPMODE_RELATIVE = 0;
        Animation._ANIMATIONLOOPMODE_CYCLE = 1;
        Animation._ANIMATIONLOOPMODE_CONSTANT = 2;
        return Animation;
    })();
    BABYLON.Animation = Animation;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Animatable = (function () {
        function Animatable(scene, target, fromFrame, toFrame, loopAnimation, speedRatio, onAnimationEnd, animations) {
            if (typeof fromFrame === "undefined") {
                fromFrame = 0;
            }
            if (typeof toFrame === "undefined") {
                toFrame = 100;
            }
            if (typeof loopAnimation === "undefined") {
                loopAnimation = false;
            }
            if (typeof speedRatio === "undefined") {
                speedRatio = 1.0;
            }
            this.target = target;
            this.fromFrame = fromFrame;
            this.toFrame = toFrame;
            this.loopAnimation = loopAnimation;
            this.speedRatio = speedRatio;
            this.onAnimationEnd = onAnimationEnd;
            this._animations = new Array();
            this._paused = false;
            this.animationStarted = false;
            if (animations) {
                this.appendAnimations(target, animations);
            }
            this._scene = scene;
            scene._activeAnimatables.push(this);
        }
        Animatable.prototype.appendAnimations = function (target, animations) {
            for (var index = 0; index < animations.length; index++) {
                var animation = animations[index];
                animation._target = target;
                this._animations.push(animation);
            }
        };
        Animatable.prototype.getAnimationByTargetProperty = function (property) {
            var animations = this._animations;
            for (var index = 0; index < animations.length; index++) {
                if (animations[index].targetProperty === property) {
                    return animations[index];
                }
            }
            return null;
        };
        Animatable.prototype.pause = function () {
            this._paused = true;
        };
        Animatable.prototype.restart = function () {
            this._paused = false;
        };
        Animatable.prototype.stop = function () {
            var index = this._scene._activeAnimatables.indexOf(this);
            if (index > -1) {
                this._scene._activeAnimatables.splice(index, 1);
            }
            if (this.onAnimationEnd) {
                this.onAnimationEnd();
            }
        };
        Animatable.prototype._animate = function (delay) {
            if (this._paused) {
                return true;
            }
            if (!this._localDelayOffset) {
                this._localDelayOffset = delay;
            }
            var running = false;
            var animations = this._animations;
            for (var index = 0; index < animations.length; index++) {
                var animation = animations[index];
                var isRunning = animation.animate(delay - this._localDelayOffset, this.fromFrame, this.toFrame, this.loopAnimation, this.speedRatio);
                running = running || isRunning;
            }
            if (!running && this.onAnimationEnd) {
                this.onAnimationEnd();
            }
            return running;
        };
        return Animatable;
    })();
    BABYLON.Animatable = Animatable;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Octree = (function () {
        function Octree(creationFunc, maxBlockCapacity, maxDepth) {
            if (typeof maxDepth === "undefined") {
                maxDepth = 2;
            }
            this.maxDepth = maxDepth;
            this.dynamicContent = new Array();
            this._maxBlockCapacity = maxBlockCapacity || 64;
            this._selectionContent = new BABYLON.SmartArray(1024);
            this._creationFunc = creationFunc;
        }
        Octree.prototype.update = function (worldMin, worldMax, entries) {
            Octree._CreateBlocks(worldMin, worldMax, entries, this._maxBlockCapacity, 0, this.maxDepth, this, this._creationFunc);
        };
        Octree.prototype.addMesh = function (entry) {
            for (var index = 0; index < this.blocks.length; index++) {
                var block = this.blocks[index];
                block.addEntry(entry);
            }
        };
        Octree.prototype.select = function (frustumPlanes, allowDuplicate) {
            this._selectionContent.reset();
            for (var index = 0; index < this.blocks.length; index++) {
                var block = this.blocks[index];
                block.select(frustumPlanes, this._selectionContent, allowDuplicate);
            }
            if (allowDuplicate) {
                this._selectionContent.concat(this.dynamicContent);
            } else {
                this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
            }
            return this._selectionContent;
        };
        Octree.prototype.intersects = function (sphereCenter, sphereRadius, allowDuplicate) {
            this._selectionContent.reset();
            for (var index = 0; index < this.blocks.length; index++) {
                var block = this.blocks[index];
                block.intersects(sphereCenter, sphereRadius, this._selectionContent, allowDuplicate);
            }
            if (allowDuplicate) {
                this._selectionContent.concat(this.dynamicContent);
            } else {
                this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
            }
            return this._selectionContent;
        };
        Octree.prototype.intersectsRay = function (ray) {
            this._selectionContent.reset();
            for (var index = 0; index < this.blocks.length; index++) {
                var block = this.blocks[index];
                block.intersectsRay(ray, this._selectionContent);
            }
            this._selectionContent.concatWithNoDuplicate(this.dynamicContent);
            return this._selectionContent;
        };
        Octree._CreateBlocks = function (worldMin, worldMax, entries, maxBlockCapacity, currentDepth, maxDepth, target, creationFunc) {
            target.blocks = new Array();
            var blockSize = new BABYLON.Vector3((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);
            for (var x = 0; x < 2; x++) {
                for (var y = 0; y < 2; y++) {
                    for (var z = 0; z < 2; z++) {
                        var localMin = worldMin.add(blockSize.multiplyByFloats(x, y, z));
                        var localMax = worldMin.add(blockSize.multiplyByFloats(x + 1, y + 1, z + 1));
                        var block = new BABYLON.OctreeBlock(localMin, localMax, maxBlockCapacity, currentDepth + 1, maxDepth, creationFunc);
                        block.addEntries(entries);
                        target.blocks.push(block);
                    }
                }
            }
        };
        Octree.CreationFuncForMeshes = function (entry, block) {
            if (entry.getBoundingInfo().boundingBox.intersectsMinMax(block.minPoint, block.maxPoint)) {
                block.entries.push(entry);
            }
        };
        Octree.CreationFuncForSubMeshes = function (entry, block) {
            if (entry.getBoundingInfo().boundingBox.intersectsMinMax(block.minPoint, block.maxPoint)) {
                block.entries.push(entry);
            }
        };
        return Octree;
    })();
    BABYLON.Octree = Octree;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var OctreeBlock = (function () {
        function OctreeBlock(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc) {
            this.entries = new Array();
            this._boundingVectors = new Array();
            this._capacity = capacity;
            this._depth = depth;
            this._maxDepth = maxDepth;
            this._creationFunc = creationFunc;
            this._minPoint = minPoint;
            this._maxPoint = maxPoint;
            this._boundingVectors.push(minPoint.clone());
            this._boundingVectors.push(maxPoint.clone());
            this._boundingVectors.push(minPoint.clone());
            this._boundingVectors[2].x = maxPoint.x;
            this._boundingVectors.push(minPoint.clone());
            this._boundingVectors[3].y = maxPoint.y;
            this._boundingVectors.push(minPoint.clone());
            this._boundingVectors[4].z = maxPoint.z;
            this._boundingVectors.push(maxPoint.clone());
            this._boundingVectors[5].z = minPoint.z;
            this._boundingVectors.push(maxPoint.clone());
            this._boundingVectors[6].x = minPoint.x;
            this._boundingVectors.push(maxPoint.clone());
            this._boundingVectors[7].y = minPoint.y;
        }
        Object.defineProperty(OctreeBlock.prototype, "capacity", {
            get: function () {
                return this._capacity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OctreeBlock.prototype, "minPoint", {
            get: function () {
                return this._minPoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(OctreeBlock.prototype, "maxPoint", {
            get: function () {
                return this._maxPoint;
            },
            enumerable: true,
            configurable: true
        });
        OctreeBlock.prototype.addEntry = function (entry) {
            if (this.blocks) {
                for (var index = 0; index < this.blocks.length; index++) {
                    var block = this.blocks[index];
                    block.addEntry(entry);
                }
                return;
            }
            this._creationFunc(entry, this);
            if (this.entries.length > this.capacity && this._depth < this._maxDepth) {
                this.createInnerBlocks();
            }
        };
        OctreeBlock.prototype.addEntries = function (entries) {
            for (var index = 0; index < entries.length; index++) {
                var mesh = entries[index];
                this.addEntry(mesh);
            }
        };
        OctreeBlock.prototype.select = function (frustumPlanes, selection, allowDuplicate) {
            if (BABYLON.BoundingBox.IsInFrustum(this._boundingVectors, frustumPlanes)) {
                if (this.blocks) {
                    for (var index = 0; index < this.blocks.length; index++) {
                        var block = this.blocks[index];
                        block.select(frustumPlanes, selection, allowDuplicate);
                    }
                    return;
                }
                if (allowDuplicate) {
                    selection.concat(this.entries);
                } else {
                    selection.concatWithNoDuplicate(this.entries);
                }
            }
        };
        OctreeBlock.prototype.intersects = function (sphereCenter, sphereRadius, selection, allowDuplicate) {
            if (BABYLON.BoundingBox.IntersectsSphere(this._minPoint, this._maxPoint, sphereCenter, sphereRadius)) {
                if (this.blocks) {
                    for (var index = 0; index < this.blocks.length; index++) {
                        var block = this.blocks[index];
                        block.intersects(sphereCenter, sphereRadius, selection, allowDuplicate);
                    }
                    return;
                }
                if (allowDuplicate) {
                    selection.concat(this.entries);
                } else {
                    selection.concatWithNoDuplicate(this.entries);
                }
            }
        };
        OctreeBlock.prototype.intersectsRay = function (ray, selection) {
            if (ray.intersectsBoxMinMax(this._minPoint, this._maxPoint)) {
                if (this.blocks) {
                    for (var index = 0; index < this.blocks.length; index++) {
                        var block = this.blocks[index];
                        block.intersectsRay(ray, selection);
                    }
                    return;
                }
                selection.concatWithNoDuplicate(this.entries);
            }
        };
        OctreeBlock.prototype.createInnerBlocks = function () {
            BABYLON.Octree._CreateBlocks(this._minPoint, this._maxPoint, this.entries, this._capacity, this._depth, this._maxDepth, this, this._creationFunc);
        };
        return OctreeBlock;
    })();
    BABYLON.OctreeBlock = OctreeBlock;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Bone = (function () {
        function Bone(name, skeleton, parentBone, matrix) {
            this.name = name;
            this.children = new Array();
            this.animations = new Array();
            this._worldTransform = new BABYLON.Matrix();
            this._absoluteTransform = new BABYLON.Matrix();
            this._invertedAbsoluteTransform = new BABYLON.Matrix();
            this._skeleton = skeleton;
            this._matrix = matrix;
            this._baseMatrix = matrix;
            skeleton.bones.push(this);
            if (parentBone) {
                this._parent = parentBone;
                parentBone.children.push(this);
            } else {
                this._parent = null;
            }
            this._updateDifferenceMatrix();
        }
        Bone.prototype.getParent = function () {
            return this._parent;
        };
        Bone.prototype.getLocalMatrix = function () {
            return this._matrix;
        };
        Bone.prototype.getBaseMatrix = function () {
            return this._baseMatrix;
        };
        Bone.prototype.getWorldMatrix = function () {
            return this._worldTransform;
        };
        Bone.prototype.getInvertedAbsoluteTransform = function () {
            return this._invertedAbsoluteTransform;
        };
        Bone.prototype.getAbsoluteMatrix = function () {
            var matrix = this._matrix.clone();
            var parent = this._parent;
            while (parent) {
                matrix = matrix.multiply(parent.getLocalMatrix());
                parent = parent.getParent();
            }
            return matrix;
        };
        Bone.prototype.updateMatrix = function (matrix) {
            this._matrix = matrix;
            this._skeleton._markAsDirty();
            this._updateDifferenceMatrix();
        };
        Bone.prototype._updateDifferenceMatrix = function () {
            if (this._parent) {
                this._matrix.multiplyToRef(this._parent._absoluteTransform, this._absoluteTransform);
            } else {
                this._absoluteTransform.copyFrom(this._matrix);
            }
            this._absoluteTransform.invertToRef(this._invertedAbsoluteTransform);
            for (var index = 0; index < this.children.length; index++) {
                this.children[index]._updateDifferenceMatrix();
            }
        };
        Bone.prototype.markAsDirty = function () {
            this._skeleton._markAsDirty();
        };
        return Bone;
    })();
    BABYLON.Bone = Bone;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Skeleton = (function () {
        function Skeleton(name, id, scene) {
            this.name = name;
            this.id = id;
            this.bones = new Array();
            this._isDirty = true;
            this._identity = BABYLON.Matrix.Identity();
            this.bones = [];
            this._scene = scene;
            scene.skeletons.push(this);
        }
        Skeleton.prototype.getTransformMatrices = function () {
            return this._transformMatrices;
        };
        Skeleton.prototype._markAsDirty = function () {
            this._isDirty = true;
        };
        Skeleton.prototype.prepare = function () {
            if (!this._isDirty) {
                return;
            }
            if (!this._transformMatrices || this._transformMatrices.length !== 16 * (this.bones.length + 1)) {
                this._transformMatrices = new Float32Array(16 * (this.bones.length + 1));
            }
            for (var index = 0; index < this.bones.length; index++) {
                var bone = this.bones[index];
                var parentBone = bone.getParent();
                if (parentBone) {
                    bone.getLocalMatrix().multiplyToRef(parentBone.getWorldMatrix(), bone.getWorldMatrix());
                } else {
                    bone.getWorldMatrix().copyFrom(bone.getLocalMatrix());
                }
                bone.getInvertedAbsoluteTransform().multiplyToArray(bone.getWorldMatrix(), this._transformMatrices, index * 16);
            }
            this._identity.copyToArray(this._transformMatrices, this.bones.length * 16);
            this._isDirty = false;
        };
        Skeleton.prototype.getAnimatables = function () {
            if (!this._animatables || this._animatables.length != this.bones.length) {
                this._animatables = [];
                for (var index = 0; index < this.bones.length; index++) {
                    this._animatables.push(this.bones[index]);
                }
            }
            return this._animatables;
        };
        Skeleton.prototype.clone = function (name, id) {
            var result = new BABYLON.Skeleton(name, id || name, this._scene);
            for (var index = 0; index < this.bones.length; index++) {
                var source = this.bones[index];
                var parentBone = null;
                if (source.getParent()) {
                    var parentIndex = this.bones.indexOf(source.getParent());
                    parentBone = result.bones[parentIndex];
                }
                var bone = new BABYLON.Bone(source.name, result, parentBone, source.getBaseMatrix());
                BABYLON.Tools.DeepCopy(source.animations, bone.animations);
            }
            return result;
        };
        return Skeleton;
    })();
    BABYLON.Skeleton = Skeleton;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcess = (function () {
        function PostProcess(name, fragmentUrl, parameters, samplers, ratio, camera, samplingMode, engine, reusable) {
            this.name = name;
            this.width = -1;
            this.height = -1;
            this._reusable = false;
            this._textures = new BABYLON.SmartArray(2);
            this._currentRenderTextureInd = 0;
            if (camera != null) {
                this._camera = camera;
                this._scene = camera.getScene();
                camera.attachPostProcess(this);
                this._engine = this._scene.getEngine();
            } else {
                this._engine = engine;
            }
            this._renderRatio = ratio;
            this.renderTargetSamplingMode = samplingMode ? samplingMode : BABYLON.Texture.NEAREST_SAMPLINGMODE;
            this._reusable = reusable || false;
            samplers = samplers || [];
            samplers.push("textureSampler");
            this._effect = this._engine.createEffect({
                vertex: "postprocess",
                fragment: fragmentUrl
            }, ["position"], parameters || [], samplers, "");
        }
        PostProcess.prototype.isReusable = function () {
            return this._reusable;
        };
        PostProcess.prototype.activate = function (camera, sourceTexture) {
            camera = camera || this._camera;
            var scene = camera.getScene();
            var desiredWidth = (sourceTexture ? sourceTexture._width : this._engine.getRenderingCanvas().width) * this._renderRatio;
            var desiredHeight = (sourceTexture ? sourceTexture._height : this._engine.getRenderingCanvas().height) * this._renderRatio;
            if (this.width !== desiredWidth || this.height !== desiredHeight) {
                if (this._textures.length > 0) {
                    for (var i = 0; i < this._textures.length; i++) {
                        this._engine._releaseTexture(this._textures.data[i]);
                    }
                    this._textures.reset();
                }
                this.width = desiredWidth;
                this.height = desiredHeight;
                this._textures.push(this._engine.createRenderTargetTexture({
                    width: this.width,
                    height: this.height
                }, {
                    generateMipMaps: false,
                    generateDepthBuffer: camera._postProcesses.indexOf(this) === camera._postProcessesTakenIndices[0],
                    samplingMode: this.renderTargetSamplingMode
                }));
                if (this._reusable) {
                    this._textures.push(this._engine.createRenderTargetTexture({
                        width: this.width,
                        height: this.height
                    }, {
                        generateMipMaps: false,
                        generateDepthBuffer: camera._postProcesses.indexOf(this) === camera._postProcessesTakenIndices[0],
                        samplingMode: this.renderTargetSamplingMode
                    }));
                }
                if (this.onSizeChanged) {
                    this.onSizeChanged();
                }
            }
            this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd]);
            if (this.onActivate) {
                this.onActivate(camera);
            }
            this._engine.clear(scene.clearColor, scene.autoClear || scene.forceWireframe, true);
            if (this._reusable) {
                this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2;
            }
        };
        PostProcess.prototype.apply = function () {
            if (!this._effect.isReady()) return null;
            this._engine.enableEffect(this._effect);
            this._engine.setState(false);
            this._engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
            this._engine.setDepthBuffer(false);
            this._engine.setDepthWrite(false);
            this._effect._bindTexture("textureSampler", this._textures.data[this._currentRenderTextureInd]);
            if (this.onApply) {
                this.onApply(this._effect);
            }
            return this._effect;
        };
        PostProcess.prototype.dispose = function (camera) {
            camera = camera || this._camera;
            if (this._textures.length > 0) {
                for (var i = 0; i < this._textures.length; i++) {
                    this._engine._releaseTexture(this._textures.data[i]);
                }
                this._textures.reset();
            }
            camera.detachPostProcess(this);
            var index = camera._postProcesses.indexOf(this);
            if (index === camera._postProcessesTakenIndices[0] && camera._postProcessesTakenIndices.length > 0) {
                this._camera._postProcesses[camera._postProcessesTakenIndices[0]].width = -1;
            }
        };
        return PostProcess;
    })();
    BABYLON.PostProcess = PostProcess;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcessManager = (function () {
        function PostProcessManager(scene) {
            this._vertexDeclaration = [2];
            this._vertexStrideSize = 2 * 4;
            this._scene = scene;
            var vertices = [];
            vertices.push(1, 1);
            vertices.push(-1, 1);
            vertices.push(-1, -1);
            vertices.push(1, -1);
            this._vertexBuffer = scene.getEngine().createVertexBuffer(vertices);
            var indices = [];
            indices.push(0);
            indices.push(1);
            indices.push(2);
            indices.push(0);
            indices.push(2);
            indices.push(3);
            this._indexBuffer = scene.getEngine().createIndexBuffer(indices);
        }
        PostProcessManager.prototype._prepareFrame = function (sourceTexture) {
            var postProcesses = this._scene.activeCamera._postProcesses;
            var postProcessesTakenIndices = this._scene.activeCamera._postProcessesTakenIndices;
            if (postProcessesTakenIndices.length === 0 || !this._scene.postProcessesEnabled) {
                return false;
            }
            postProcesses[this._scene.activeCamera._postProcessesTakenIndices[0]].activate(this._scene.activeCamera, sourceTexture);
            return true;
        };
        PostProcessManager.prototype._finalizeFrame = function (doNotPresent, targetTexture) {
            var postProcesses = this._scene.activeCamera._postProcesses;
            var postProcessesTakenIndices = this._scene.activeCamera._postProcessesTakenIndices;
            if (postProcessesTakenIndices.length === 0 || !this._scene.postProcessesEnabled) {
                return;
            }
            var engine = this._scene.getEngine();
            for (var index = 0; index < postProcessesTakenIndices.length; index++) {
                if (index < postProcessesTakenIndices.length - 1) {
                    postProcesses[postProcessesTakenIndices[index + 1]].activate(this._scene.activeCamera);
                } else {
                    if (targetTexture) {
                        engine.bindFramebuffer(targetTexture);
                    } else {
                        engine.restoreDefaultFramebuffer();
                    }
                }
                if (doNotPresent) {
                    break;
                }
                var effect = postProcesses[postProcessesTakenIndices[index]].apply();
                if (effect) {
                    engine.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, effect);
                    engine.draw(true, 0, 6);
                }
            }
            engine.setDepthBuffer(true);
            engine.setDepthWrite(true);
        };
        PostProcessManager.prototype.dispose = function () {
            if (this._vertexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
            }
            if (this._indexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
        };
        return PostProcessManager;
    })();
    BABYLON.PostProcessManager = PostProcessManager;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var PassPostProcess = (function (_super) {
        __extends(PassPostProcess, _super);

        function PassPostProcess(name, ratio, camera, samplingMode, engine, reusable) {
            _super.call(this, name, "pass", null, null, ratio, camera, samplingMode, engine, reusable);
        }
        return PassPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.PassPostProcess = PassPostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var BlurPostProcess = (function (_super) {
        __extends(BlurPostProcess, _super);

        function BlurPostProcess(name, direction, blurWidth, ratio, camera, samplingMode, engine, reusable) {
            if (typeof samplingMode === "undefined") {
                samplingMode = BABYLON.Texture.BILINEAR_SAMPLINGMODE;
            }
            var _this = this;
            _super.call(this, name, "blur", ["screenSize", "direction", "blurWidth"], null, ratio, camera, samplingMode, engine, reusable);
            this.direction = direction;
            this.blurWidth = blurWidth;
            this.onApply = function (effect) {
                effect.setFloat2("screenSize", _this.width, _this.height);
                effect.setVector2("direction", _this.direction);
                effect.setFloat("blurWidth", _this.blurWidth);
            };
        }
        return BlurPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.BlurPostProcess = BlurPostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var FilterPostProcess = (function (_super) {
        __extends(FilterPostProcess, _super);

        function FilterPostProcess(name, kernelMatrix, ratio, camera, samplingMode, engine, reusable) {
            var _this = this;
            _super.call(this, name, "filter", ["kernelMatrix"], null, ratio, camera, samplingMode, engine, reusable);
            this.kernelMatrix = kernelMatrix;
            this.onApply = function (effect) {
                effect.setMatrix("kernelMatrix", _this.kernelMatrix);
            };
        }
        return FilterPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.FilterPostProcess = FilterPostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var RefractionPostProcess = (function (_super) {
        __extends(RefractionPostProcess, _super);

        function RefractionPostProcess(name, refractionTextureUrl, color, depth, colorLevel, ratio, camera, samplingMode, engine, reusable) {
            var _this = this;
            _super.call(this, name, "refraction", ["baseColor", "depth", "colorLevel"], ["refractionSampler"], ratio, camera, samplingMode, engine, reusable);
            this.color = color;
            this.depth = depth;
            this.colorLevel = colorLevel;
            this.onActivate = function (cam) {
                _this._refRexture = _this._refRexture || new BABYLON.Texture(refractionTextureUrl, cam.getScene());
            };
            this.onApply = function (effect) {
                effect.setColor3("baseColor", _this.color);
                effect.setFloat("depth", _this.depth);
                effect.setFloat("colorLevel", _this.colorLevel);
                effect.setTexture("refractionSampler", _this._refRexture);
            };
        }
        RefractionPostProcess.prototype.dispose = function (camera) {
            if (this._refRexture) {
                this._refRexture.dispose();
            }
            _super.prototype.dispose.call(this, camera);
        };
        return RefractionPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.RefractionPostProcess = RefractionPostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var BlackAndWhitePostProcess = (function (_super) {
        __extends(BlackAndWhitePostProcess, _super);

        function BlackAndWhitePostProcess(name, ratio, camera, samplingMode, engine, reusable) {
            _super.call(this, name, "blackAndWhite", null, null, ratio, camera, samplingMode, engine, reusable);
        }
        return BlackAndWhitePostProcess;
    })(BABYLON.PostProcess);
    BABYLON.BlackAndWhitePostProcess = BlackAndWhitePostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var ConvolutionPostProcess = (function (_super) {
        __extends(ConvolutionPostProcess, _super);

        function ConvolutionPostProcess(name, kernel, ratio, camera, samplingMode, engine, reusable) {
            var _this = this;
            _super.call(this, name, "convolution", ["kernel", "screenSize"], null, ratio, camera, samplingMode, engine, reusable);
            this.kernel = kernel;
            this.onApply = function (effect) {
                effect.setFloat2("screenSize", _this.width, _this.height);
                effect.setArray("kernel", _this.kernel);
            };
        }
        ConvolutionPostProcess.EdgeDetect0Kernel = [1, 0, -1, 0, 0, 0, -1, 0, 1];
        ConvolutionPostProcess.EdgeDetect1Kernel = [0, 1, 0, 1, -4, 1, 0, 1, 0];
        ConvolutionPostProcess.EdgeDetect2Kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
        ConvolutionPostProcess.SharpenKernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
        ConvolutionPostProcess.EmbossKernel = [-2, -1, 0, -1, 1, 1, 0, 1, 2];
        ConvolutionPostProcess.GaussianKernel = [0, 1, 0, 1, 1, 1, 0, 1, 0];
        return ConvolutionPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.ConvolutionPostProcess = ConvolutionPostProcess;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var FxaaPostProcess = (function (_super) {
        __extends(FxaaPostProcess, _super);

        function FxaaPostProcess(name, ratio, camera, samplingMode, engine, reusable) {
            var _this = this;
            _super.call(this, name, "fxaa", ["texelSize"], null, ratio, camera, samplingMode, engine, reusable);
            this.onSizeChanged = function () {
                _this.texelWidth = 1.0 / _this.width;
                _this.texelHeight = 1.0 / _this.height;
            };
            this.onApply = function (effect) {
                effect.setFloat2("texelSize", _this.texelWidth, _this.texelHeight);
            };
        }
        return FxaaPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.FxaaPostProcess = FxaaPostProcess;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var LensFlare = (function () {
        function LensFlare(size, position, color, imgUrl, system) {
            this.size = size;
            this.position = position;
            this.dispose = function () {
                if (this.texture) {
                    this.texture.dispose();
                }
                var index = this._system.lensFlares.indexOf(this);
                this._system.lensFlares.splice(index, 1);
            };
            this.color = color || new BABYLON.Color3(1, 1, 1);
            this.texture = imgUrl ? new BABYLON.Texture(imgUrl, system.getScene(), true) : null;
            this._system = system;
            system.lensFlares.push(this);
        }
        return LensFlare;
    })();
    BABYLON.LensFlare = LensFlare;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var LensFlareSystem = (function () {
        function LensFlareSystem(name, emitter, scene) {
            this.name = name;
            this.lensFlares = new Array();
            this.borderLimit = 300;
            this._vertexDeclaration = [2];
            this._vertexStrideSize = 2 * 4;
            this._isEnabled = true;
            this._scene = scene;
            this._emitter = emitter;
            scene.lensFlareSystems.push(this);
            this.meshesSelectionPredicate = function (m) {
                return m.material && m.isVisible && m.isEnabled() && m.checkCollisions && ((m.layerMask & scene.activeCamera.layerMask) != 0);
            };
            var vertices = [];
            vertices.push(1, 1);
            vertices.push(-1, 1);
            vertices.push(-1, -1);
            vertices.push(1, -1);
            this._vertexBuffer = scene.getEngine().createVertexBuffer(vertices);
            var indices = [];
            indices.push(0);
            indices.push(1);
            indices.push(2);
            indices.push(0);
            indices.push(2);
            indices.push(3);
            this._indexBuffer = scene.getEngine().createIndexBuffer(indices);
            this._effect = this._scene.getEngine().createEffect("lensFlare", ["position"], ["color", "viewportMatrix"], ["textureSampler"], "");
        }
        Object.defineProperty(LensFlareSystem.prototype, "isEnabled", {
            get: function () {
                return this._isEnabled;
            },
            set: function (value) {
                this._isEnabled = value;
            },
            enumerable: true,
            configurable: true
        });
        LensFlareSystem.prototype.getScene = function () {
            return this._scene;
        };
        LensFlareSystem.prototype.getEmitter = function () {
            return this._emitter;
        };
        LensFlareSystem.prototype.getEmitterPosition = function () {
            return this._emitter.getAbsolutePosition ? this._emitter.getAbsolutePosition() : this._emitter.position;
        };
        LensFlareSystem.prototype.computeEffectivePosition = function (globalViewport) {
            var position = this.getEmitterPosition();
            position = BABYLON.Vector3.Project(position, BABYLON.Matrix.Identity(), this._scene.getTransformMatrix(), globalViewport);
            this._positionX = position.x;
            this._positionY = position.y;
            position = BABYLON.Vector3.TransformCoordinates(this.getEmitterPosition(), this._scene.getViewMatrix());
            if (position.z > 0) {
                if ((this._positionX > globalViewport.x) && (this._positionX < globalViewport.x + globalViewport.width)) {
                    if ((this._positionY > globalViewport.y) && (this._positionY < globalViewport.y + globalViewport.height)) return true;
                }
            }
            return false;
        };
        LensFlareSystem.prototype._isVisible = function () {
            if (!this._isEnabled) {
                return false;
            }
            var emitterPosition = this.getEmitterPosition();
            var direction = emitterPosition.subtract(this._scene.activeCamera.position);
            var distance = direction.length();
            direction.normalize();
            var ray = new BABYLON.Ray(this._scene.activeCamera.position, direction);
            var pickInfo = this._scene.pickWithRay(ray, this.meshesSelectionPredicate, true);
            return !pickInfo.hit || pickInfo.distance > distance;
        };
        LensFlareSystem.prototype.render = function () {
            if (!this._effect.isReady()) return false;
            var engine = this._scene.getEngine();
            var viewport = this._scene.activeCamera.viewport;
            var globalViewport = viewport.toGlobal(engine);
            if (!this.computeEffectivePosition(globalViewport)) {
                return false;
            }
            if (!this._isVisible()) {
                return false;
            }
            var awayX;
            var awayY;
            if (this._positionX < this.borderLimit + globalViewport.x) {
                awayX = this.borderLimit + globalViewport.x - this._positionX;
            } else if (this._positionX > globalViewport.x + globalViewport.width - this.borderLimit) {
                awayX = this._positionX - globalViewport.x - globalViewport.width + this.borderLimit;
            } else {
                awayX = 0;
            }
            if (this._positionY < this.borderLimit + globalViewport.y) {
                awayY = this.borderLimit + globalViewport.y - this._positionY;
            } else if (this._positionY > globalViewport.y + globalViewport.height - this.borderLimit) {
                awayY = this._positionY - globalViewport.y - globalViewport.height + this.borderLimit;
            } else {
                awayY = 0;
            }
            var away = (awayX > awayY) ? awayX : awayY;
            if (away > this.borderLimit) {
                away = this.borderLimit;
            }
            var intensity = 1.0 - (away / this.borderLimit);
            if (intensity < 0) {
                return false;
            }
            if (intensity > 1.0) {
                intensity = 1.0;
            }
            var centerX = globalViewport.x + globalViewport.width / 2;
            var centerY = globalViewport.y + globalViewport.height / 2;
            var distX = centerX - this._positionX;
            var distY = centerY - this._positionY;
            engine.enableEffect(this._effect);
            engine.setState(false);
            engine.setDepthBuffer(false);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_ADD);
            engine.bindBuffers(this._vertexBuffer, this._indexBuffer, this._vertexDeclaration, this._vertexStrideSize, this._effect);
            for (var index = 0; index < this.lensFlares.length; index++) {
                var flare = this.lensFlares[index];
                var x = centerX - (distX * flare.position);
                var y = centerY - (distY * flare.position);
                var cw = flare.size;
                var ch = flare.size * engine.getAspectRatio(this._scene.activeCamera);
                var cx = 2 * (x / globalViewport.width) - 1.0;
                var cy = 1.0 - 2 * (y / globalViewport.height);
                var viewportMatrix = BABYLON.Matrix.FromValues(cw / 2, 0, 0, 0, 0, ch / 2, 0, 0, 0, 0, 1, 0, cx, cy, 0, 1);
                this._effect.setMatrix("viewportMatrix", viewportMatrix);
                this._effect.setTexture("textureSampler", flare.texture);
                this._effect.setFloat4("color", flare.color.r * intensity, flare.color.g * intensity, flare.color.b * intensity, 1.0);
                engine.draw(true, 0, 6);
            }
            engine.setDepthBuffer(true);
            engine.setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);
            return true;
        };
        LensFlareSystem.prototype.dispose = function () {
            if (this._vertexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._vertexBuffer);
                this._vertexBuffer = null;
            }
            if (this._indexBuffer) {
                this._scene.getEngine()._releaseBuffer(this._indexBuffer);
                this._indexBuffer = null;
            }
            while (this.lensFlares.length) {
                this.lensFlares[0].dispose();
            }
            var index = this._scene.lensFlareSystems.indexOf(this);
            this._scene.lensFlareSystems.splice(index, 1);
        };
        return LensFlareSystem;
    })();
    BABYLON.LensFlareSystem = LensFlareSystem;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var IntersectionInfo = (function () {
        function IntersectionInfo(bu, bv, distance) {
            this.bu = bu;
            this.bv = bv;
            this.distance = distance;
            this.faceId = 0;
        }
        return IntersectionInfo;
    })();
    BABYLON.IntersectionInfo = IntersectionInfo;
    var PickingInfo = (function () {
        function PickingInfo() {
            this.hit = false;
            this.distance = 0;
            this.pickedPoint = null;
            this.pickedMesh = null;
            this.bu = 0;
            this.bv = 0;
            this.faceId = -1;
        }
        PickingInfo.prototype.getNormal = function () {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BABYLON.VertexBuffer.NormalKind)) {
                return null;
            }
            var indices = this.pickedMesh.getIndices();
            var normals = this.pickedMesh.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            var normal0 = BABYLON.Vector3.FromArray(normals, indices[this.faceId * 3] * 3);
            var normal1 = BABYLON.Vector3.FromArray(normals, indices[this.faceId * 3 + 1] * 3);
            var normal2 = BABYLON.Vector3.FromArray(normals, indices[this.faceId * 3 + 2] * 3);
            normal0 = normal0.scale(this.bu);
            normal1 = normal1.scale(this.bv);
            normal2 = normal2.scale(1.0 - this.bu - this.bv);
            return new BABYLON.Vector3(normal0.x + normal1.x + normal2.x, normal0.y + normal1.y + normal2.y, normal0.z + normal1.z + normal2.z);
        };
        PickingInfo.prototype.getTextureCoordinates = function () {
            if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                return null;
            }
            var indices = this.pickedMesh.getIndices();
            var uvs = this.pickedMesh.getVerticesData(BABYLON.VertexBuffer.UVKind);
            var uv0 = BABYLON.Vector2.FromArray(uvs, indices[this.faceId * 3] * 2);
            var uv1 = BABYLON.Vector2.FromArray(uvs, indices[this.faceId * 3 + 1] * 2);
            var uv2 = BABYLON.Vector2.FromArray(uvs, indices[this.faceId * 3 + 2] * 2);
            uv0 = uv0.scale(this.bu);
            uv1 = uv1.scale(this.bv);
            uv2 = uv2.scale(1.0 - this.bu - this.bv);
            return new BABYLON.Vector2(uv0.x + uv1.x + uv2.x, uv0.y + uv1.y + uv2.y);
        };
        return PickingInfo;
    })();
    BABYLON.PickingInfo = PickingInfo;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var FilesInput = (function () {
        function FilesInput(p_engine, p_scene, p_canvas, p_sceneLoadedCallback, p_progressCallback, p_additionnalRenderLoopLogicCallback, p_textureLoadingCallback, p_startingProcessingFilesCallback) {
            this.engine = p_engine;
            this.canvas = p_canvas;
            this.currentScene = p_scene;
            this.sceneLoadedCallback = p_sceneLoadedCallback;
            this.progressCallback = p_progressCallback;
            this.additionnalRenderLoopLogicCallback = p_additionnalRenderLoopLogicCallback;
            this.textureLoadingCallback = p_textureLoadingCallback;
            this.startingProcessingFilesCallback = p_startingProcessingFilesCallback;
        }
        FilesInput.prototype.monitorElementForDragNDrop = function (p_elementToMonitor) {
            var _this = this;
            if (p_elementToMonitor) {
                this.elementToMonitor = p_elementToMonitor;
                this.elementToMonitor.addEventListener("dragenter", function (e) {
                    _this.drag(e);
                }, false);
                this.elementToMonitor.addEventListener("dragover", function (e) {
                    _this.drag(e);
                }, false);
                this.elementToMonitor.addEventListener("drop", function (e) {
                    _this.drop(e);
                }, false);
            }
        };
        FilesInput.prototype.renderFunction = function () {
            if (this.additionnalRenderLoopLogicCallback) {
                this.additionnalRenderLoopLogicCallback();
            }
            if (this.currentScene) {
                if (this.textureLoadingCallback) {
                    var remaining = this.currentScene.getWaitingItemsCount();
                    if (remaining > 0) {
                        this.textureLoadingCallback(remaining);
                    }
                }
                this.currentScene.render();
            }
        };
        FilesInput.prototype.drag = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        FilesInput.prototype.drop = function (eventDrop) {
            eventDrop.stopPropagation();
            eventDrop.preventDefault();
            this.loadFiles(eventDrop);
        };
        FilesInput.prototype.loadFiles = function (event) {
            var _this = this;
            var that = this;
            if (this.startingProcessingFilesCallback) this.startingProcessingFilesCallback();
            var sceneFileToLoad;
            var filesToLoad;
            if (event && event.dataTransfer && event.dataTransfer.files) {
                filesToLoad = event.dataTransfer.files;
            }
            if (event && event.target && event.target.files) {
                filesToLoad = event.target.files;
            }
            if (filesToLoad && filesToLoad.length > 0) {
                for (var i = 0; i < filesToLoad.length; i++) {
                    switch (filesToLoad[i].type) {
                    case "image/jpeg":
                    case "image/png":
                        BABYLON.FilesInput.FilesTextures[filesToLoad[i].name] = filesToLoad[i];
                        break;
                    case "image/targa":
                    case "image/vnd.ms-dds":
                        BABYLON.FilesInput.FilesToLoad[filesToLoad[i].name] = filesToLoad[i];
                        break;
                    default:
                        if (filesToLoad[i].name.indexOf(".babylon") !== -1 && filesToLoad[i].name.indexOf(".manifest") === -1 && filesToLoad[i].name.indexOf(".incremental") === -1 && filesToLoad[i].name.indexOf(".babylonmeshdata") === -1 && filesToLoad[i].name.indexOf(".babylongeometrydata") === -1) {
                            sceneFileToLoad = filesToLoad[i];
                        }
                        break;
                    }
                }
                if (sceneFileToLoad) {
                    if (this.currentScene) {
                        this.engine.stopRenderLoop();
                        this.currentScene.dispose();
                    }
                    BABYLON.SceneLoader.Load("file:", sceneFileToLoad, this.engine, function (newScene) {
                        that.currentScene = newScene;
                        that.currentScene.executeWhenReady(function () {
                            if (that.currentScene.activeCamera) {
                                that.currentScene.activeCamera.attachControl(that.canvas);
                            }
                            if (that.sceneLoadedCallback) {
                                that.sceneLoadedCallback(sceneFileToLoad, that.currentScene);
                            }
                            that.engine.runRenderLoop(function () {
                                that.renderFunction();
                            });
                        });
                    }, function (progress) {
                        if (_this.progressCallback) {
                            _this.progressCallback(progress);
                        }
                    });
                } else {
                    BABYLON.Tools.Error("Please provide a valid .babylon file.");
                }
            }
        };
        FilesInput.FilesTextures = new Array();
        FilesInput.FilesToLoad = new Array();
        return FilesInput;
    })();
    BABYLON.FilesInput = FilesInput;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var OimoJSPlugin = (function () {
        function OimoJSPlugin() {
            this._registeredMeshes = []; /***Update the body position according to the mesh position*@param mesh*/
            this.updateBodyPosition = function (mesh) {
                for (var index = 0; index < this._registeredMeshes.length; index++) {
                    var registeredMesh = this._registeredMeshes[index];
                    if (registeredMesh.mesh === mesh || registeredMesh.mesh === mesh.parent) {
                        var body = registeredMesh.body.body;
                        body.setPosition(mesh.position.x, mesh.position.y, mesh.position.z);
                        body.setOrientation(mesh.rotation.x, mesh.rotation.y, mesh.rotation.z);
                        return;
                    }
                    if (registeredMesh.mesh.parent === mesh) {
                        mesh.computeWorldMatrix(true);
                        registeredMesh.mesh.computeWorldMatrix(true);
                        var absolutePosition = registeredMesh.mesh.getAbsolutePosition();
                        var absoluteRotation = mesh.rotation;
                        body = registeredMesh.body.body;
                        body.setPosition(absolutePosition.x, absolutePosition.y, absolutePosition.z);
                        body.setOrientation(absoluteRotation.x, absoluteRotation.y, absoluteRotation.z);
                        return;
                    }
                }
            };
        }
        OimoJSPlugin.prototype._checkWithEpsilon = function (value) {
            return value < BABYLON.PhysicsEngine.Epsilon ? BABYLON.PhysicsEngine.Epsilon : value;
        };
        OimoJSPlugin.prototype.initialize = function (iterations) {
            this._world = new OIMO.World();
            this._world.clear();
        };
        OimoJSPlugin.prototype.setGravity = function (gravity) {
            this._world.gravity = gravity;
        };
        OimoJSPlugin.prototype.registerMesh = function (mesh, impostor, options) {
            var body = null;
            this.unregisterMesh(mesh);
            mesh.computeWorldMatrix(true);
            switch (impostor) {
            case BABYLON.PhysicsEngine.SphereImpostor:
                var bbox = mesh.getBoundingInfo().boundingBox;
                var radiusX = bbox.maximumWorld.x - bbox.minimumWorld.x;
                var radiusY = bbox.maximumWorld.y - bbox.minimumWorld.y;
                var radiusZ = bbox.maximumWorld.z - bbox.minimumWorld.z;
                var size = Math.max(this._checkWithEpsilon(radiusX), this._checkWithEpsilon(radiusY), this._checkWithEpsilon(radiusZ)) / 2;
                body = new OIMO.Body({
                    type: 'sphere',
                    size: [size],
                    pos: [mesh.position.x, mesh.position.y, mesh.position.z],
                    rot: [mesh.rotation.x / OIMO.TO_RAD, mesh.rotation.y / OIMO.TO_RAD, mesh.rotation.z / OIMO.TO_RAD],
                    move: options.mass != 0,
                    config: [options.mass, options.friction, options.restitution],
                    world: this._world
                });
                this._registeredMeshes.push({
                    mesh: mesh,
                    body: body
                });
                break;
            case BABYLON.PhysicsEngine.PlaneImpostor:
            case BABYLON.PhysicsEngine.BoxImpostor:
                bbox = mesh.getBoundingInfo().boundingBox;
                var min = bbox.minimumWorld;
                var max = bbox.maximumWorld;
                var box = max.subtract(min);
                var sizeX = this._checkWithEpsilon(box.x);
                var sizeY = this._checkWithEpsilon(box.y);
                var sizeZ = this._checkWithEpsilon(box.z);
                body = new OIMO.Body({
                    type: 'box',
                    size: [sizeX, sizeY, sizeZ],
                    pos: [mesh.position.x, mesh.position.y, mesh.position.z],
                    rot: [mesh.rotation.x / OIMO.TO_RAD, mesh.rotation.y / OIMO.TO_RAD, mesh.rotation.z / OIMO.TO_RAD],
                    move: options.mass != 0,
                    config: [options.mass, options.friction, options.restitution],
                    world: this._world
                });
                this._registeredMeshes.push({
                    mesh: mesh,
                    body: body
                });
                break;
            }
            return body;
        };
        OimoJSPlugin.prototype.registerMeshesAsCompound = function (parts, options) {
            var types = [],
                sizes = [],
                positions = [],
                rotations = [];
            var initialMesh = parts[0].mesh;
            for (var index = 0; index < parts.length; index++) {
                var part = parts[index];
                var bodyParameters = this._createBodyAsCompound(part, options, initialMesh);
                types.push(bodyParameters.type);
                sizes.push.apply(sizes, bodyParameters.size);
                positions.push.apply(positions, bodyParameters.pos);
                rotations.push.apply(rotations, bodyParameters.rot);
            }
            var body = new OIMO.Body({
                type: types,
                size: sizes,
                pos: positions,
                rot: rotations,
                move: options.mass != 0,
                config: [options.mass, options.friction, options.restitution],
                world: this._world
            });
            this._registeredMeshes.push({
                mesh: initialMesh,
                body: body
            });
            return body;
        };
        OimoJSPlugin.prototype._createBodyAsCompound = function (part, options, initialMesh) {
            var bodyParameters = null;
            var mesh = part.mesh;
            switch (part.impostor) {
            case BABYLON.PhysicsEngine.SphereImpostor:
                var bbox = mesh.getBoundingInfo().boundingBox;
                var radiusX = bbox.maximumWorld.x - bbox.minimumWorld.x;
                var radiusY = bbox.maximumWorld.y - bbox.minimumWorld.y;
                var radiusZ = bbox.maximumWorld.z - bbox.minimumWorld.z;
                var size = Math.max(this._checkWithEpsilon(radiusX), this._checkWithEpsilon(radiusY), this._checkWithEpsilon(radiusZ)) / 2;
                bodyParameters = {
                    type: 'sphere',
                    /*bug with oimo:sphere needs 3 sizes in this case*/
                    size: [size, -1, -1],
                    pos: [mesh.position.x, mesh.position.y, mesh.position.z],
                    rot: [mesh.rotation.x / OIMO.TO_RAD, mesh.rotation.y / OIMO.TO_RAD, mesh.rotation.z / OIMO.TO_RAD]
                };
                break;
            case BABYLON.PhysicsEngine.PlaneImpostor:
            case BABYLON.PhysicsEngine.BoxImpostor:
                bbox = mesh.getBoundingInfo().boundingBox;
                var min = bbox.minimumWorld;
                var max = bbox.maximumWorld;
                var box = max.subtract(min);
                var sizeX = this._checkWithEpsilon(box.x);
                var sizeY = this._checkWithEpsilon(box.y);
                var sizeZ = this._checkWithEpsilon(box.z);
                var relativePosition = mesh.position;
                bodyParameters = {
                    type: 'box',
                    size: [sizeX, sizeY, sizeZ],
                    pos: [relativePosition.x, relativePosition.y, relativePosition.z],
                    rot: [mesh.rotation.x / OIMO.TO_RAD, mesh.rotation.y / OIMO.TO_RAD, mesh.rotation.z / OIMO.TO_RAD]
                };
                break;
            }
            return bodyParameters;
        };
        OimoJSPlugin.prototype.unregisterMesh = function (mesh) {
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh || registeredMesh.mesh === mesh.parent) {
                    if (registeredMesh.body) {
                        this._world.removeRigidBody(registeredMesh.body.body);
                        this._unbindBody(registeredMesh.body);
                    }
                    this._registeredMeshes.splice(index, 1);
                    return;
                }
            }
        };
        OimoJSPlugin.prototype._unbindBody = function (body) {
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.body === body) {
                    registeredMesh.body = null;
                }
            }
        };
        OimoJSPlugin.prototype.applyImpulse = function (mesh, force, contactPoint) {
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh || registeredMesh.mesh === mesh.parent) {
                    registeredMesh.body.body.applyImpulse(contactPoint.scale(OIMO.INV_SCALE), force.scale(OIMO.INV_SCALE));
                    return;
                }
            }
        };
        OimoJSPlugin.prototype.createLink = function (mesh1, mesh2, pivot1, pivot2, options) {
            var body1 = null,
                body2 = null;
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh1) {
                    body1 = registeredMesh.body.body;
                } else if (registeredMesh.mesh === mesh2) {
                    body2 = registeredMesh.body.body;
                }
            }
            if (!body1 || !body2) {
                return false;
            }
            if (!options) {
                options = {};
            }
            new OIMO.Link({
                type: options.type,
                body1: body1,
                body2: body2,
                min: options.min,
                max: options.max,
                axe1: options.axe1,
                axe2: options.axe2,
                pos1: [pivot1.x, pivot1.y, pivot1.z],
                pos2: [pivot2.x, pivot2.y, pivot2.z],
                collision: options.collision,
                spring: options.spring,
                world: this._world
            });
            return true;
        };
        OimoJSPlugin.prototype.dispose = function () {
            this._world.clear();
            while (this._registeredMeshes.length) {
                this.unregisterMesh(this._registeredMeshes[0].mesh);
            }
        };
        OimoJSPlugin.prototype.isSupported = function () {
            return OIMO !== undefined;
        };
        OimoJSPlugin.prototype._getLastShape = function (body) {
            var lastShape = body.shapes;
            while (lastShape.next) {
                lastShape = lastShape.next;
            }
            return lastShape;
        };
        OimoJSPlugin.prototype.runOneStep = function (time) {
            this._world.step();
            var i = this._registeredMeshes.length;
            var m;
            while (i--) {
                var body = this._registeredMeshes[i].body.body;
                var mesh = this._registeredMeshes[i].mesh;
                if (!body.sleeping) {
                    if (body.shapes.next) {
                        var parentShape = this._getLastShape(body);
                        mesh.position.x = parentShape.position.x * OIMO.WORLD_SCALE;
                        mesh.position.y = parentShape.position.y * OIMO.WORLD_SCALE;
                        mesh.position.z = parentShape.position.z * OIMO.WORLD_SCALE;
                        var mtx = BABYLON.Matrix.FromArray(body.getMatrix());
                        if (!mesh.rotationQuaternion) {
                            mesh.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                        }
                        mesh.rotationQuaternion.fromRotationMatrix(mtx);
                    } else {
                        m = body.getMatrix();
                        mtx = BABYLON.Matrix.FromArray(m);
                        mesh.position.x = mtx.m[12];
                        mesh.position.y = mtx.m[13];
                        mesh.position.z = mtx.m[14];
                        if (!mesh.rotationQuaternion) {
                            mesh.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                        }
                        mesh.rotationQuaternion.fromRotationMatrix(mtx);
                    }
                }
            }
        };
        return OimoJSPlugin;
    })();
    BABYLON.OimoJSPlugin = OimoJSPlugin;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PhysicsEngine = (function () {
        function PhysicsEngine(plugin) {
            this._currentPlugin = plugin || new BABYLON.OimoJSPlugin();
        }
        PhysicsEngine.prototype._initialize = function (gravity) {
            this._currentPlugin.initialize();
            this._setGravity(gravity);
        };
        PhysicsEngine.prototype._runOneStep = function (delta) {
            if (delta > 0.1) {
                delta = 0.1;
            } else if (delta <= 0) {
                delta = 1.0 / 60.0;
            }
            this._currentPlugin.runOneStep(delta);
        };
        PhysicsEngine.prototype._setGravity = function (gravity) {
            this.gravity = gravity || new BABYLON.Vector3(0, -9.82, 0);
            this._currentPlugin.setGravity(this.gravity);
        };
        PhysicsEngine.prototype._registerMesh = function (mesh, impostor, options) {
            return this._currentPlugin.registerMesh(mesh, impostor, options);
        };
        PhysicsEngine.prototype._registerMeshesAsCompound = function (parts, options) {
            return this._currentPlugin.registerMeshesAsCompound(parts, options);
        };
        PhysicsEngine.prototype._unregisterMesh = function (mesh) {
            this._currentPlugin.unregisterMesh(mesh);
        };
        PhysicsEngine.prototype._applyImpulse = function (mesh, force, contactPoint) {
            this._currentPlugin.applyImpulse(mesh, force, contactPoint);
        };
        PhysicsEngine.prototype._createLink = function (mesh1, mesh2, pivot1, pivot2, options) {
            return this._currentPlugin.createLink(mesh1, mesh2, pivot1, pivot2, options);
        };
        PhysicsEngine.prototype._updateBodyPosition = function (mesh) {
            this._currentPlugin.updateBodyPosition(mesh);
        };
        PhysicsEngine.prototype.dispose = function () {
            this._currentPlugin.dispose();
        };
        PhysicsEngine.prototype.isSupported = function () {
            return this._currentPlugin.isSupported();
        };
        PhysicsEngine.NoImpostor = 0;
        PhysicsEngine.SphereImpostor = 1;
        PhysicsEngine.BoxImpostor = 2;
        PhysicsEngine.PlaneImpostor = 3;
        PhysicsEngine.CompoundImpostor = 4;
        PhysicsEngine.MeshImpostor = 4;
        PhysicsEngine.CapsuleImpostor = 5;
        PhysicsEngine.ConeImpostor = 6;
        PhysicsEngine.CylinderImpostor = 7;
        PhysicsEngine.ConvexHullImpostor = 8;
        PhysicsEngine.Epsilon = 0.001;
        return PhysicsEngine;
    })();
    BABYLON.PhysicsEngine = PhysicsEngine;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var serializeLight = function (light) {
            var serializationObject = {};
            serializationObject.name = light.name;
            serializationObject.id = light.id;
            serializationObject.tags = BABYLON.Tags.GetTags(light);
            if (light instanceof BABYLON.PointLight) {
                serializationObject.type = 0;
                serializationObject.position = light.position.asArray();
            } else if (light instanceof BABYLON.DirectionalLight) {
                serializationObject.type = 1;
                var directionalLight = light;
                serializationObject.position = directionalLight.position.asArray();
                serializationObject.direction = directionalLight.direction.asArray();
            } else if (light instanceof BABYLON.SpotLight) {
                serializationObject.type = 2;
                var spotLight = light;
                serializationObject.position = spotLight.position.asArray();
                serializationObject.direction = spotLight.position.asArray();
                serializationObject.angle = spotLight.angle;
                serializationObject.exponent = spotLight.exponent;
            } else if (light instanceof BABYLON.HemisphericLight) {
                serializationObject.type = 3;
                var hemisphericLight = light;
                serializationObject.direction = hemisphericLight.direction.asArray();
                serializationObject.groundColor = hemisphericLight.groundColor.asArray();
            }
            if (light.intensity) {
                serializationObject.intensity = light.intensity;
            }
            serializationObject.range = light.range;
            serializationObject.diffuse = light.diffuse.asArray();
            serializationObject.specular = light.specular.asArray();
            return serializationObject;
        };
    var serializeCamera = function (camera) {
            var serializationObject = {};
            serializationObject.name = camera.name;
            serializationObject.tags = BABYLON.Tags.GetTags(camera);
            serializationObject.id = camera.id;
            serializationObject.position = camera.position.asArray();
            if (camera.parent) {
                serializationObject.parentId = camera.parent.id;
            }
            serializationObject.rotation = camera.rotation.asArray();
            if (camera.lockedTarget && camera.lockedTarget.id) {
                serializationObject.lockedTargetId = camera.lockedTarget.id;
            }
            serializationObject.fov = camera.fov;
            serializationObject.minZ = camera.minZ;
            serializationObject.maxZ = camera.maxZ;
            serializationObject.speed = camera.speed;
            serializationObject.inertia = camera.inertia;
            serializationObject.checkCollisions = camera.checkCollisions;
            serializationObject.applyGravity = camera.applyGravity;
            if (camera.ellipsoid) {
                serializationObject.ellipsoid = camera.ellipsoid.asArray();
            }
            appendAnimations(camera, serializationObject);
            serializationObject.layerMask = camera.layerMask;
            return serializationObject;
        };
    var appendAnimations = function (source, destination) {
            if (source.animations) {
                destination.animations = [];
                for (var animationIndex = 0; animationIndex < source.animations.length; animationIndex++) {
                    var animation = source.animations[animationIndex];
                    destination.animations.push(serializeAnimation(animation));
                }
            }
        };
    var serializeAnimation = function (animation) {
            var serializationObject = {};
            serializationObject.name = animation.name;
            serializationObject.property = animation.targetProperty;
            serializationObject.framePerSecond = animation.framePerSecond;
            serializationObject.dataType = animation.dataType;
            serializationObject.loopBehavior = animation.loopMode;
            var dataType = animation.dataType;
            serializationObject.keys = [];
            var keys = animation.getKeys();
            for (var index = 0; index < keys.length; index++) {
                var animationKey = keys[index];
                var key = {};
                key.frame = animationKey.frame;
                switch (dataType) {
                case BABYLON.Animation.ANIMATIONTYPE_FLOAT:
                    key.values = [animationKey.value];
                    break;
                case BABYLON.Animation.ANIMATIONTYPE_QUATERNION:
                case BABYLON.Animation.ANIMATIONTYPE_MATRIX:
                case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:
                    key.values = animationKey.value.asArray();
                    break;
                }
                serializationObject.keys.push(key);
            }
            return serializationObject;
        };
    var serializeMultiMaterial = function (material) {
            var serializationObject = {};
            serializationObject.name = material.name;
            serializationObject.id = material.id;
            serializationObject.tags = BABYLON.Tags.GetTags(material);
            serializationObject.materials = [];
            for (var matIndex = 0; matIndex < material.subMaterials.length; matIndex++) {
                var subMat = material.subMaterials[matIndex];
                if (subMat) {
                    serializationObject.materials.push(subMat.id);
                } else {
                    serializationObject.materials.push(null);
                }
            }
            return serializationObject;
        };
    var serializeMaterial = function (material) {
            var serializationObject = {};
            serializationObject.name = material.name;
            serializationObject.ambient = material.ambientColor.asArray();
            serializationObject.diffuse = material.diffuseColor.asArray();
            serializationObject.specular = material.specularColor.asArray();
            serializationObject.specularPower = material.specularPower;
            serializationObject.emissive = material.emissiveColor.asArray();
            serializationObject.alpha = material.alpha;
            serializationObject.id = material.id;
            serializationObject.tags = BABYLON.Tags.GetTags(material);
            serializationObject.backFaceCulling = material.backFaceCulling;
            if (material.diffuseTexture) {
                serializationObject.diffuseTexture = serializeTexture(material.diffuseTexture);
            }
            if (material.ambientTexture) {
                serializationObject.ambientTexture = serializeTexture(material.ambientTexture);
            }
            if (material.opacityTexture) {
                serializationObject.opacityTexture = serializeTexture(material.opacityTexture);
            }
            if (material.reflectionTexture) {
                serializationObject.reflectionTexture = serializeTexture(material.reflectionTexture);
            }
            if (material.emissiveTexture) {
                serializationObject.emissiveTexture = serializeTexture(material.emissiveTexture);
            }
            if (material.specularTexture) {
                serializationObject.specularTexture = serializeTexture(material.specularTexture);
            }
            if (material.bumpTexture) {
                serializationObject.bumpTexture = serializeTexture(material.bumpTexture);
            }
            return serializationObject;
        };
    var serializeTexture = function (texture) {
            var serializationObject = {};
            if (!texture.name) {
                return null;
            }
            if (texture instanceof BABYLON.CubeTexture) {
                serializationObject.name = texture.name;
                serializationObject.hasAlpha = texture.hasAlpha;
                serializationObject.level = texture.level;
                serializationObject.coordinatesMode = texture.coordinatesMode;
                return serializationObject;
            }
            if (texture instanceof BABYLON.MirrorTexture) {
                var mirrorTexture = texture;
                serializationObject.renderTargetSize = mirrorTexture.getRenderSize();
                serializationObject.renderList = [];
                for (var index = 0; index < mirrorTexture.renderList.length; index++) {
                    serializationObject.renderList.push(mirrorTexture.renderList[index].id);
                }
                serializationObject.mirrorPlane = mirrorTexture.mirrorPlane.asArray();
            } else if (texture instanceof BABYLON.RenderTargetTexture) {
                var renderTargetTexture = texture;
                serializationObject.renderTargetSize = renderTargetTexture.getRenderSize();
                serializationObject.renderList = [];
                for (index = 0; index < renderTargetTexture.renderList.length; index++) {
                    serializationObject.renderList.push(renderTargetTexture.renderList[index].id);
                }
            }
            var regularTexture = texture;
            serializationObject.name = texture.name;
            serializationObject.hasAlpha = texture.hasAlpha;
            serializationObject.level = texture.level;
            serializationObject.coordinatesIndex = texture.coordinatesIndex;
            serializationObject.coordinatesMode = texture.coordinatesMode;
            serializationObject.uOffset = regularTexture.uOffset;
            serializationObject.vOffset = regularTexture.vOffset;
            serializationObject.uScale = regularTexture.uScale;
            serializationObject.vScale = regularTexture.vScale;
            serializationObject.uAng = regularTexture.uAng;
            serializationObject.vAng = regularTexture.vAng;
            serializationObject.wAng = regularTexture.wAng;
            serializationObject.wrapU = texture.wrapU;
            serializationObject.wrapV = texture.wrapV;
            appendAnimations(texture, serializationObject);
            return serializationObject;
        };
    var serializeSkeleton = function (skeleton) {
            var serializationObject = {};
            serializationObject.name = skeleton.name;
            serializationObject.id = skeleton.id;
            serializationObject.bones = [];
            for (var index = 0; index < skeleton.bones.length; index++) {
                var bone = skeleton.bones[index];
                var serializedBone = {
                    parentBoneIndex: bone.getParent() ? skeleton.bones.indexOf(bone.getParent()) : -1,
                    name: bone.name,
                    matrix: bone.getLocalMatrix().toArray()
                };
                serializationObject.bones.push(serializedBone);
                if (bone.animations && bone.animations.length > 0) {
                    serializedBone.animation = serializeAnimation(bone.animations[0]);
                }
            }
            return serializationObject;
        };
    var serializeParticleSystem = function (particleSystem) {
            var serializationObject = {};
            serializationObject.emitterId = particleSystem.emitter.id;
            serializationObject.capacity = particleSystem.getCapacity();
            if (particleSystem.particleTexture) {
                serializationObject.textureName = particleSystem.particleTexture.name;
            }
            serializationObject.minAngularSpeed = particleSystem.minAngularSpeed;
            serializationObject.maxAngularSpeed = particleSystem.maxAngularSpeed;
            serializationObject.minSize = particleSystem.minSize;
            serializationObject.maxSize = particleSystem.maxSize;
            serializationObject.minLifeTime = particleSystem.minLifeTime;
            serializationObject.maxLifeTime = particleSystem.maxLifeTime;
            serializationObject.emitRate = particleSystem.emitRate;
            serializationObject.minEmitBox = particleSystem.minEmitBox.asArray();
            serializationObject.maxEmitBox = particleSystem.maxEmitBox.asArray();
            serializationObject.gravity = particleSystem.gravity.asArray();
            serializationObject.direction1 = particleSystem.direction1.asArray();
            serializationObject.direction2 = particleSystem.direction2.asArray();
            serializationObject.color1 = particleSystem.color1.asArray();
            serializationObject.color2 = particleSystem.color2.asArray();
            serializationObject.colorDead = particleSystem.colorDead.asArray();
            serializationObject.updateSpeed = particleSystem.updateSpeed;
            serializationObject.targetStopDuration = particleSystem.targetStopDuration;
            serializationObject.textureMask = particleSystem.textureMask.asArray();
            serializationObject.blendMode = particleSystem.blendMode;
            return serializationObject;
        };
    var serializeLensFlareSystem = function (lensFlareSystem) {
            var serializationObject = {};
            serializationObject.emitterId = lensFlareSystem.getEmitter().id;
            serializationObject.borderLimit = lensFlareSystem.borderLimit;
            serializationObject.flares = [];
            for (var index = 0; index < lensFlareSystem.lensFlares.length; index++) {
                var flare = lensFlareSystem.lensFlares[index];
                serializationObject.flares.push({
                    size: flare.size,
                    position: flare.position,
                    color: flare.color.asArray(),
                    textureName: BABYLON.Tools.GetFilename(flare.texture.name)
                });
            }
            return serializationObject;
        };
    var serializeShadowGenerator = function (light) {
            var serializationObject = {};
            var shadowGenerator = light.getShadowGenerator();
            serializationObject.lightId = light.id;
            serializationObject.mapSize = shadowGenerator.getShadowMap().getRenderSize();
            serializationObject.useVarianceShadowMap = shadowGenerator.useVarianceShadowMap;
            serializationObject.usePoissonSampling = shadowGenerator.usePoissonSampling;
            serializationObject.renderList = [];
            for (var meshIndex = 0; meshIndex < shadowGenerator.getShadowMap().renderList.length; meshIndex++) {
                var mesh = shadowGenerator.getShadowMap().renderList[meshIndex];
                serializationObject.renderList.push(mesh.id);
            }
            return serializationObject;
        };
    var serializedGeometries = [];
    var serializeGeometry = function (geometry, serializationGeometries) {
            if (serializedGeometries[geometry.id]) {
                return;
            }
            if (geometry instanceof BABYLON.Geometry.Primitives.Box) {
                serializationGeometries.boxes.push(serializeBox(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.Sphere) {
                serializationGeometries.spheres.push(serializeSphere(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.Cylinder) {
                serializationGeometries.cylinders.push(serializeCylinder(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.Torus) {
                serializationGeometries.toruses.push(serializeTorus(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.Ground) {
                serializationGeometries.grounds.push(serializeGround(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.Plane) {
                serializationGeometries.planes.push(serializePlane(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives.TorusKnot) {
                serializationGeometries.torusKnots.push(serializeTorusKnot(geometry));
            } else if (geometry instanceof BABYLON.Geometry.Primitives._Primitive) {
                throw new Error("Unknow primitive type");
            } else {
                serializationGeometries.vertexData.push(serializeVertexData(geometry));
            }
            serializedGeometries[geometry.id] = true;
        };
    var serializeGeometryBase = function (geometry) {
            var serializationObject = {};
            serializationObject.id = geometry.id;
            if (BABYLON.Tags.HasTags(geometry)) {
                serializationObject.tags = BABYLON.Tags.GetTags(geometry);
            }
            return serializationObject;
        };
    var serializeVertexData = function (vertexData) {
            var serializationObject = serializeGeometryBase(vertexData);
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.PositionKind)) {
                serializationObject.positions = vertexData.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.NormalKind)) {
                serializationObject.normals = vertexData.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                serializationObject.uvs = vertexData.getVerticesData(BABYLON.VertexBuffer.UVKind);
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)) {
                serializationObject.uvs2 = vertexData.getVerticesData(BABYLON.VertexBuffer.UV2Kind);
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.ColorKind)) {
                serializationObject.colors = vertexData.getVerticesData(BABYLON.VertexBuffer.ColorKind);
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)) {
                serializationObject.matricesIndices = vertexData.getVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind);
                serializationObject.matricesIndices._isExpanded = true;
            }
            if (vertexData.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                serializationObject.matricesWeights = vertexData.getVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind);
            }
            serializationObject.indices = vertexData.getIndices();
            return serializationObject;
        };
    var serializePrimitive = function (primitive) {
            var serializationObject = serializeGeometryBase(primitive);
            serializationObject.canBeRegenerated = primitive.canBeRegenerated();
            return serializationObject;
        };
    var serializeBox = function (box) {
            var serializationObject = serializePrimitive(box);
            serializationObject.size = box.size;
            return serializationObject;
        };
    var serializeSphere = function (sphere) {
            var serializationObject = serializePrimitive(sphere);
            serializationObject.segments = sphere.segments;
            serializationObject.diameter = sphere.diameter;
            return serializationObject;
        };
    var serializeCylinder = function (cylinder) {
            var serializationObject = serializePrimitive(cylinder);
            serializationObject.height = cylinder.height;
            serializationObject.diameterTop = cylinder.diameterTop;
            serializationObject.diameterBottom = cylinder.diameterBottom;
            serializationObject.tessellation = cylinder.tessellation;
            return serializationObject;
        };
    var serializeTorus = function (torus) {
            var serializationObject = serializePrimitive(torus);
            serializationObject.diameter = torus.diameter;
            serializationObject.thickness = torus.thickness;
            serializationObject.tessellation = torus.tessellation;
            return serializationObject;
        };
    var serializeGround = function (ground) {
            var serializationObject = serializePrimitive(ground);
            serializationObject.width = ground.width;
            serializationObject.height = ground.height;
            serializationObject.subdivisions = ground.subdivisions;
            return serializationObject;
        };
    var serializePlane = function (plane) {
            var serializationObject = serializePrimitive(plane);
            serializationObject.size = plane.size;
            return serializationObject;
        };
    var serializeTorusKnot = function (torusKnot) {
            var serializationObject = serializePrimitive(torusKnot);
            serializationObject.radius = torusKnot.radius;
            serializationObject.tube = torusKnot.tube;
            serializationObject.radialSegments = torusKnot.radialSegments;
            serializationObject.tubularSegments = torusKnot.tubularSegments;
            serializationObject.p = torusKnot.p;
            serializationObject.q = torusKnot.q;
            return serializationObject;
        };
    var serializeMesh = function (mesh, serializationScene) {
            var serializationObject = {};
            serializationObject.name = mesh.name;
            serializationObject.id = mesh.id;
            if (BABYLON.Tags.HasTags(mesh)) {
                serializationObject.tags = BABYLON.Tags.GetTags(mesh);
            }
            serializationObject.position = mesh.position.asArray();
            if (mesh.rotationQuaternion) {
                serializationObject.rotationQuaternion = mesh.rotationQuaternion.asArray();
            } else if (mesh.rotation) {
                serializationObject.rotation = mesh.rotation.asArray();
            }
            serializationObject.scaling = mesh.scaling.asArray();
            serializationObject.localMatrix = mesh.getPivotMatrix().asArray();
            serializationObject.isEnabled = mesh.isEnabled();
            serializationObject.isVisible = mesh.isVisible;
            serializationObject.infiniteDistance = mesh.infiniteDistance;
            serializationObject.pickable = mesh.isPickable;
            serializationObject.receiveShadows = mesh.receiveShadows;
            serializationObject.billboardMode = mesh.billboardMode;
            serializationObject.visibility = mesh.visibility;
            serializationObject.checkCollisions = mesh.checkCollisions;
            if (mesh.parent) {
                serializationObject.parentId = mesh.parent.id;
            }
            var geometry = mesh._geometry;
            if (geometry) {
                var geometryId = geometry.id;
                serializationObject.geometryId = geometryId;
                if (!mesh.getScene().getGeometryByID(geometryId)) {
                    serializeGeometry(geometry, serializationScene.geometries);
                }
                serializationObject.subMeshes = [];
                for (var subIndex = 0; subIndex < mesh.subMeshes.length; subIndex++) {
                    var subMesh = mesh.subMeshes[subIndex];
                    serializationObject.subMeshes.push({
                        materialIndex: subMesh.materialIndex,
                        verticesStart: subMesh.verticesStart,
                        verticesCount: subMesh.verticesCount,
                        indexStart: subMesh.indexStart,
                        indexCount: subMesh.indexCount
                    });
                }
            }
            if (mesh.material) {
                serializationObject.materialId = mesh.material.id;
            } else {
                mesh.material = null;
            }
            if (mesh.skeleton) {
                serializationObject.skeletonId = mesh.skeleton.id;
            }
            if (mesh.getPhysicsImpostor() !== BABYLON.PhysicsEngine.NoImpostor) {
                serializationObject.physicsMass = mesh.getPhysicsMass();
                serializationObject.physicsFriction = mesh.getPhysicsFriction();
                serializationObject.physicsRestitution = mesh.getPhysicsRestitution();
                switch (mesh.getPhysicsImpostor()) {
                case BABYLON.PhysicsEngine.BoxImpostor:
                    serializationObject.physicsImpostor = 1;
                    break;
                case BABYLON.PhysicsEngine.SphereImpostor:
                    serializationObject.physicsImpostor = 2;
                    break;
                }
            }
            appendAnimations(mesh, serializationObject);
            serializationObject.layerMask = mesh.layerMask;
            return serializationObject;
        };
    var SceneSerializer = (function () {
        function SceneSerializer() {}
        SceneSerializer.Serialize = function (scene) {
            var serializationObject = {};
            serializationObject.useDelayedTextureLoading = scene.useDelayedTextureLoading;
            serializationObject.autoClear = scene.autoClear;
            serializationObject.clearColor = scene.clearColor.asArray();
            serializationObject.ambientColor = scene.ambientColor.asArray();
            serializationObject.gravity = scene.gravity.asArray();
            if (scene.fogMode && scene.fogMode !== 0) {
                serializationObject.fogMode = scene.fogMode;
                serializationObject.fogColor = scene.fogColor.asArray();
                serializationObject.fogStart = scene.fogStart;
                serializationObject.fogEnd = scene.fogEnd;
                serializationObject.fogDensity = scene.fogDensity;
            }
            serializationObject.lights = [];
            for (var index = 0; index < scene.lights.length; index++) {
                var light = scene.lights[index];
                serializationObject.lights.push(serializeLight(light));
            }
            serializationObject.cameras = [];
            for (index = 0; index < scene.cameras.length; index++) {
                var camera = scene.cameras[index];
                if (camera instanceof BABYLON.FreeCamera) {
                    serializationObject.cameras.push(serializeCamera(camera));
                }
            }
            if (scene.activeCamera) {
                serializationObject.activeCameraID = scene.activeCamera.id;
            }
            serializationObject.materials = [];
            serializationObject.multiMaterials = [];
            for (index = 0; index < scene.materials.length; index++) {
                var material = scene.materials[index];
                if (material instanceof BABYLON.StandardMaterial) {
                    serializationObject.materials.push(serializeMaterial(material));
                } else if (material instanceof BABYLON.MultiMaterial) {
                    serializationObject.multiMaterials.push(serializeMultiMaterial(material));
                }
            }
            serializationObject.skeletons = [];
            for (index = 0; index < scene.skeletons.length; index++) {
                serializationObject.skeletons.push(serializeSkeleton(scene.skeletons[index]));
            }
            serializationObject.geometries = {};
            serializationObject.geometries.boxes = [];
            serializationObject.geometries.spheres = [];
            serializationObject.geometries.cylinders = [];
            serializationObject.geometries.toruses = [];
            serializationObject.geometries.grounds = [];
            serializationObject.geometries.planes = [];
            serializationObject.geometries.torusKnots = [];
            serializationObject.geometries.vertexData = [];
            serializedGeometries = [];
            var geometries = scene.getGeometries();
            for (var index = 0; index < geometries.length; index++) {
                var geometry = geometries[index];
                if (geometry.isReady()) {
                    serializeGeometry(geometry, serializationObject.geometries);
                }
            }
            serializationObject.meshes = [];
            for (index = 0; index < scene.meshes.length; index++) {
                var abstractMesh = scene.meshes[index];
                if (abstractMesh instanceof BABYLON.Mesh) {
                    var mesh = abstractMesh;
                    if (mesh.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADED || mesh.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_NONE) {
                        serializationObject.meshes.push(serializeMesh(mesh, serializationObject));
                    }
                }
            }
            serializationObject.particleSystems = [];
            for (index = 0; index < scene.particleSystems.length; index++) {
                serializationObject.particleSystems.push(serializeParticleSystem(scene.particleSystems[index]));
            }
            serializationObject.lensFlareSystems = [];
            for (index = 0; index < scene.lensFlareSystems.length; index++) {
                serializationObject.lensFlareSystems.push(serializeLensFlareSystem(scene.lensFlareSystems[index]));
            }
            serializationObject.shadowGenerators = [];
            for (index = 0; index < scene.lights.length; index++) {
                light = scene.lights[index];
                if (light.getShadowGenerator()) {
                    serializationObject.shadowGenerators.push(serializeShadowGenerator(light));
                }
            }
            return serializationObject;
        };
        return SceneSerializer;
    })();
    BABYLON.SceneSerializer = SceneSerializer;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var SceneLoader = (function () {
        function SceneLoader() {}
        Object.defineProperty(SceneLoader, "ForceFullSceneLoadingForIncremental", {
            get: function () {
                return SceneLoader._ForceFullSceneLoadingForIncremental;
            },
            set: function (value) {
                SceneLoader._ForceFullSceneLoadingForIncremental = value;
            },
            enumerable: true,
            configurable: true
        });
        SceneLoader._getPluginForFilename = function (sceneFilename) {
            var dotPosition = sceneFilename.lastIndexOf(".");
            var extension = sceneFilename.substring(dotPosition).toLowerCase();
            for (var index = 0; index < this._registeredPlugins.length; index++) {
                var plugin = this._registeredPlugins[index];
                if (plugin.extensions.indexOf(extension) !== -1) {
                    return plugin;
                }
            }
            return this._registeredPlugins[this._registeredPlugins.length - 1];
        };
        SceneLoader.RegisterPlugin = function (plugin) {
            plugin.extensions = plugin.extensions.toLowerCase();
            SceneLoader._registeredPlugins.push(plugin);
        };
        SceneLoader.ImportMesh = function (meshesNames, rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) {
            var _this = this;
            var manifestChecked = function (success) {
                    scene.database = database;
                    var plugin = _this._getPluginForFilename(sceneFilename);
                    var importMeshFromData = function (data) {
                            var meshes = [];
                            var particleSystems = [];
                            var skeletons = [];
                            if (!plugin.importMesh(meshesNames, scene, data, rootUrl, meshes, particleSystems, skeletons)) {
                                if (onerror) {
                                    onerror(scene);
                                }
                                return;
                            }
                            if (onsuccess) {
                                scene.importedMeshesFiles.push(rootUrl + sceneFilename);
                                onsuccess(meshes, particleSystems, skeletons);
                            }
                        };
                    if (sceneFilename.substr && sceneFilename.substr(0, 5) === "data:") {
                        importMeshFromData(sceneFilename.substr(5));
                        return;
                    }
                    BABYLON.Tools.LoadFile(rootUrl + sceneFilename, function (data) {
                        importMeshFromData(data);
                    }, progressCallBack, database);
                };
            var database = new BABYLON.Database(rootUrl + sceneFilename, manifestChecked);
        }; /***Load a scene*@param rootUrl a string that defines the root url for scene and resources*@param sceneFilename a string that defines the name of the scene file.can start with"data:"following by the stringified version of the scene*@param engine is the instance of BABYLON.Engine to use to create the scene*/
        SceneLoader.Load = function (rootUrl, sceneFilename, engine, onsuccess, progressCallBack, onerror) {
            var plugin = this._getPluginForFilename(sceneFilename.name || sceneFilename);
            var database;
            var loadSceneFromData = function (data) {
                    var scene = new BABYLON.Scene(engine);
                    scene.database = database;
                    if (!plugin.load(scene, data, rootUrl)) {
                        if (onerror) {
                            onerror(scene);
                        }
                        return;
                    }
                    if (onsuccess) {
                        onsuccess(scene);
                    }
                };
            var manifestChecked = function (success) {
                    BABYLON.Tools.LoadFile(rootUrl + sceneFilename, loadSceneFromData, progressCallBack, database);
                };
            if (sceneFilename.substr && sceneFilename.substr(0, 5) === "data:") {
                loadSceneFromData(sceneFilename.substr(5));
                return;
            }
            if (rootUrl.indexOf("file:") === -1) {
                database = new BABYLON.Database(rootUrl + sceneFilename, manifestChecked);
            } else {
                BABYLON.Tools.ReadFile(sceneFilename, loadSceneFromData, progressCallBack);
            }
        };
        SceneLoader._ForceFullSceneLoadingForIncremental = false;
        SceneLoader._registeredPlugins = new Array();
        return SceneLoader;
    })();
    BABYLON.SceneLoader = SceneLoader;;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    (function (Internals) {
        var loadCubeTexture = function (rootUrl, parsedTexture, scene) {
                var texture = new BABYLON.CubeTexture(rootUrl + parsedTexture.name, scene);
                texture.name = parsedTexture.name;
                texture.hasAlpha = parsedTexture.hasAlpha;
                texture.level = parsedTexture.level;
                texture.coordinatesMode = parsedTexture.coordinatesMode;
                return texture;
            };
        var loadTexture = function (rootUrl, parsedTexture, scene) {
                if (!parsedTexture.name && !parsedTexture.isRenderTarget) {
                    return null;
                }
                if (parsedTexture.isCube) {
                    return loadCubeTexture(rootUrl, parsedTexture, scene);
                }
                var texture;
                if (parsedTexture.mirrorPlane) {
                    texture = new BABYLON.MirrorTexture(parsedTexture.name, parsedTexture.renderTargetSize, scene);
                    texture._waitingRenderList = parsedTexture.renderList;
                    texture.mirrorPlane = BABYLON.Plane.FromArray(parsedTexture.mirrorPlane);
                } else if (parsedTexture.isRenderTarget) {
                    texture = new BABYLON.RenderTargetTexture(parsedTexture.name, parsedTexture.renderTargetSize, scene);
                    texture._waitingRenderList = parsedTexture.renderList;
                } else {
                    texture = new BABYLON.Texture(rootUrl + parsedTexture.name, scene);
                }
                texture.name = parsedTexture.name;
                texture.hasAlpha = parsedTexture.hasAlpha;
                texture.getAlphaFromRGB = parsedTexture.getAlphaFromRGB;
                texture.level = parsedTexture.level;
                texture.coordinatesIndex = parsedTexture.coordinatesIndex;
                texture.coordinatesMode = parsedTexture.coordinatesMode;
                texture.uOffset = parsedTexture.uOffset;
                texture.vOffset = parsedTexture.vOffset;
                texture.uScale = parsedTexture.uScale;
                texture.vScale = parsedTexture.vScale;
                texture.uAng = parsedTexture.uAng;
                texture.vAng = parsedTexture.vAng;
                texture.wAng = parsedTexture.wAng;
                texture.wrapU = parsedTexture.wrapU;
                texture.wrapV = parsedTexture.wrapV;
                if (parsedTexture.animations) {
                    for (var animationIndex = 0; animationIndex < parsedTexture.animations.length; animationIndex++) {
                        var parsedAnimation = parsedTexture.animations[animationIndex];
                        texture.animations.push(parseAnimation(parsedAnimation));
                    }
                }
                return texture;
            };
        var parseSkeleton = function (parsedSkeleton, scene) {
                var skeleton = new BABYLON.Skeleton(parsedSkeleton.name, parsedSkeleton.id, scene);
                for (var index = 0; index < parsedSkeleton.bones.length; index++) {
                    var parsedBone = parsedSkeleton.bones[index];
                    var parentBone = null;
                    if (parsedBone.parentBoneIndex > -1) {
                        parentBone = skeleton.bones[parsedBone.parentBoneIndex];
                    }
                    var bone = new BABYLON.Bone(parsedBone.name, skeleton, parentBone, BABYLON.Matrix.FromArray(parsedBone.matrix));
                    if (parsedBone.animation) {
                        bone.animations.push(parseAnimation(parsedBone.animation));
                    }
                }
                return skeleton;
            };
        var parseMaterial = function (parsedMaterial, scene, rootUrl) {
                var material;
                material = new BABYLON.StandardMaterial(parsedMaterial.name, scene);
                material.ambientColor = BABYLON.Color3.FromArray(parsedMaterial.ambient);
                material.diffuseColor = BABYLON.Color3.FromArray(parsedMaterial.diffuse);
                material.specularColor = BABYLON.Color3.FromArray(parsedMaterial.specular);
                material.specularPower = parsedMaterial.specularPower;
                material.emissiveColor = BABYLON.Color3.FromArray(parsedMaterial.emissive);
                material.alpha = parsedMaterial.alpha;
                material.id = parsedMaterial.id;
                BABYLON.Tags.AddTagsTo(material, parsedMaterial.tags);
                material.backFaceCulling = parsedMaterial.backFaceCulling;
                material.wireframe = parsedMaterial.wireframe;
                if (parsedMaterial.diffuseTexture) {
                    material.diffuseTexture = loadTexture(rootUrl, parsedMaterial.diffuseTexture, scene);
                }
                if (parsedMaterial.ambientTexture) {
                    material.ambientTexture = loadTexture(rootUrl, parsedMaterial.ambientTexture, scene);
                }
                if (parsedMaterial.opacityTexture) {
                    material.opacityTexture = loadTexture(rootUrl, parsedMaterial.opacityTexture, scene);
                }
                if (parsedMaterial.reflectionTexture) {
                    material.reflectionTexture = loadTexture(rootUrl, parsedMaterial.reflectionTexture, scene);
                }
                if (parsedMaterial.emissiveTexture) {
                    material.emissiveTexture = loadTexture(rootUrl, parsedMaterial.emissiveTexture, scene);
                }
                if (parsedMaterial.specularTexture) {
                    material.specularTexture = loadTexture(rootUrl, parsedMaterial.specularTexture, scene);
                }
                if (parsedMaterial.bumpTexture) {
                    material.bumpTexture = loadTexture(rootUrl, parsedMaterial.bumpTexture, scene);
                }
                return material;
            };
        var parseMaterialById = function (id, parsedData, scene, rootUrl) {
                for (var index = 0; index < parsedData.materials.length; index++) {
                    var parsedMaterial = parsedData.materials[index];
                    if (parsedMaterial.id === id) {
                        return parseMaterial(parsedMaterial, scene, rootUrl);
                    }
                }
                return null;
            };
        var parseMultiMaterial = function (parsedMultiMaterial, scene) {
                var multiMaterial = new BABYLON.MultiMaterial(parsedMultiMaterial.name, scene);
                multiMaterial.id = parsedMultiMaterial.id;
                BABYLON.Tags.AddTagsTo(multiMaterial, parsedMultiMaterial.tags);
                for (var matIndex = 0; matIndex < parsedMultiMaterial.materials.length; matIndex++) {
                    var subMatId = parsedMultiMaterial.materials[matIndex];
                    if (subMatId) {
                        multiMaterial.subMaterials.push(scene.getMaterialByID(subMatId));
                    } else {
                        multiMaterial.subMaterials.push(null);
                    }
                }
                return multiMaterial;
            };
        var parseLensFlareSystem = function (parsedLensFlareSystem, scene, rootUrl) {
                var emitter = scene.getLastEntryByID(parsedLensFlareSystem.emitterId);
                var lensFlareSystem = new BABYLON.LensFlareSystem("lensFlareSystem#" + parsedLensFlareSystem.emitterId, emitter, scene);
                lensFlareSystem.borderLimit = parsedLensFlareSystem.borderLimit;
                for (var index = 0; index < parsedLensFlareSystem.flares.length; index++) {
                    var parsedFlare = parsedLensFlareSystem.flares[index];
                    var flare = new BABYLON.LensFlare(parsedFlare.size, parsedFlare.position, BABYLON.Color3.FromArray(parsedFlare.color), rootUrl + parsedFlare.textureName, lensFlareSystem);
                }
                return lensFlareSystem;
            };
        var parseParticleSystem = function (parsedParticleSystem, scene, rootUrl) {
                var emitter = scene.getLastMeshByID(parsedParticleSystem.emitterId);
                var particleSystem = new BABYLON.ParticleSystem("particles#" + emitter.name, parsedParticleSystem.capacity, scene);
                if (parsedParticleSystem.textureName) {
                    particleSystem.particleTexture = new BABYLON.Texture(rootUrl + parsedParticleSystem.textureName, scene);
                    particleSystem.particleTexture.name = parsedParticleSystem.textureName;
                }
                particleSystem.minAngularSpeed = parsedParticleSystem.minAngularSpeed;
                particleSystem.maxAngularSpeed = parsedParticleSystem.maxAngularSpeed;
                particleSystem.minSize = parsedParticleSystem.minSize;
                particleSystem.maxSize = parsedParticleSystem.maxSize;
                particleSystem.minLifeTime = parsedParticleSystem.minLifeTime;
                particleSystem.maxLifeTime = parsedParticleSystem.maxLifeTime;
                particleSystem.emitter = emitter;
                particleSystem.emitRate = parsedParticleSystem.emitRate;
                particleSystem.minEmitBox = BABYLON.Vector3.FromArray(parsedParticleSystem.minEmitBox);
                particleSystem.maxEmitBox = BABYLON.Vector3.FromArray(parsedParticleSystem.maxEmitBox);
                particleSystem.gravity = BABYLON.Vector3.FromArray(parsedParticleSystem.gravity);
                particleSystem.direction1 = BABYLON.Vector3.FromArray(parsedParticleSystem.direction1);
                particleSystem.direction2 = BABYLON.Vector3.FromArray(parsedParticleSystem.direction2);
                particleSystem.color1 = BABYLON.Color4.FromArray(parsedParticleSystem.color1);
                particleSystem.color2 = BABYLON.Color4.FromArray(parsedParticleSystem.color2);
                particleSystem.colorDead = BABYLON.Color4.FromArray(parsedParticleSystem.colorDead);
                particleSystem.updateSpeed = parsedParticleSystem.updateSpeed;
                particleSystem.targetStopDuration = parsedParticleSystem.targetStopFrame;
                particleSystem.textureMask = BABYLON.Color4.FromArray(parsedParticleSystem.textureMask);
                particleSystem.blendMode = parsedParticleSystem.blendMode;
                particleSystem.start();
                return particleSystem;
            };
        var parseShadowGenerator = function (parsedShadowGenerator, scene) {
                var light = scene.getLightByID(parsedShadowGenerator.lightId);
                var shadowGenerator = new BABYLON.ShadowGenerator(parsedShadowGenerator.mapSize, light);
                for (var meshIndex = 0; meshIndex < parsedShadowGenerator.renderList.length; meshIndex++) {
                    var mesh = scene.getMeshByID(parsedShadowGenerator.renderList[meshIndex]);
                    shadowGenerator.getShadowMap().renderList.push(mesh);
                }
                if (parsedShadowGenerator.usePoissonSampling) {
                    shadowGenerator.usePoissonSampling = true;
                } else {
                    shadowGenerator.useVarianceShadowMap = parsedShadowGenerator.useVarianceShadowMap;
                }
                return shadowGenerator;
            };
        var parseAnimation = function (parsedAnimation) {
                var animation = new BABYLON.Animation(parsedAnimation.name, parsedAnimation.property, parsedAnimation.framePerSecond, parsedAnimation.dataType, parsedAnimation.loopBehavior);
                var dataType = parsedAnimation.dataType;
                var keys = [];
                for (var index = 0; index < parsedAnimation.keys.length; index++) {
                    var key = parsedAnimation.keys[index];
                    var data;
                    switch (dataType) {
                    case BABYLON.Animation.ANIMATIONTYPE_FLOAT:
                        data = key.values[0];
                        break;
                    case BABYLON.Animation.ANIMATIONTYPE_QUATERNION:
                        data = BABYLON.Quaternion.FromArray(key.values);
                        break;
                    case BABYLON.Animation.ANIMATIONTYPE_MATRIX:
                        data = BABYLON.Matrix.FromArray(key.values);
                        break;
                    case BABYLON.Animation.ANIMATIONTYPE_VECTOR3:
                    default:
                        data = BABYLON.Vector3.FromArray(key.values);
                        break;
                    }
                    keys.push({
                        frame: key.frame,
                        value: data
                    });
                }
                animation.setKeys(keys);
                return animation;
            };
        var parseLight = function (parsedLight, scene) {
                var light;
                switch (parsedLight.type) {
                case 0:
                    light = new BABYLON.PointLight(parsedLight.name, BABYLON.Vector3.FromArray(parsedLight.position), scene);
                    break;
                case 1:
                    light = new BABYLON.DirectionalLight(parsedLight.name, BABYLON.Vector3.FromArray(parsedLight.direction), scene);
                    light.position = BABYLON.Vector3.FromArray(parsedLight.position);
                    break;
                case 2:
                    light = new BABYLON.SpotLight(parsedLight.name, BABYLON.Vector3.FromArray(parsedLight.position), BABYLON.Vector3.FromArray(parsedLight.direction), parsedLight.angle, parsedLight.exponent, scene);
                    break;
                case 3:
                    light = new BABYLON.HemisphericLight(parsedLight.name, BABYLON.Vector3.FromArray(parsedLight.direction), scene);
                    light.groundColor = BABYLON.Color3.FromArray(parsedLight.groundColor);
                    break;
                }
                light.id = parsedLight.id;
                BABYLON.Tags.AddTagsTo(light, parsedLight.tags);
                if (parsedLight.intensity !== undefined) {
                    light.intensity = parsedLight.intensity;
                }
                if (parsedLight.range) {
                    light.range = parsedLight.range;
                }
                light.diffuse = BABYLON.Color3.FromArray(parsedLight.diffuse);
                light.specular = BABYLON.Color3.FromArray(parsedLight.specular);
                if (parsedLight.excludedMeshesIds) {
                    light._excludedMeshesIds = parsedLight.excludedMeshesIds;
                }
                if (parsedLight.includedOnlyMeshesIds) {
                    light._includedOnlyMeshesIds = parsedLight.includedOnlyMeshesIds;
                }
                if (parsedLight.animations) {
                    for (var animationIndex = 0; animationIndex < parsedLight.animations.length; animationIndex++) {
                        var parsedAnimation = parsedLight.animations[animationIndex];
                        light.animations.push(parseAnimation(parsedAnimation));
                    }
                }
                if (parsedLight.autoAnimate) {
                    scene.beginAnimation(light, parsedLight.autoAnimateFrom, parsedLight.autoAnimateTo, parsedLight.autoAnimateLoop, 1.0);
                }
            };
        var parseCamera = function (parsedCamera, scene) {
                var camera = new BABYLON.FreeCamera(parsedCamera.name, BABYLON.Vector3.FromArray(parsedCamera.position), scene);
                camera.id = parsedCamera.id;
                BABYLON.Tags.AddTagsTo(camera, parsedCamera.tags);
                if (parsedCamera.parentId) {
                    camera._waitingParentId = parsedCamera.parentId;
                }
                if (parsedCamera.target) {
                    camera.setTarget(BABYLON.Vector3.FromArray(parsedCamera.target));
                } else {
                    camera.rotation = BABYLON.Vector3.FromArray(parsedCamera.rotation);
                }
                if (parsedCamera.lockedTargetId) {
                    camera._waitingLockedTargetId = parsedCamera.lockedTargetId;
                }
                camera.fov = parsedCamera.fov;
                camera.minZ = parsedCamera.minZ;
                camera.maxZ = parsedCamera.maxZ;
                camera.speed = parsedCamera.speed;
                camera.inertia = parsedCamera.inertia;
                camera.checkCollisions = parsedCamera.checkCollisions;
                camera.applyGravity = parsedCamera.applyGravity;
                if (parsedCamera.ellipsoid) {
                    camera.ellipsoid = BABYLON.Vector3.FromArray(parsedCamera.ellipsoid);
                }
                if (parsedCamera.animations) {
                    for (var animationIndex = 0; animationIndex < parsedCamera.animations.length; animationIndex++) {
                        var parsedAnimation = parsedCamera.animations[animationIndex];
                        camera.animations.push(parseAnimation(parsedAnimation));
                    }
                }
                if (parsedCamera.autoAnimate) {
                    scene.beginAnimation(camera, parsedCamera.autoAnimateFrom, parsedCamera.autoAnimateTo, parsedCamera.autoAnimateLoop, 1.0);
                }
                if (parsedCamera.layerMask && (!isNaN(parsedCamera.layerMask))) {
                    camera.layerMask = Math.abs(parseInt(parsedCamera.layerMask));
                } else {
                    camera.layerMask = 0xFFFFFFFF;
                }
                return camera;
            };
        var parseGeometry = function (parsedGeometry, scene) {
                var id = parsedGeometry.id;
                return scene.getGeometryByID(id);
            };
        var parseBox = function (parsedBox, scene) {
                if (parseGeometry(parsedBox, scene)) {
                    return null;
                }
                var box = new BABYLON.Geometry.Primitives.Box(parsedBox.id, scene, parsedBox.size, parsedBox.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(box, parsedBox.tags);
                scene.pushGeometry(box, true);
                return box;
            };
        var parseSphere = function (parsedSphere, scene) {
                if (parseGeometry(parsedSphere, scene)) {
                    return null;
                }
                var sphere = new BABYLON.Geometry.Primitives.Sphere(parsedSphere.id, scene, parsedSphere.segments, parsedSphere.diameter, parsedSphere.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(sphere, parsedSphere.tags);
                scene.pushGeometry(sphere, true);
                return sphere;
            };
        var parseCylinder = function (parsedCylinder, scene) {
                if (parseGeometry(parsedCylinder, scene)) {
                    return null;
                }
                var cylinder = new BABYLON.Geometry.Primitives.Cylinder(parsedCylinder.id, scene, parsedCylinder.height, parsedCylinder.diameterTop, parsedCylinder.diameterBottom, parsedCylinder.tessellation, parsedCylinder.subdivisions, parsedCylinder.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(cylinder, parsedCylinder.tags);
                scene.pushGeometry(cylinder, true);
                return cylinder;
            };
        var parseTorus = function (parsedTorus, scene) {
                if (parseGeometry(parsedTorus, scene)) {
                    return null;
                }
                var torus = new BABYLON.Geometry.Primitives.Torus(parsedTorus.id, scene, parsedTorus.diameter, parsedTorus.thickness, parsedTorus.tessellation, parsedTorus.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(torus, parsedTorus.tags);
                scene.pushGeometry(torus, true);
                return torus;
            };
        var parseGround = function (parsedGround, scene) {
                if (parseGeometry(parsedGround, scene)) {
                    return null;
                }
                var ground = new BABYLON.Geometry.Primitives.Ground(parsedGround.id, scene, parsedGround.width, parsedGround.height, parsedGround.subdivisions, parsedGround.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(ground, parsedGround.tags);
                scene.pushGeometry(ground, true);
                return ground;
            };
        var parsePlane = function (parsedPlane, scene) {
                if (parseGeometry(parsedPlane, scene)) {
                    return null;
                }
                var plane = new BABYLON.Geometry.Primitives.Plane(parsedPlane.id, scene, parsedPlane.size, parsedPlane.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(plane, parsedPlane.tags);
                scene.pushGeometry(plane, true);
                return plane;
            };
        var parseTorusKnot = function (parsedTorusKnot, scene) {
                if (parseGeometry(parsedTorusKnot, scene)) {
                    return null;
                }
                var torusKnot = new BABYLON.Geometry.Primitives.TorusKnot(parsedTorusKnot.id, scene, parsedTorusKnot.radius, parsedTorusKnot.tube, parsedTorusKnot.radialSegments, parsedTorusKnot.tubularSegments, parsedTorusKnot.p, parsedTorusKnot.q, parsedTorusKnot.canBeRegenerated, null);
                BABYLON.Tags.AddTagsTo(torusKnot, parsedTorusKnot.tags);
                scene.pushGeometry(torusKnot, true);
                return torusKnot;
            };
        var parseVertexData = function (parsedVertexData, scene, rootUrl) {
                if (parseGeometry(parsedVertexData, scene)) {
                    return null;
                }
                var geometry = new BABYLON.Geometry(parsedVertexData.id, scene);
                BABYLON.Tags.AddTagsTo(geometry, parsedVertexData.tags);
                if (parsedVertexData.delayLoadingFile) {
                    geometry.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;
                    geometry.delayLoadingFile = rootUrl + parsedVertexData.delayLoadingFile;
                    geometry._boundingInfo = new BABYLON.BoundingInfo(BABYLON.Vector3.FromArray(parsedVertexData.boundingBoxMinimum), BABYLON.Vector3.FromArray(parsedVertexData.boundingBoxMaximum));
                    geometry._delayInfo = [];
                    if (parsedVertexData.hasUVs) {
                        geometry._delayInfo.push(BABYLON.VertexBuffer.UVKind);
                    }
                    if (parsedVertexData.hasUVs2) {
                        geometry._delayInfo.push(BABYLON.VertexBuffer.UV2Kind);
                    }
                    if (parsedVertexData.hasColors) {
                        geometry._delayInfo.push(BABYLON.VertexBuffer.ColorKind);
                    }
                    if (parsedVertexData.hasMatricesIndices) {
                        geometry._delayInfo.push(BABYLON.VertexBuffer.MatricesIndicesKind);
                    }
                    if (parsedVertexData.hasMatricesWeights) {
                        geometry._delayInfo.push(BABYLON.VertexBuffer.MatricesWeightsKind);
                    }
                    geometry._delayLoadingFunction = importVertexData;
                } else {
                    importVertexData(parsedVertexData, geometry);
                }
                scene.pushGeometry(geometry, true);
                return geometry;
            };
        var parseMesh = function (parsedMesh, scene, rootUrl) {
                var mesh = new BABYLON.Mesh(parsedMesh.name, scene);
                mesh.id = parsedMesh.id;
                BABYLON.Tags.AddTagsTo(mesh, parsedMesh.tags);
                mesh.position = BABYLON.Vector3.FromArray(parsedMesh.position);
                if (parsedMesh.rotationQuaternion) {
                    mesh.rotationQuaternion = BABYLON.Quaternion.FromArray(parsedMesh.rotationQuaternion);
                } else if (parsedMesh.rotation) {
                    mesh.rotation = BABYLON.Vector3.FromArray(parsedMesh.rotation);
                }
                mesh.scaling = BABYLON.Vector3.FromArray(parsedMesh.scaling);
                if (parsedMesh.localMatrix) {
                    mesh.setPivotMatrix(BABYLON.Matrix.FromArray(parsedMesh.localMatrix));
                } else if (parsedMesh.pivotMatrix) {
                    mesh.setPivotMatrix(BABYLON.Matrix.FromArray(parsedMesh.pivotMatrix));
                }
                mesh.setEnabled(parsedMesh.isEnabled);
                mesh.isVisible = parsedMesh.isVisible;
                mesh.infiniteDistance = parsedMesh.infiniteDistance;
                mesh.showBoundingBox = parsedMesh.showBoundingBox;
                mesh.showSubMeshesBoundingBox = parsedMesh.showSubMeshesBoundingBox;
                if (parsedMesh.pickable !== undefined) {
                    mesh.isPickable = parsedMesh.pickable;
                }
                mesh.receiveShadows = parsedMesh.receiveShadows;
                mesh.billboardMode = parsedMesh.billboardMode;
                if (parsedMesh.visibility !== undefined) {
                    mesh.visibility = parsedMesh.visibility;
                }
                mesh.checkCollisions = parsedMesh.checkCollisions;
                mesh._shouldGenerateFlatShading = parsedMesh.useFlatShading;
                if (parsedMesh.parentId) {
                    mesh.parent = scene.getLastEntryByID(parsedMesh.parentId);
                }
                if (parsedMesh.delayLoadingFile) {
                    mesh.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NOTLOADED;
                    mesh.delayLoadingFile = rootUrl + parsedMesh.delayLoadingFile;
                    mesh._boundingInfo = new BABYLON.BoundingInfo(BABYLON.Vector3.FromArray(parsedMesh.boundingBoxMinimum), BABYLON.Vector3.FromArray(parsedMesh.boundingBoxMaximum));
                    mesh._delayInfo = [];
                    if (parsedMesh.hasUVs) {
                        mesh._delayInfo.push(BABYLON.VertexBuffer.UVKind);
                    }
                    if (parsedMesh.hasUVs2) {
                        mesh._delayInfo.push(BABYLON.VertexBuffer.UV2Kind);
                    }
                    if (parsedMesh.hasColors) {
                        mesh._delayInfo.push(BABYLON.VertexBuffer.ColorKind);
                    }
                    if (parsedMesh.hasMatricesIndices) {
                        mesh._delayInfo.push(BABYLON.VertexBuffer.MatricesIndicesKind);
                    }
                    if (parsedMesh.hasMatricesWeights) {
                        mesh._delayInfo.push(BABYLON.VertexBuffer.MatricesWeightsKind);
                    }
                    mesh._delayLoadingFunction = importGeometry;
                    if (BABYLON.SceneLoader.ForceFullSceneLoadingForIncremental) {
                        mesh._checkDelayState();
                    }
                } else {
                    importGeometry(parsedMesh, mesh);
                }
                if (parsedMesh.materialId) {
                    mesh.setMaterialByID(parsedMesh.materialId);
                } else {
                    mesh.material = null;
                }
                if (parsedMesh.skeletonId > -1) {
                    mesh.skeleton = scene.getLastSkeletonByID(parsedMesh.skeletonId);
                }
                if (parsedMesh.physicsImpostor) {
                    if (!scene.isPhysicsEnabled()) {
                        scene.enablePhysics();
                    }
                    mesh.setPhysicsState({
                        impostor: parsedMesh.physicsImpostor,
                        mass: parsedMesh.physicsMass,
                        friction: parsedMesh.physicsFriction,
                        restitution: parsedMesh.physicsRestitution
                    });
                }
                if (parsedMesh.animations) {
                    for (var animationIndex = 0; animationIndex < parsedMesh.animations.length; animationIndex++) {
                        var parsedAnimation = parsedMesh.animations[animationIndex];
                        mesh.animations.push(parseAnimation(parsedAnimation));
                    }
                }
                if (parsedMesh.autoAnimate) {
                    scene.beginAnimation(mesh, parsedMesh.autoAnimateFrom, parsedMesh.autoAnimateTo, parsedMesh.autoAnimateLoop, 1.0);
                }
                if (parsedMesh.layerMask && (!isNaN(parsedMesh.layerMask))) {
                    mesh.layerMask = Math.abs(parseInt(parsedMesh.layerMask));
                } else {
                    mesh.layerMask = 0xFFFFFFFF;
                }
                if (parsedMesh.instances) {
                    for (var index = 0; index < parsedMesh.instances.length; index++) {
                        var parsedInstance = parsedMesh.instances[index];
                        var instance = mesh.createInstance(parsedInstance.name);
                        BABYLON.Tags.AddTagsTo(instance, parsedInstance.tags);
                        instance.position = BABYLON.Vector3.FromArray(parsedInstance.position);
                        if (parsedInstance.rotationQuaternion) {
                            instance.rotationQuaternion = BABYLON.Quaternion.FromArray(parsedInstance.rotationQuaternion);
                        } else if (parsedInstance.rotation) {
                            instance.rotation = BABYLON.Vector3.FromArray(parsedInstance.rotation);
                        }
                        instance.scaling = BABYLON.Vector3.FromArray(parsedInstance.scaling);
                        instance.checkCollisions = mesh.checkCollisions;
                        if (parsedMesh.animations) {
                            for (animationIndex = 0; animationIndex < parsedMesh.animations.length; animationIndex++) {
                                parsedAnimation = parsedMesh.animations[animationIndex];
                                instance.animations.push(parseAnimation(parsedAnimation));
                            }
                        }
                    }
                }
                return mesh;
            };
        var isDescendantOf = function (mesh, names, hierarchyIds) {
                names = (names instanceof Array) ? names : [names];
                for (var i in names) {
                    if (mesh.name === names[i]) {
                        hierarchyIds.push(mesh.id);
                        return true;
                    }
                }
                if (mesh.parentId && hierarchyIds.indexOf(mesh.parentId) !== -1) {
                    hierarchyIds.push(mesh.id);
                    return true;
                }
                return false;
            };
        var importVertexData = function (parsedVertexData, geometry) {
                var vertexData = new BABYLON.VertexData();
                var positions = parsedVertexData.positions;
                if (positions) {
                    vertexData.set(positions, BABYLON.VertexBuffer.PositionKind);
                }
                var normals = parsedVertexData.normals;
                if (normals) {
                    vertexData.set(normals, BABYLON.VertexBuffer.NormalKind);
                }
                var uvs = parsedVertexData.uvs;
                if (uvs) {
                    vertexData.set(uvs, BABYLON.VertexBuffer.UVKind);
                }
                var uv2s = parsedVertexData.uv2s;
                if (uv2s) {
                    vertexData.set(uv2s, BABYLON.VertexBuffer.UV2Kind);
                }
                var colors = parsedVertexData.colors;
                if (colors) {
                    vertexData.set(colors, BABYLON.VertexBuffer.ColorKind);
                }
                var matricesIndices = parsedVertexData.matricesIndices;
                if (matricesIndices) {
                    vertexData.set(matricesIndices, BABYLON.VertexBuffer.MatricesIndicesKind);
                }
                var matricesWeights = parsedVertexData.matricesWeights;
                if (matricesWeights) {
                    vertexData.set(matricesWeights, BABYLON.VertexBuffer.MatricesWeightsKind);
                }
                var indices = parsedVertexData.indices;
                if (indices) {
                    vertexData.indices = indices;
                }
                geometry.setAllVerticesData(vertexData, parsedVertexData.updatable);
            };
        var importGeometry = function (parsedGeometry, mesh) {
                var scene = mesh.getScene();
                var geometryId = parsedGeometry.geometryId;
                if (geometryId) {
                    var geometry = scene.getGeometryByID(geometryId);
                    if (geometry) {
                        geometry.applyToMesh(mesh);
                    }
                } else if (parsedGeometry.positions && parsedGeometry.normals && parsedGeometry.indices) {
                    mesh.setVerticesData(BABYLON.VertexBuffer.PositionKind, parsedGeometry.positions, false);
                    mesh.setVerticesData(BABYLON.VertexBuffer.NormalKind, parsedGeometry.normals, false);
                    if (parsedGeometry.uvs) {
                        mesh.setVerticesData(BABYLON.VertexBuffer.UVKind, parsedGeometry.uvs, false);
                    }
                    if (parsedGeometry.uvs2) {
                        mesh.setVerticesData(BABYLON.VertexBuffer.UV2Kind, parsedGeometry.uvs2, false);
                    }
                    if (parsedGeometry.colors) {
                        mesh.setVerticesData(BABYLON.VertexBuffer.ColorKind, parsedGeometry.colors, false);
                    }
                    if (parsedGeometry.matricesIndices) {
                        if (!parsedGeometry.matricesIndices._isExpanded) {
                            var floatIndices = [];
                            for (var i = 0; i < parsedGeometry.matricesIndices.length; i++) {
                                var matricesIndex = parsedGeometry.matricesIndices[i];
                                floatIndices.push(matricesIndex & 0x000000FF);
                                floatIndices.push((matricesIndex & 0x0000FF00) >> 8);
                                floatIndices.push((matricesIndex & 0x00FF0000) >> 16);
                                floatIndices.push(matricesIndex >> 24);
                            }
                            mesh.setVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind, floatIndices, false);
                        } else {
                            delete parsedGeometry.matricesIndices._isExpanded;
                            mesh.setVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind, parsedGeometry.matricesIndices, false);
                        }
                    }
                    if (parsedGeometry.matricesWeights) {
                        mesh.setVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind, parsedGeometry.matricesWeights, false);
                    }
                    mesh.setIndices(parsedGeometry.indices);
                }
                if (parsedGeometry.subMeshes) {
                    mesh.subMeshes = [];
                    for (var subIndex = 0; subIndex < parsedGeometry.subMeshes.length; subIndex++) {
                        var parsedSubMesh = parsedGeometry.subMeshes[subIndex];
                        var subMesh = new BABYLON.SubMesh(parsedSubMesh.materialIndex, parsedSubMesh.verticesStart, parsedSubMesh.verticesCount, parsedSubMesh.indexStart, parsedSubMesh.indexCount, mesh);
                    }
                }
                if (mesh._shouldGenerateFlatShading) {
                    mesh.convertToFlatShadedMesh();
                    delete mesh._shouldGenerateFlatShading;
                }
                mesh.computeWorldMatrix(true);
                if (scene._selectionOctree) {
                    scene._selectionOctree.addMesh(mesh);
                }
            };
        BABYLON.SceneLoader.RegisterPlugin({
            extensions: ".babylon",
            importMesh: function (meshesNames, scene, data, rootUrl, meshes, particleSystems, skeletons) {
                var parsedData = JSON.parse(data);
                var loadedSkeletonsIds = [];
                var loadedMaterialsIds = [];
                var hierarchyIds = [];
                for (var index = 0; index < parsedData.meshes.length; index++) {
                    var parsedMesh = parsedData.meshes[index];
                    if (!meshesNames || isDescendantOf(parsedMesh, meshesNames, hierarchyIds)) {
                        if (meshesNames instanceof Array) {
                            delete meshesNames[meshesNames.indexOf(parsedMesh.name)];
                        }
                        if (parsedMesh.materialId) {
                            var materialFound = (loadedMaterialsIds.indexOf(parsedMesh.materialId) !== -1);
                            if (!materialFound) {
                                for (var multimatIndex = 0; multimatIndex < parsedData.multiMaterials.length; multimatIndex++) {
                                    var parsedMultiMaterial = parsedData.multiMaterials[multimatIndex];
                                    if (parsedMultiMaterial.id == parsedMesh.materialId) {
                                        for (var matIndex = 0; matIndex < parsedMultiMaterial.materials.length; matIndex++) {
                                            var subMatId = parsedMultiMaterial.materials[matIndex];
                                            loadedMaterialsIds.push(subMatId);
                                            parseMaterialById(subMatId, parsedData, scene, rootUrl);
                                        }
                                        loadedMaterialsIds.push(parsedMultiMaterial.id);
                                        parseMultiMaterial(parsedMultiMaterial, scene);
                                        materialFound = true;
                                        break;
                                    }
                                }
                            }
                            if (!materialFound) {
                                loadedMaterialsIds.push(parsedMesh.materialId);
                                parseMaterialById(parsedMesh.materialId, parsedData, scene, rootUrl);
                            }
                        }
                        if (parsedMesh.skeletonId > -1 && scene.skeletons) {
                            var skeletonAlreadyLoaded = (loadedSkeletonsIds.indexOf(parsedMesh.skeletonId) > -1);
                            if (!skeletonAlreadyLoaded) {
                                for (var skeletonIndex = 0; skeletonIndex < parsedData.skeletons.length; skeletonIndex++) {
                                    var parsedSkeleton = parsedData.skeletons[skeletonIndex];
                                    if (parsedSkeleton.id === parsedMesh.skeletonId) {
                                        skeletons.push(parseSkeleton(parsedSkeleton, scene));
                                        loadedSkeletonsIds.push(parsedSkeleton.id);
                                    }
                                }
                            }
                        }
                        var mesh = parseMesh(parsedMesh, scene, rootUrl);
                        meshes.push(mesh);
                    }
                }
                if (parsedData.particleSystems) {
                    for (index = 0; index < parsedData.particleSystems.length; index++) {
                        var parsedParticleSystem = parsedData.particleSystems[index];
                        if (hierarchyIds.indexOf(parsedParticleSystem.emitterId) !== -1) {
                            particleSystems.push(parseParticleSystem(parsedParticleSystem, scene, rootUrl));
                        }
                    }
                }
                return true;
            },
            load: function (scene, data, rootUrl) {
                var parsedData = JSON.parse(data);
                scene.useDelayedTextureLoading = parsedData.useDelayedTextureLoading && !BABYLON.SceneLoader.ForceFullSceneLoadingForIncremental;
                scene.autoClear = parsedData.autoClear;
                scene.clearColor = BABYLON.Color3.FromArray(parsedData.clearColor);
                scene.ambientColor = BABYLON.Color3.FromArray(parsedData.ambientColor);
                scene.gravity = BABYLON.Vector3.FromArray(parsedData.gravity);
                if (parsedData.fogMode && parsedData.fogMode !== 0) {
                    scene.fogMode = parsedData.fogMode;
                    scene.fogColor = BABYLON.Color3.FromArray(parsedData.fogColor);
                    scene.fogStart = parsedData.fogStart;
                    scene.fogEnd = parsedData.fogEnd;
                    scene.fogDensity = parsedData.fogDensity;
                }
                for (var index = 0; index < parsedData.lights.length; index++) {
                    var parsedLight = parsedData.lights[index];
                    parseLight(parsedLight, scene);
                }
                for (index = 0; index < parsedData.cameras.length; index++) {
                    var parsedCamera = parsedData.cameras[index];
                    parseCamera(parsedCamera, scene);
                }
                if (parsedData.activeCameraID) {
                    scene.setActiveCameraByID(parsedData.activeCameraID);
                }
                if (parsedData.materials) {
                    for (index = 0; index < parsedData.materials.length; index++) {
                        var parsedMaterial = parsedData.materials[index];
                        parseMaterial(parsedMaterial, scene, rootUrl);
                    }
                }
                if (parsedData.multiMaterials) {
                    for (index = 0; index < parsedData.multiMaterials.length; index++) {
                        var parsedMultiMaterial = parsedData.multiMaterials[index];
                        parseMultiMaterial(parsedMultiMaterial, scene);
                    }
                }
                if (parsedData.skeletons) {
                    for (index = 0; index < parsedData.skeletons.length; index++) {
                        var parsedSkeleton = parsedData.skeletons[index];
                        parseSkeleton(parsedSkeleton, scene);
                    }
                }
                var geometries = parsedData.geometries;
                if (geometries) {
                    var boxes = geometries.boxes;
                    if (boxes) {
                        for (index = 0; index < boxes.length; index++) {
                            var parsedBox = boxes[index];
                            parseBox(parsedBox, scene);
                        }
                    }
                    var spheres = geometries.spheres;
                    if (spheres) {
                        for (index = 0; index < spheres.length; index++) {
                            var parsedSphere = spheres[index];
                            parseSphere(parsedSphere, scene);
                        }
                    }
                    var cylinders = geometries.cylinders;
                    if (cylinders) {
                        for (index = 0; index < cylinders.length; index++) {
                            var parsedCylinder = cylinders[index];
                            parseCylinder(parsedCylinder, scene);
                        }
                    }
                    var toruses = geometries.toruses;
                    if (toruses) {
                        for (index = 0; index < toruses.length; index++) {
                            var parsedTorus = toruses[index];
                            parseTorus(parsedTorus, scene);
                        }
                    }
                    var grounds = geometries.grounds;
                    if (grounds) {
                        for (index = 0; index < grounds.length; index++) {
                            var parsedGround = grounds[index];
                            parseGround(parsedGround, scene);
                        }
                    }
                    var planes = geometries.planes;
                    if (planes) {
                        for (index = 0; index < planes.length; index++) {
                            var parsedPlane = planes[index];
                            parsePlane(parsedPlane, scene);
                        }
                    }
                    var torusKnots = geometries.torusKnots;
                    if (torusKnots) {
                        for (index = 0; index < torusKnots.length; index++) {
                            var parsedTorusKnot = torusKnots[index];
                            parseTorusKnot(parsedTorusKnot, scene);
                        }
                    }
                    var vertexData = geometries.vertexData;
                    if (vertexData) {
                        for (index = 0; index < vertexData.length; index++) {
                            var parsedVertexData = vertexData[index];
                            parseVertexData(parsedVertexData, scene, rootUrl);
                        }
                    }
                }
                for (index = 0; index < parsedData.meshes.length; index++) {
                    var parsedMesh = parsedData.meshes[index];
                    parseMesh(parsedMesh, scene, rootUrl);
                }
                for (index = 0; index < scene.cameras.length; index++) {
                    var camera = scene.cameras[index];
                    if (camera._waitingParentId) {
                        camera.parent = scene.getLastEntryByID(camera._waitingParentId);
                        delete camera._waitingParentId;
                    }
                    if (camera instanceof BABYLON.FreeCamera) {
                        var freecamera = camera;
                        if (freecamera._waitingLockedTargetId) {
                            freecamera.lockedTarget = scene.getLastEntryByID(freecamera._waitingLockedTargetId);
                            delete freecamera._waitingLockedTargetId;
                        }
                    }
                }
                if (parsedData.particleSystems) {
                    for (index = 0; index < parsedData.particleSystems.length; index++) {
                        var parsedParticleSystem = parsedData.particleSystems[index];
                        parseParticleSystem(parsedParticleSystem, scene, rootUrl);
                    }
                }
                if (parsedData.lensFlareSystems) {
                    for (index = 0; index < parsedData.lensFlareSystems.length; index++) {
                        var parsedLensFlareSystem = parsedData.lensFlareSystems[index];
                        parseLensFlareSystem(parsedLensFlareSystem, scene, rootUrl);
                    }
                }
                if (parsedData.shadowGenerators) {
                    for (index = 0; index < parsedData.shadowGenerators.length; index++) {
                        var parsedShadowGenerator = parsedData.shadowGenerators[index];
                        parseShadowGenerator(parsedShadowGenerator, scene);
                    }
                }
                return true;
            }
        });
    })(BABYLON.Internals || (BABYLON.Internals = {}));
    var Internals = BABYLON.Internals;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var currentCSGMeshId = 0;
    var Vertex = (function () {
        function Vertex(pos, normal, uv) {
            this.pos = pos;
            this.normal = normal;
            this.uv = uv;
        }
        Vertex.prototype.clone = function () {
            return new Vertex(this.pos.clone(), this.normal.clone(), this.uv.clone());
        };
        Vertex.prototype.flip = function () {
            this.normal = this.normal.scale(-1);
        };
        Vertex.prototype.interpolate = function (other, t) {
            return new Vertex(BABYLON.Vector3.Lerp(this.pos, other.pos, t), BABYLON.Vector3.Lerp(this.normal, other.normal, t), BABYLON.Vector2.Lerp(this.uv, other.uv, t));
        };
        return Vertex;
    })();
    var Plane = (function () {
        function Plane(normal, w) {
            this.normal = normal;
            this.w = w;
        }
        Plane.FromPoints = function (a, b, c) {
            var v0 = c.subtract(a);
            var v1 = b.subtract(a);
            if (v0.lengthSquared() === 0 || v1.lengthSquared() === 0) {
                return null;
            }
            var n = BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(v0, v1));
            return new Plane(n, BABYLON.Vector3.Dot(n, a));
        };
        Plane.prototype.clone = function () {
            return new Plane(this.normal.clone(), this.w);
        };
        Plane.prototype.flip = function () {
            this.normal.scaleInPlace(-1);
            this.w = -this.w;
        };
        Plane.prototype.splitPolygon = function (polygon, coplanarFront, coplanarBack, front, back) {
            var COPLANAR = 0;
            var FRONT = 1;
            var BACK = 2;
            var SPANNING = 3;
            var polygonType = 0;
            var types = [];
            for (var i = 0; i < polygon.vertices.length; i++) {
                var t = BABYLON.Vector3.Dot(this.normal, polygon.vertices[i].pos) - this.w;
                var type = (t < -Plane.EPSILON) ? BACK : (t > Plane.EPSILON) ? FRONT : COPLANAR;
                polygonType |= type;
                types.push(type);
            }
            switch (polygonType) {
            case COPLANAR:
                (BABYLON.Vector3.Dot(this.normal, polygon.plane.normal) > 0 ? coplanarFront : coplanarBack).push(polygon);
                break;
            case FRONT:
                front.push(polygon);
                break;
            case BACK:
                back.push(polygon);
                break;
            case SPANNING:
                var f = [],
                    b = [];
                for (i = 0; i < polygon.vertices.length; i++) {
                    var j = (i + 1) % polygon.vertices.length;
                    var ti = types[i],
                        tj = types[j];
                    var vi = polygon.vertices[i],
                        vj = polygon.vertices[j];
                    if (ti != BACK) f.push(vi);
                    if (ti != FRONT) b.push(ti != BACK ? vi.clone() : vi);
                    if ((ti | tj) == SPANNING) {
                        t = (this.w - BABYLON.Vector3.Dot(this.normal, vi.pos)) / BABYLON.Vector3.Dot(this.normal, vj.pos.subtract(vi.pos));
                        var v = vi.interpolate(vj, t);
                        f.push(v);
                        b.push(v.clone());
                    }
                }
                if (f.length >= 3) {
                    var poly = new Polygon(f, polygon.shared);
                    if (poly.plane) front.push(poly);
                }
                if (b.length >= 3) {
                    poly = new Polygon(b, polygon.shared);
                    if (poly.plane) back.push(poly);
                }
                break;
            }
        };
        Plane.EPSILON = 1e-5;
        return Plane;
    })();
    var Polygon = (function () {
        function Polygon(vertices, shared) {
            this.vertices = vertices;
            this.shared = shared;
            this.plane = Plane.FromPoints(vertices[0].pos, vertices[1].pos, vertices[2].pos);
        }
        Polygon.prototype.clone = function () {
            var vertices = this.vertices.map(function (v) {
                return v.clone();
            });
            return new Polygon(vertices, this.shared);
        };
        Polygon.prototype.flip = function () {
            this.vertices.reverse().map(function (v) {
                v.flip();
            });
            this.plane.flip();
        };
        return Polygon;
    })();
    var Node = (function () {
        function Node(polygons) {
            this.plane = null;
            this.front = null;
            this.back = null;
            this.polygons = [];
            if (polygons) {
                this.build(polygons);
            }
        }
        Node.prototype.clone = function () {
            var node = new Node();
            node.plane = this.plane && this.plane.clone();
            node.front = this.front && this.front.clone();
            node.back = this.back && this.back.clone();
            node.polygons = this.polygons.map(function (p) {
                return p.clone();
            });
            return node;
        };
        Node.prototype.invert = function () {
            for (var i = 0; i < this.polygons.length; i++) {
                this.polygons[i].flip();
            }
            if (this.plane) {
                this.plane.flip();
            }
            if (this.front) {
                this.front.invert();
            }
            if (this.back) {
                this.back.invert();
            }
            var temp = this.front;
            this.front = this.back;
            this.back = temp;
        };
        Node.prototype.clipPolygons = function (polygons) {
            if (!this.plane) return polygons.slice();
            var front = [],
                back = [];
            for (var i = 0; i < polygons.length; i++) {
                this.plane.splitPolygon(polygons[i], front, back, front, back);
            }
            if (this.front) {
                front = this.front.clipPolygons(front);
            }
            if (this.back) {
                back = this.back.clipPolygons(back);
            } else {
                back = [];
            }
            return front.concat(back);
        };
        Node.prototype.clipTo = function (bsp) {
            this.polygons = bsp.clipPolygons(this.polygons);
            if (this.front) this.front.clipTo(bsp);
            if (this.back) this.back.clipTo(bsp);
        };
        Node.prototype.allPolygons = function () {
            var polygons = this.polygons.slice();
            if (this.front) polygons = polygons.concat(this.front.allPolygons());
            if (this.back) polygons = polygons.concat(this.back.allPolygons());
            return polygons;
        };
        Node.prototype.build = function (polygons) {
            if (!polygons.length) return;
            if (!this.plane) this.plane = polygons[0].plane.clone();
            var front = [],
                back = [];
            for (var i = 0; i < polygons.length; i++) {
                this.plane.splitPolygon(polygons[i], this.polygons, this.polygons, front, back);
            }
            if (front.length) {
                if (!this.front) this.front = new Node();
                this.front.build(front);
            }
            if (back.length) {
                if (!this.back) this.back = new Node();
                this.back.build(back);
            }
        };
        return Node;
    })();
    var CSG = (function () {
        function CSG() {
            this.polygons = new Array();
        }
        CSG.FromMesh = function (mesh) {
            var vertex, normal, uv, position, polygon, polygons = [],
                vertices;
            if (mesh instanceof BABYLON.Mesh) {
                mesh.computeWorldMatrix(true);
                var matrix = mesh.getWorldMatrix();
                var meshPosition = mesh.position.clone();
                var meshRotation = mesh.rotation.clone();
                var meshScaling = mesh.scaling.clone();
            } else {
                throw 'BABYLON.CSG:Wrong Mesh type,must be BABYLON.Mesh';
            }
            var indices = mesh.getIndices(),
                positions = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind),
                normals = mesh.getVerticesData(BABYLON.VertexBuffer.NormalKind),
                uvs = mesh.getVerticesData(BABYLON.VertexBuffer.UVKind);
            var subMeshes = mesh.subMeshes;
            for (var sm = 0, sml = subMeshes.length; sm < sml; sm++) {
                for (var i = subMeshes[sm].indexStart, il = subMeshes[sm].indexCount + subMeshes[sm].indexStart; i < il; i += 3) {
                    vertices = [];
                    for (var j = 0; j < 3; j++) {
                        normal = new BABYLON.Vector3(normals[indices[i + j] * 3], normals[indices[i + j] * 3 + 1], normals[indices[i + j] * 3 + 2]);
                        uv = new BABYLON.Vector2(uvs[indices[i + j] * 2], uvs[indices[i + j] * 2 + 1]);
                        position = new BABYLON.Vector3(positions[indices[i + j] * 3], positions[indices[i + j] * 3 + 1], positions[indices[i + j] * 3 + 2]);
                        BABYLON.Vector3.TransformCoordinatesToRef(position, matrix, position);
                        BABYLON.Vector3.TransformNormalToRef(normal, matrix, normal);
                        vertex = new Vertex(position, normal, uv);
                        vertices.push(vertex);
                    }
                    polygon = new Polygon(vertices, {
                        subMeshId: sm,
                        meshId: currentCSGMeshId,
                        materialIndex: subMeshes[sm].materialIndex
                    });
                    if (polygon.plane) polygons.push(polygon);
                }
            }
            var csg = CSG.FromPolygons(polygons);
            csg.matrix = matrix;
            csg.position = meshPosition;
            csg.rotation = meshRotation;
            csg.scaling = meshScaling;
            currentCSGMeshId++;
            return csg;
        };
        CSG.FromPolygons = function (polygons) {
            var csg = new BABYLON.CSG();
            csg.polygons = polygons;
            return csg;
        };
        CSG.prototype.clone = function () {
            var csg = new BABYLON.CSG();
            csg.polygons = this.polygons.map(function (p) {
                return p.clone();
            });
            csg.copyTransformAttributes(this);
            return csg;
        };
        CSG.prototype.toPolygons = function () {
            return this.polygons;
        };
        CSG.prototype.union = function (csg) {
            var a = new Node(this.clone().polygons);
            var b = new Node(csg.clone().polygons);
            a.clipTo(b);
            b.clipTo(a);
            b.invert();
            b.clipTo(a);
            b.invert();
            a.build(b.allPolygons());
            return CSG.FromPolygons(a.allPolygons()).copyTransformAttributes(this);
        };
        CSG.prototype.unionInPlace = function (csg) {
            var a = new Node(this.polygons);
            var b = new Node(csg.polygons);
            a.clipTo(b);
            b.clipTo(a);
            b.invert();
            b.clipTo(a);
            b.invert();
            a.build(b.allPolygons());
            this.polygons = a.allPolygons();
        };
        CSG.prototype.subtract = function (csg) {
            var a = new Node(this.clone().polygons);
            var b = new Node(csg.clone().polygons);
            a.invert();
            a.clipTo(b);
            b.clipTo(a);
            b.invert();
            b.clipTo(a);
            b.invert();
            a.build(b.allPolygons());
            a.invert();
            return CSG.FromPolygons(a.allPolygons()).copyTransformAttributes(this);
        };
        CSG.prototype.subtractInPlace = function (csg) {
            var a = new Node(this.polygons);
            var b = new Node(csg.polygons);
            a.invert();
            a.clipTo(b);
            b.clipTo(a);
            b.invert();
            b.clipTo(a);
            b.invert();
            a.build(b.allPolygons());
            a.invert();
            this.polygons = a.allPolygons();
        };
        CSG.prototype.intersect = function (csg) {
            var a = new Node(this.clone().polygons);
            var b = new Node(csg.clone().polygons);
            a.invert();
            b.clipTo(a);
            b.invert();
            a.clipTo(b);
            b.clipTo(a);
            a.build(b.allPolygons());
            a.invert();
            return CSG.FromPolygons(a.allPolygons()).copyTransformAttributes(this);
        };
        CSG.prototype.intersectInPlace = function (csg) {
            var a = new Node(this.polygons);
            var b = new Node(csg.polygons);
            a.invert();
            b.clipTo(a);
            b.invert();
            a.clipTo(b);
            b.clipTo(a);
            a.build(b.allPolygons());
            a.invert();
            this.polygons = a.allPolygons();
        };
        CSG.prototype.inverse = function () {
            var csg = this.clone();
            csg.inverseInPlace();
            return csg;
        };
        CSG.prototype.inverseInPlace = function () {
            this.polygons.map(function (p) {
                p.flip();
            });
        };
        CSG.prototype.copyTransformAttributes = function (csg) {
            this.matrix = csg.matrix;
            this.position = csg.position;
            this.rotation = csg.rotation;
            this.scaling = csg.scaling;
            return this;
        };
        CSG.prototype.buildMeshGeometry = function (name, scene, keepSubMeshes) {
            var matrix = this.matrix.clone();
            matrix.invert();
            var mesh = new BABYLON.Mesh(name, scene),
                vertices = [],
                indices = [],
                normals = [],
                uvs = [],
                vertex = BABYLON.Vector3.Zero(),
                normal = BABYLON.Vector3.Zero(),
                uv = BABYLON.Vector2.Zero(),
                polygons = this.polygons,
                polygonIndices = [0, 0, 0],
                polygon, vertice_dict = {},
                vertex_idx, currentIndex = 0,
                subMesh_dict = {},
                subMesh_obj;
            if (keepSubMeshes) {
                polygons.sort(function (a, b) {
                    if (a.shared.meshId === b.shared.meshId) {
                        return a.shared.subMeshId - b.shared.subMeshId;
                    } else {
                        return a.shared.meshId - b.shared.meshId;
                    }
                });
            }
            for (var i = 0, il = polygons.length; i < il; i++) {
                polygon = polygons[i];
                if (!subMesh_dict[polygon.shared.meshId]) {
                    subMesh_dict[polygon.shared.meshId] = {};
                }
                if (!subMesh_dict[polygon.shared.meshId][polygon.shared.subMeshId]) {
                    subMesh_dict[polygon.shared.meshId][polygon.shared.subMeshId] = {
                        indexStart: +Infinity,
                        indexEnd: -Infinity,
                        materialIndex: polygon.shared.materialIndex
                    };
                }
                subMesh_obj = subMesh_dict[polygon.shared.meshId][polygon.shared.subMeshId];
                for (var j = 2, jl = polygon.vertices.length; j < jl; j++) {
                    polygonIndices[0] = 0;
                    polygonIndices[1] = j - 1;
                    polygonIndices[2] = j;
                    for (var k = 0; k < 3; k++) {
                        vertex.copyFrom(polygon.vertices[polygonIndices[k]].pos);
                        normal.copyFrom(polygon.vertices[polygonIndices[k]].normal);
                        uv.copyFrom(polygon.vertices[polygonIndices[k]].uv);
                        BABYLON.Vector3.TransformCoordinatesToRef(vertex, matrix, vertex);
                        BABYLON.Vector3.TransformNormalToRef(normal, matrix, normal);
                        vertex_idx = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z];
                        if (!(typeof vertex_idx !== 'undefined' && normals[vertex_idx * 3] === normal.x && normals[vertex_idx * 3 + 1] === normal.y && normals[vertex_idx * 3 + 2] === normal.z && uvs[vertex_idx * 2] === uv.x && uvs[vertex_idx * 2 + 1] === uv.y)) {
                            vertices.push(vertex.x, vertex.y, vertex.z);
                            uvs.push(uv.x, uv.y);
                            normals.push(normal.x, normal.y, normal.z);
                            vertex_idx = vertice_dict[vertex.x + ',' + vertex.y + ',' + vertex.z] = (vertices.length / 3) - 1;
                        }
                        indices.push(vertex_idx);
                        subMesh_obj.indexStart = Math.min(currentIndex, subMesh_obj.indexStart);
                        subMesh_obj.indexEnd = Math.max(currentIndex, subMesh_obj.indexEnd);
                        currentIndex++;
                    }
                }
            }
            mesh.setVerticesData(BABYLON.VertexBuffer.PositionKind, vertices);
            mesh.setVerticesData(BABYLON.VertexBuffer.NormalKind, normals);
            mesh.setVerticesData(BABYLON.VertexBuffer.UVKind, uvs);
            mesh.setIndices(indices);
            if (keepSubMeshes) {
                var materialIndexOffset = 0,
                    materialMaxIndex;
                mesh.subMeshes.length = 0;
                for (var m in subMesh_dict) {
                    materialMaxIndex = -1;
                    for (var sm in subMesh_dict[m]) {
                        subMesh_obj = subMesh_dict[m][sm];
                        BABYLON.SubMesh.CreateFromIndices(subMesh_obj.materialIndex + materialIndexOffset, subMesh_obj.indexStart, subMesh_obj.indexEnd - subMesh_obj.indexStart + 1, mesh);
                        materialMaxIndex = Math.max(subMesh_obj.materialIndex, materialMaxIndex);
                    }
                    materialIndexOffset += ++materialMaxIndex;
                }
            }
            return mesh;
        };
        CSG.prototype.toMesh = function (name, material, scene, keepSubMeshes) {
            var mesh = this.buildMeshGeometry(name, scene, keepSubMeshes);
            mesh.material = material;
            mesh.position.copyFrom(this.position);
            mesh.rotation.copyFrom(this.rotation);
            mesh.scaling.copyFrom(this.scaling);
            mesh.computeWorldMatrix(true);
            return mesh;
        };
        return CSG;
    })();
    BABYLON.CSG = CSG;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var OculusDistortionCorrectionPostProcess = (function (_super) {
        __extends(OculusDistortionCorrectionPostProcess, _super);

        function OculusDistortionCorrectionPostProcess(name, camera, isRightEye, cameraSettings) {
            var _this = this;
            _super.call(this, name, "oculusDistortionCorrection", ['LensCenter', 'Scale', 'ScaleIn', 'HmdWarpParam'], null, cameraSettings.PostProcessScaleFactor, camera, BABYLON.Texture.BILINEAR_SAMPLINGMODE, null, null);
            this._isRightEye = isRightEye;
            this._distortionFactors = cameraSettings.DistortionK;
            this._postProcessScaleFactor = cameraSettings.PostProcessScaleFactor;
            this._lensCenterOffset = cameraSettings.LensCenterOffset;
            this.onSizeChanged = function () {
                _this.aspectRatio = _this.width * .5 / _this.height;
                _this._scaleIn = new BABYLON.Vector2(2, 2 / _this.aspectRatio);
                _this._scaleFactor = new BABYLON.Vector2(.5 * (1 / _this._postProcessScaleFactor), .5 * (1 / _this._postProcessScaleFactor) * _this.aspectRatio);
                _this._lensCenter = new BABYLON.Vector2(_this._isRightEye ? 0.5 - _this._lensCenterOffset * 0.5 : 0.5 + _this._lensCenterOffset * 0.5, 0.5);
            };
            this.onApply = function (effect) {
                effect.setFloat2("LensCenter", _this._lensCenter.x, _this._lensCenter.y);
                effect.setFloat2("Scale", _this._scaleFactor.x, _this._scaleFactor.y);
                effect.setFloat2("ScaleIn", _this._scaleIn.x, _this._scaleIn.y);
                effect.setFloat4("HmdWarpParam", _this._distortionFactors[0], _this._distortionFactors[1], _this._distortionFactors[2], _this._distortionFactors[3]);
            };
        }
        return OculusDistortionCorrectionPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.OculusDistortionCorrectionPostProcess = OculusDistortionCorrectionPostProcess;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    (function (JoystickAxis) {
        JoystickAxis[JoystickAxis["X"] = 0] = "X";
        JoystickAxis[JoystickAxis["Y"] = 1] = "Y";
        JoystickAxis[JoystickAxis["Z"] = 2] = "Z";
    })(BABYLON.JoystickAxis || (BABYLON.JoystickAxis = {}));
    var JoystickAxis = BABYLON.JoystickAxis;
    var VirtualJoystick = (function () {
        function VirtualJoystick(leftJoystick) {
            var _this = this;
            if (leftJoystick) {
                this._leftJoystick = true;
            } else {
                this._leftJoystick = false;
            }
            this._joystickIndex = VirtualJoystick._globalJoystickIndex;
            VirtualJoystick._globalJoystickIndex++;
            this._axisTargetedByLeftAndRight = 0 /*X*/
            ;
            this._axisTargetedByUpAndDown = 1 /*Y*/
            ;
            this.reverseLeftRight = false;
            this.reverseUpDown = false;
            this._touches = new BABYLON.VirtualJoystick.Collection();
            this.deltaPosition = BABYLON.Vector3.Zero();
            this._joystickSensibility = 25;
            this._inversedSensibility = 1 / (this._joystickSensibility / 1000);
            this._rotationSpeed = 25;
            this._inverseRotationSpeed = 1 / (this._rotationSpeed / 1000);
            this._rotateOnAxisRelativeToMesh = false;
            if (!VirtualJoystick.vjCanvas) {
                window.addEventListener("resize", function () {
                    VirtualJoystick.vjCanvasWidth = window.innerWidth;
                    VirtualJoystick.vjCanvasHeight = window.innerHeight;
                    VirtualJoystick.vjCanvas.width = VirtualJoystick.vjCanvasWidth;
                    VirtualJoystick.vjCanvas.height = VirtualJoystick.vjCanvasHeight;
                    VirtualJoystick.halfWidth = VirtualJoystick.vjCanvasWidth / 2;
                    VirtualJoystick.halfHeight = VirtualJoystick.vjCanvasHeight / 2;
                }, false);
                VirtualJoystick.vjCanvas = document.createElement("canvas");
                VirtualJoystick.vjCanvasWidth = window.innerWidth;
                VirtualJoystick.vjCanvasHeight = window.innerHeight;
                VirtualJoystick.vjCanvas.width = window.innerWidth;
                VirtualJoystick.vjCanvas.height = window.innerHeight;
                VirtualJoystick.vjCanvas.style.width = "100%";
                VirtualJoystick.vjCanvas.style.height = "100%";
                VirtualJoystick.vjCanvas.style.position = "absolute";
                VirtualJoystick.vjCanvas.style.backgroundColor = "transparent";
                VirtualJoystick.vjCanvas.style.top = "0px";
                VirtualJoystick.vjCanvas.style.left = "0px";
                VirtualJoystick.vjCanvas.style.zIndex = "5";
                VirtualJoystick.vjCanvas.style.msTouchAction = "none";
                VirtualJoystick.vjCanvasContext = VirtualJoystick.vjCanvas.getContext('2d');
                VirtualJoystick.vjCanvasContext.strokeStyle = "#ffffff";
                VirtualJoystick.vjCanvasContext.lineWidth = 2;
                document.body.appendChild(VirtualJoystick.vjCanvas);
            }
            VirtualJoystick.halfWidth = VirtualJoystick.vjCanvas.width / 2;
            VirtualJoystick.halfHeight = VirtualJoystick.vjCanvas.height / 2;
            this.pressed = false;
            this._joystickColor = "cyan";
            this._joystickPointerID = -1;
            this._joystickPointerPos = new BABYLON.Vector2(0, 0);
            this._joystickPointerStartPos = new BABYLON.Vector2(0, 0);
            this._deltaJoystickVector = new BABYLON.Vector2(0, 0);
            VirtualJoystick.vjCanvas.addEventListener('pointerdown', function (evt) {
                _this._onPointerDown(evt);
            }, false);
            VirtualJoystick.vjCanvas.addEventListener('pointermove', function (evt) {
                _this._onPointerMove(evt);
            }, false);
            VirtualJoystick.vjCanvas.addEventListener('pointerup', function (evt) {
                _this._onPointerUp(evt);
            }, false);
            VirtualJoystick.vjCanvas.addEventListener('pointerout', function (evt) {
                _this._onPointerUp(evt);
            }, false);
            VirtualJoystick.vjCanvas.addEventListener("contextmenu", function (evt) {
                evt.preventDefault();
            }, false);
            requestAnimationFrame(function () {
                _this._drawVirtualJoystick();
            });
        }
        VirtualJoystick.prototype.setJoystickSensibility = function (newJoystickSensibility) {
            this._joystickSensibility = newJoystickSensibility;
            this._inversedSensibility = 1 / (this._joystickSensibility / 1000);
        };
        VirtualJoystick.prototype._onPointerDown = function (e) {
            var positionOnScreenCondition;
            e.preventDefault();
            if (this._leftJoystick === true) {
                positionOnScreenCondition = (e.clientX < VirtualJoystick.halfWidth);
            } else {
                positionOnScreenCondition = (e.clientX > VirtualJoystick.halfWidth);
            }
            if (positionOnScreenCondition && this._joystickPointerID < 0) {
                this._joystickPointerID = e.pointerId;
                this._joystickPointerStartPos.x = e.clientX;
                this._joystickPointerStartPos.y = e.clientY;
                this._joystickPointerPos = this._joystickPointerStartPos.clone();
                this._deltaJoystickVector.x = 0;
                this._deltaJoystickVector.y = 0;
                this.pressed = true;
                this._touches.add(e.pointerId.toString(), e);
            } else {
                if (VirtualJoystick._globalJoystickIndex < 2 && this._action) {
                    this._action();
                    this._touches.add(e.pointerId.toString(), e);
                }
            }
        };
        VirtualJoystick.prototype._onPointerMove = function (e) {
            if (this._joystickPointerID == e.pointerId) {
                this._joystickPointerPos.x = e.clientX;
                this._joystickPointerPos.y = e.clientY;
                this._deltaJoystickVector = this._joystickPointerPos.clone();
                this._deltaJoystickVector = this._deltaJoystickVector.subtract(this._joystickPointerStartPos);
                var directionLeftRight = this.reverseLeftRight ? -1 : 1;
                var deltaJoystickX = directionLeftRight * this._deltaJoystickVector.x / this._inversedSensibility;
                switch (this._axisTargetedByLeftAndRight) {
                case 0 /*X*/
                    :
                    this.deltaPosition.x = Math.min(1, Math.max(-1, deltaJoystickX));
                    break;
                case 1 /*Y*/
                    :
                    this.deltaPosition.y = Math.min(1, Math.max(-1, deltaJoystickX));
                    break;
                case 2 /*Z*/
                    :
                    this.deltaPosition.z = Math.min(1, Math.max(-1, deltaJoystickX));
                    break;
                }
                var directionUpDown = this.reverseUpDown ? 1 : -1;
                var deltaJoystickY = directionUpDown * this._deltaJoystickVector.y / this._inversedSensibility;
                switch (this._axisTargetedByUpAndDown) {
                case 0 /*X*/
                    :
                    this.deltaPosition.x = Math.min(1, Math.max(-1, deltaJoystickY));
                    break;
                case 1 /*Y*/
                    :
                    this.deltaPosition.y = Math.min(1, Math.max(-1, deltaJoystickY));
                    break;
                case 2 /*Z*/
                    :
                    this.deltaPosition.z = Math.min(1, Math.max(-1, deltaJoystickY));
                    break;
                }
            } else {
                if (this._touches.item(e.pointerId.toString())) {
                    this._touches.item(e.pointerId.toString()).x = e.clientX;
                    this._touches.item(e.pointerId.toString()).y = e.clientY;
                }
            }
        };
        VirtualJoystick.prototype._onPointerUp = function (e) {
            this._clearCanvas();
            if (this._joystickPointerID == e.pointerId) {
                this._joystickPointerID = -1;
                this.pressed = false;
            }
            this._deltaJoystickVector.x = 0;
            this._deltaJoystickVector.y = 0;
            this._touches.remove(e.pointerId.toString());
        }; /***Change the color of the virtual joystick*@param newColor a string that must be a CSS color value(like"red")or the hexa value(like"#FF0000")*/
        VirtualJoystick.prototype.setJoystickColor = function (newColor) {
            this._joystickColor = newColor;
        };
        VirtualJoystick.prototype.setActionOnTouch = function (action) {
            this._action = action;
        };
        VirtualJoystick.prototype.setAxisForLeftRight = function (axis) {
            switch (axis) {
            case 0 /*X*/
                :
            case 1 /*Y*/
                :
            case 2 /*Z*/
                :
                this._axisTargetedByLeftAndRight = axis;
                break;
                this._axisTargetedByLeftAndRight = axis;
                break;
            default:
                this._axisTargetedByLeftAndRight = 0 /*X*/
                ;
                break;
            }
        };
        VirtualJoystick.prototype.setAxisForUpDown = function (axis) {
            switch (axis) {
            case 0 /*X*/
                :
            case 1 /*Y*/
                :
            case 2 /*Z*/
                :
                this._axisTargetedByUpAndDown = axis;
                break;
            default:
                this._axisTargetedByUpAndDown = 1 /*Y*/
                ;
                break;
            }
        };
        VirtualJoystick.prototype._clearCanvas = function () {
            if (this._leftJoystick) {
                VirtualJoystick.vjCanvasContext.clearRect(0, 0, VirtualJoystick.vjCanvasWidth / 2, VirtualJoystick.vjCanvasHeight);
            } else {
                VirtualJoystick.vjCanvasContext.clearRect(VirtualJoystick.vjCanvasWidth / 2, 0, VirtualJoystick.vjCanvasWidth, VirtualJoystick.vjCanvasHeight);
            }
        };
        VirtualJoystick.prototype._drawVirtualJoystick = function () {
            var _this = this;
            if (this.pressed) {
                this._clearCanvas();
                this._touches.forEach(function (touch) {
                    if (touch.pointerId === _this._joystickPointerID) {
                        VirtualJoystick.vjCanvasContext.beginPath();
                        VirtualJoystick.vjCanvasContext.strokeStyle = _this._joystickColor;
                        VirtualJoystick.vjCanvasContext.lineWidth = 6;
                        VirtualJoystick.vjCanvasContext.arc(_this._joystickPointerStartPos.x, _this._joystickPointerStartPos.y, 40, 0, Math.PI * 2, true);
                        VirtualJoystick.vjCanvasContext.stroke();
                        VirtualJoystick.vjCanvasContext.beginPath();
                        VirtualJoystick.vjCanvasContext.strokeStyle = _this._joystickColor;
                        VirtualJoystick.vjCanvasContext.lineWidth = 2;
                        VirtualJoystick.vjCanvasContext.arc(_this._joystickPointerStartPos.x, _this._joystickPointerStartPos.y, 60, 0, Math.PI * 2, true);
                        VirtualJoystick.vjCanvasContext.stroke();
                        VirtualJoystick.vjCanvasContext.beginPath();
                        VirtualJoystick.vjCanvasContext.strokeStyle = _this._joystickColor;
                        VirtualJoystick.vjCanvasContext.arc(_this._joystickPointerPos.x, _this._joystickPointerPos.y, 40, 0, Math.PI * 2, true);
                        VirtualJoystick.vjCanvasContext.stroke();
                    } else {
                        VirtualJoystick.vjCanvasContext.beginPath();
                        VirtualJoystick.vjCanvasContext.fillStyle = "white";
                        VirtualJoystick.vjCanvasContext.beginPath();
                        VirtualJoystick.vjCanvasContext.strokeStyle = "red";
                        VirtualJoystick.vjCanvasContext.lineWidth = 6;
                        VirtualJoystick.vjCanvasContext.arc(touch.x, touch.y, 40, 0, Math.PI * 2, true);
                        VirtualJoystick.vjCanvasContext.stroke();
                    };
                });
            }
            requestAnimationFrame(function () {
                _this._drawVirtualJoystick();
            });
        };
        VirtualJoystick.prototype.releaseCanvas = function () {
            if (VirtualJoystick.vjCanvas) {
                document.body.removeChild(VirtualJoystick.vjCanvas);
                VirtualJoystick.vjCanvas = null;
            }
        };
        VirtualJoystick._globalJoystickIndex = 0;
        return VirtualJoystick;
    })();
    BABYLON.VirtualJoystick = VirtualJoystick;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    (function (VirtualJoystick) {
        var Collection = (function () {
            function Collection() {
                this._count = 0;
                this._collection = new Array();
            }
            Collection.prototype.Count = function () {
                return this._count;
            };
            Collection.prototype.add = function (key, item) {
                if (this._collection[key] != undefined) {
                    return undefined;
                }
                this._collection[key] = item;
                return ++this._count;
            };
            Collection.prototype.remove = function (key) {
                if (this._collection[key] == undefined) {
                    return undefined;
                }
                delete this._collection[key];
                return --this._count;
            };
            Collection.prototype.item = function (key) {
                return this._collection[key];
            };
            Collection.prototype.forEach = function (block) {
                var key;
                for (key in this._collection) {
                    if (this._collection.hasOwnProperty(key)) {
                        block(this._collection[key]);
                    }
                }
            };
            return Collection;
        })();
        VirtualJoystick.Collection = Collection;
    })(BABYLON.VirtualJoystick || (BABYLON.VirtualJoystick = {}));
    var VirtualJoystick = BABYLON.VirtualJoystick;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var OculusRiftDevKit2013_Metric = {
        HResolution: 1280,
        VResolution: 800,
        HScreenSize: 0.149759993,
        VScreenSize: 0.0935999975,
        VScreenCenter: 0.0467999987,
        EyeToScreenDistance: 0.0410000011,
        LensSeparationDistance: 0.0635000020,
        InterpupillaryDistance: 0.0640000030,
        DistortionK: [1.0, 0.219999999, 0.239999995, 0.0],
        ChromaAbCorrection: [0.995999992, -0.00400000019, 1.01400006, 0.0],
        PostProcessScaleFactor: 1.714605507808412,
        LensCenterOffset: 0.151976421
    };
    var _OculusInnerCamera = (function (_super) {
        __extends(_OculusInnerCamera, _super);

        function _OculusInnerCamera(name, position, scene, isLeftEye) {
            _super.call(this, name, position, scene);
            this._workMatrix = new BABYLON.Matrix();
            this._actualUp = new BABYLON.Vector3(0, 0, 0);
            this._aspectRatioAspectRatio = OculusRiftDevKit2013_Metric.HResolution / (2 * OculusRiftDevKit2013_Metric.VResolution);
            this._aspectRatioFov = (2 * Math.atan((OculusRiftDevKit2013_Metric.PostProcessScaleFactor * OculusRiftDevKit2013_Metric.VScreenSize) / (2 * OculusRiftDevKit2013_Metric.EyeToScreenDistance)));
            var hMeters = (OculusRiftDevKit2013_Metric.HScreenSize / 4) - (OculusRiftDevKit2013_Metric.LensSeparationDistance / 2);
            var h = (4 * hMeters) / OculusRiftDevKit2013_Metric.HScreenSize;
            this._hMatrix = BABYLON.Matrix.Translation(isLeftEye ? h : -h, 0, 0);
            this.viewport = new BABYLON.Viewport(isLeftEye ? 0 : 0.5, 0, 0.5, 1.0);
            this._preViewMatrix = BABYLON.Matrix.Translation(isLeftEye ? .5 * OculusRiftDevKit2013_Metric.InterpupillaryDistance : -.5 * OculusRiftDevKit2013_Metric.InterpupillaryDistance, 0, 0);
            var postProcess = new BABYLON.OculusDistortionCorrectionPostProcess("Oculus Distortion", this, !isLeftEye, OculusRiftDevKit2013_Metric);
        }
        _OculusInnerCamera.prototype.getProjectionMatrix = function () {
            BABYLON.Matrix.PerspectiveFovLHToRef(this._aspectRatioFov, this._aspectRatioAspectRatio, this.minZ, this.maxZ, this._workMatrix);
            this._workMatrix.multiplyToRef(this._hMatrix, this._projectionMatrix);
            return this._projectionMatrix;
        };
        _OculusInnerCamera.prototype._getViewMatrix = function () {
            BABYLON.Matrix.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix);
            BABYLON.Vector3.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint);
            BABYLON.Vector3.TransformNormalToRef(this.upVector, this._cameraRotationMatrix, this._actualUp);
            this.position.addToRef(this._transformedReferencePoint, this._currentTarget);
            BABYLON.Matrix.LookAtLHToRef(this.position, this._currentTarget, this._actualUp, this._workMatrix);
            this._workMatrix.multiplyToRef(this._preViewMatrix, this._viewMatrix);
            return this._viewMatrix;
        };
        return _OculusInnerCamera;
    })(BABYLON.FreeCamera);
    var OculusCamera = (function (_super) {
        __extends(OculusCamera, _super);

        function OculusCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this._leftCamera = new _OculusInnerCamera(name + "_left", position.clone(), scene, true);
            this._rightCamera = new _OculusInnerCamera(name + "_right", position.clone(), scene, false);
            this.subCameras.push(this._leftCamera);
            this.subCameras.push(this._rightCamera);
            this._deviceOrientationHandler = this._onOrientationEvent.bind(this);
        }
        OculusCamera.prototype._update = function () {
            this._leftCamera.position.copyFrom(this.position);
            this._rightCamera.position.copyFrom(this.position);
            this._updateCamera(this._leftCamera);
            this._updateCamera(this._rightCamera);
            _super.prototype._update.call(this);
        };
        OculusCamera.prototype._updateCamera = function (camera) {
            camera.minZ = this.minZ;
            camera.maxZ = this.maxZ;
            camera.rotation.x = this.rotation.x;
            camera.rotation.y = this.rotation.y;
            camera.rotation.z = this.rotation.z;
        };
        OculusCamera.prototype._onOrientationEvent = function (evt) {
            var yaw = evt.alpha / 180 * Math.PI;
            var pitch = evt.beta / 180 * Math.PI;
            var roll = evt.gamma / 180 * Math.PI;
            if (!this._offsetOrientation) {
                this._offsetOrientation = {
                    yaw: yaw,
                    pitch: pitch,
                    roll: roll
                };
                return;
            } else {
                this.rotation.y += yaw - this._offsetOrientation.yaw;
                this.rotation.x += pitch - this._offsetOrientation.pitch;
                this.rotation.z += this._offsetOrientation.roll - roll;
                this._offsetOrientation.yaw = yaw;
                this._offsetOrientation.pitch = pitch;
                this._offsetOrientation.roll = roll;
            }
        };
        OculusCamera.prototype.attachControl = function (element, noPreventDefault) {
            _super.prototype.attachControl.call(this, element, noPreventDefault);
            window.addEventListener("deviceorientation", this._deviceOrientationHandler);
        };
        OculusCamera.prototype.detachControl = function (element) {
            _super.prototype.detachControl.call(this, element);
            window.removeEventListener("deviceorientation", this._deviceOrientationHandler);
        };
        return OculusCamera;
    })(BABYLON.FreeCamera);
    BABYLON.OculusCamera = OculusCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var VirtualJoysticksCamera = (function (_super) {
        __extends(VirtualJoysticksCamera, _super);

        function VirtualJoysticksCamera(name, position, scene) {
            _super.call(this, name, position, scene);
            this._leftjoystick = new BABYLON.VirtualJoystick(true);
            this._leftjoystick.setAxisForUpDown(2 /*Z*/ );
            this._leftjoystick.setAxisForLeftRight(0 /*X*/ );
            this._leftjoystick.setJoystickSensibility(0.15);
            this._rightjoystick = new BABYLON.VirtualJoystick(false);
            this._rightjoystick.setAxisForUpDown(0 /*X*/ );
            this._rightjoystick.setAxisForLeftRight(1 /*Y*/ );
            this._rightjoystick.reverseUpDown = true;
            this._rightjoystick.setJoystickSensibility(0.05);
            this._rightjoystick.setJoystickColor("yellow");
        }
        VirtualJoysticksCamera.prototype._checkInputs = function () {
            var cameraTransform = BABYLON.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0);
            var deltaTransform = BABYLON.Vector3.TransformCoordinates(this._leftjoystick.deltaPosition, cameraTransform);
            this.cameraDirection = this.cameraDirection.add(deltaTransform);
            this.cameraRotation = this.cameraRotation.add(this._rightjoystick.deltaPosition);
            if (!this._leftjoystick.pressed) {
                this._leftjoystick.deltaPosition = this._leftjoystick.deltaPosition.scale(0.9);
            }
            if (!this._rightjoystick.pressed) {
                this._rightjoystick.deltaPosition = this._rightjoystick.deltaPosition.scale(0.9);
            }
        };
        VirtualJoysticksCamera.prototype.dispose = function () {
            this._leftjoystick.releaseCanvas();
        };
        return VirtualJoysticksCamera;
    })(BABYLON.FreeCamera);
    BABYLON.VirtualJoysticksCamera = VirtualJoysticksCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var ShaderMaterial = (function (_super) {
        __extends(ShaderMaterial, _super);

        function ShaderMaterial(name, scene, shaderPath, options) {
            _super.call(this, name, scene);
            this._textures = new Array();
            this._floats = new Array();
            this._floatsArrays = {};
            this._colors3 = new Array();
            this._colors4 = new Array();
            this._vectors2 = new Array();
            this._vectors3 = new Array();
            this._matrices = new Array();
            this._cachedWorldViewMatrix = new BABYLON.Matrix();
            this._shaderPath = shaderPath;
            options.needAlphaBlending = options.needAlphaBlending || false;
            options.needAlphaTesting = options.needAlphaTesting || false;
            options.attributes = options.attributes || ["position", "normal", "uv"];
            options.uniforms = options.uniforms || ["worldViewProjection"];
            options.samplers = options.samplers || [];
            this._options = options;
        }
        ShaderMaterial.prototype.needAlphaBlending = function () {
            return this._options.needAlphaBlending;
        };
        ShaderMaterial.prototype.needAlphaTesting = function () {
            return this._options.needAlphaTesting;
        };
        ShaderMaterial.prototype._checkUniform = function (uniformName) {
            if (this._options.uniforms.indexOf(uniformName) === -1) {
                this._options.uniforms.push(uniformName);
            }
        };
        ShaderMaterial.prototype.setTexture = function (name, texture) {
            if (this._options.samplers.indexOf(name) === -1) {
                this._options.samplers.push(name);
            }
            this._textures[name] = texture;
            return this;
        };
        ShaderMaterial.prototype.setFloat = function (name, value) {
            this._checkUniform(name);
            this._floats[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setFloats = function (name, value) {
            this._checkUniform(name);
            this._floatsArrays[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setColor3 = function (name, value) {
            this._checkUniform(name);
            this._colors3[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setColor4 = function (name, value) {
            this._checkUniform(name);
            this._colors4[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setVector2 = function (name, value) {
            this._checkUniform(name);
            this._vectors2[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setVector3 = function (name, value) {
            this._checkUniform(name);
            this._vectors3[name] = value;
            return this;
        };
        ShaderMaterial.prototype.setMatrix = function (name, value) {
            this._checkUniform(name);
            this._matrices[name] = value;
            return this;
        };
        ShaderMaterial.prototype.isReady = function () {
            var engine = this.getScene().getEngine();
            this._effect = engine.createEffect(this._shaderPath, this._options.attributes, this._options.uniforms, this._options.samplers, "", null, this.onCompiled, this.onError);
            if (!this._effect.isReady()) {
                return false;
            }
            return true;
        };
        ShaderMaterial.prototype.bind = function (world) {
            if (this._options.uniforms.indexOf("world") !== -1) {
                this._effect.setMatrix("world", world);
            }
            if (this._options.uniforms.indexOf("view") !== -1) {
                this._effect.setMatrix("view", this.getScene().getViewMatrix());
            }
            if (this._options.uniforms.indexOf("worldView") !== -1) {
                world.multiplyToRef(this.getScene().getViewMatrix(), this._cachedWorldViewMatrix);
                this._effect.setMatrix("worldView", this._cachedWorldViewMatrix);
            }
            if (this._options.uniforms.indexOf("projection") !== -1) {
                this._effect.setMatrix("projection", this.getScene().getProjectionMatrix());
            }
            if (this._options.uniforms.indexOf("worldViewProjection") !== -1) {
                this._effect.setMatrix("worldViewProjection", world.multiply(this.getScene().getTransformMatrix()));
            }
            for (var name in this._textures) {
                this._effect.setTexture(name, this._textures[name]);
            }
            for (name in this._floats) {
                this._effect.setFloat(name, this._floats[name]);
            }
            for (name in this._floatsArrays) {
                this._effect.setArray(name, this._floatsArrays[name]);
            }
            for (name in this._colors3) {
                this._effect.setColor3(name, this._colors3[name]);
            }
            for (name in this._colors4) {
                var color = this._colors4[name];
                this._effect.setFloat4(name, color.r, color.g, color.b, color.a);
            }
            for (name in this._vectors2) {
                this._effect.setVector2(name, this._vectors2[name]);
            }
            for (name in this._vectors3) {
                this._effect.setVector3(name, this._vectors3[name]);
            }
            for (name in this._matrices) {
                this._effect.setMatrix(name, this._matrices[name]);
            }
        };
        ShaderMaterial.prototype.dispose = function (forceDisposeEffect) {
            for (var name in this._textures) {
                this._textures[name].dispose();
            }
            this._textures = [];
            _super.prototype.dispose.call(this, forceDisposeEffect);
        };
        return ShaderMaterial;
    })(BABYLON.Material);
    BABYLON.ShaderMaterial = ShaderMaterial;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var VertexData = (function () {
        function VertexData() {}
        VertexData.prototype.set = function (data, kind) {
            switch (kind) {
            case BABYLON.VertexBuffer.PositionKind:
                this.positions = data;
                break;
            case BABYLON.VertexBuffer.NormalKind:
                this.normals = data;
                break;
            case BABYLON.VertexBuffer.UVKind:
                this.uvs = data;
                break;
            case BABYLON.VertexBuffer.UV2Kind:
                this.uv2s = data;
                break;
            case BABYLON.VertexBuffer.ColorKind:
                this.colors = data;
                break;
            case BABYLON.VertexBuffer.MatricesIndicesKind:
                this.matricesIndices = data;
                break;
            case BABYLON.VertexBuffer.MatricesWeightsKind:
                this.matricesWeights = data;
                break;
            }
        };
        VertexData.prototype.applyToMesh = function (mesh, updatable) {
            this._applyTo(mesh, updatable);
        };
        VertexData.prototype.applyToGeometry = function (geometry, updatable) {
            this._applyTo(geometry, updatable);
        };
        VertexData.prototype.updateMesh = function (mesh, updateExtends, makeItUnique) {
            this._update(mesh);
        };
        VertexData.prototype.updateGeometry = function (geometry, updateExtends, makeItUnique) {
            this._update(geometry);
        };
        VertexData.prototype._applyTo = function (meshOrGeometry, updatable) {
            if (this.positions) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.PositionKind, this.positions, updatable);
            }
            if (this.normals) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.NormalKind, this.normals, updatable);
            }
            if (this.uvs) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.UVKind, this.uvs, updatable);
            }
            if (this.uv2s) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.UV2Kind, this.uv2s, updatable);
            }
            if (this.colors) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.ColorKind, this.colors, updatable);
            }
            if (this.matricesIndices) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind, this.matricesIndices, updatable);
            }
            if (this.matricesWeights) {
                meshOrGeometry.setVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind, this.matricesWeights, updatable);
            }
            if (this.indices) {
                meshOrGeometry.setIndices(this.indices);
            }
        };
        VertexData.prototype._update = function (meshOrGeometry, updateExtends, makeItUnique) {
            if (this.positions) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.PositionKind, this.positions, updateExtends, makeItUnique);
            }
            if (this.normals) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.NormalKind, this.normals, updateExtends, makeItUnique);
            }
            if (this.uvs) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.UVKind, this.uvs, updateExtends, makeItUnique);
            }
            if (this.uv2s) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.UV2Kind, this.uv2s, updateExtends, makeItUnique);
            }
            if (this.colors) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.ColorKind, this.colors, updateExtends, makeItUnique);
            }
            if (this.matricesIndices) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind, this.matricesIndices, updateExtends, makeItUnique);
            }
            if (this.matricesWeights) {
                meshOrGeometry.updateVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind, this.matricesWeights, updateExtends, makeItUnique);
            }
            if (this.indices) {
                meshOrGeometry.setIndices(this.indices);
            }
        };
        VertexData.prototype.transform = function (matrix) {
            var transformed = BABYLON.Vector3.Zero();
            if (this.positions) {
                var position = BABYLON.Vector3.Zero();
                for (var index = 0; index < this.positions.length; index += 3) {
                    BABYLON.Vector3.FromArrayToRef(this.positions, index, position);
                    BABYLON.Vector3.TransformCoordinatesToRef(position, matrix, transformed);
                    this.positions[index] = transformed.x;
                    this.positions[index + 1] = transformed.y;
                    this.positions[index + 2] = transformed.z;
                }
            }
            if (this.normals) {
                var normal = BABYLON.Vector3.Zero();
                for (index = 0; index < this.normals.length; index += 3) {
                    BABYLON.Vector3.FromArrayToRef(this.normals, index, normal);
                    BABYLON.Vector3.TransformNormalToRef(normal, matrix, transformed);
                    this.normals[index] = transformed.x;
                    this.normals[index + 1] = transformed.y;
                    this.normals[index + 2] = transformed.z;
                }
            }
        };
        VertexData.prototype.merge = function (other) {
            if (other.indices) {
                if (!this.indices) {
                    this.indices = [];
                }
                var offset = this.positions ? this.positions.length / 3 : 0;
                for (var index = 0; index < other.indices.length; index++) {
                    this.indices.push(other.indices[index] + offset);
                }
            }
            if (other.positions) {
                if (!this.positions) {
                    this.positions = [];
                }
                for (index = 0; index < other.positions.length; index++) {
                    this.positions.push(other.positions[index]);
                }
            }
            if (other.normals) {
                if (!this.normals) {
                    this.normals = [];
                }
                for (index = 0; index < other.normals.length; index++) {
                    this.normals.push(other.normals[index]);
                }
            }
            if (other.uvs) {
                if (!this.uvs) {
                    this.uvs = [];
                }
                for (index = 0; index < other.uvs.length; index++) {
                    this.uvs.push(other.uvs[index]);
                }
            }
            if (other.uv2s) {
                if (!this.uv2s) {
                    this.uv2s = [];
                }
                for (index = 0; index < other.uv2s.length; index++) {
                    this.uv2s.push(other.uv2s[index]);
                }
            }
            if (other.matricesIndices) {
                if (!this.matricesIndices) {
                    this.matricesIndices = [];
                }
                for (index = 0; index < other.matricesIndices.length; index++) {
                    this.matricesIndices.push(other.matricesIndices[index]);
                }
            }
            if (other.matricesWeights) {
                if (!this.matricesWeights) {
                    this.matricesWeights = [];
                }
                for (index = 0; index < other.matricesWeights.length; index++) {
                    this.matricesWeights.push(other.matricesWeights[index]);
                }
            }
            if (other.colors) {
                if (!this.colors) {
                    this.colors = [];
                }
                for (index = 0; index < other.colors.length; index++) {
                    this.colors.push(other.colors[index]);
                }
            }
        };
        VertexData.ExtractFromMesh = function (mesh) {
            return VertexData._ExtractFrom(mesh);
        };
        VertexData.ExtractFromGeometry = function (geometry) {
            return VertexData._ExtractFrom(geometry);
        };
        VertexData._ExtractFrom = function (meshOrGeometry) {
            var result = new BABYLON.VertexData();
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.PositionKind)) {
                result.positions = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.PositionKind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.NormalKind)) {
                result.normals = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.NormalKind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                result.uvs = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.UVKind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)) {
                result.uv2s = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.UV2Kind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.ColorKind)) {
                result.colors = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.ColorKind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind)) {
                result.matricesIndices = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.MatricesIndicesKind);
            }
            if (meshOrGeometry.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                result.matricesWeights = meshOrGeometry.getVerticesData(BABYLON.VertexBuffer.MatricesWeightsKind);
            }
            result.indices = meshOrGeometry.getIndices();
            return result;
        };
        VertexData.CreateBox = function (size) {
            var normalsSource = [new BABYLON.Vector3(0, 0, 1), new BABYLON.Vector3(0, 0, -1), new BABYLON.Vector3(1, 0, 0), new BABYLON.Vector3(-1, 0, 0), new BABYLON.Vector3(0, 1, 0), new BABYLON.Vector3(0, -1, 0)];
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            size = size || 1;
            for (var index = 0; index < normalsSource.length; index++) {
                var normal = normalsSource[index];
                var side1 = new BABYLON.Vector3(normal.y, normal.z, normal.x);
                var side2 = BABYLON.Vector3.Cross(normal, side1);
                var verticesLength = positions.length / 3;
                indices.push(verticesLength);
                indices.push(verticesLength + 1);
                indices.push(verticesLength + 2);
                indices.push(verticesLength);
                indices.push(verticesLength + 2);
                indices.push(verticesLength + 3);
                var vertex = normal.subtract(side1).subtract(side2).scale(size / 2);
                positions.push(vertex.x, vertex.y, vertex.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(1.0, 1.0);
                vertex = normal.subtract(side1).add(side2).scale(size / 2);
                positions.push(vertex.x, vertex.y, vertex.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(0.0, 1.0);
                vertex = normal.add(side1).add(side2).scale(size / 2);
                positions.push(vertex.x, vertex.y, vertex.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(0.0, 0.0);
                vertex = normal.add(side1).subtract(side2).scale(size / 2);
                positions.push(vertex.x, vertex.y, vertex.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(1.0, 0.0);
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateSphere = function (segments, diameter) {
            segments = segments || 32;
            diameter = diameter || 1;
            var radius = diameter / 2;
            var totalZRotationSteps = 2 + segments;
            var totalYRotationSteps = 2 * totalZRotationSteps;
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            for (var zRotationStep = 0; zRotationStep <= totalZRotationSteps; zRotationStep++) {
                var normalizedZ = zRotationStep / totalZRotationSteps;
                var angleZ = (normalizedZ * Math.PI);
                for (var yRotationStep = 0; yRotationStep <= totalYRotationSteps; yRotationStep++) {
                    var normalizedY = yRotationStep / totalYRotationSteps;
                    var angleY = normalizedY * Math.PI * 2;
                    var rotationZ = BABYLON.Matrix.RotationZ(-angleZ);
                    var rotationY = BABYLON.Matrix.RotationY(angleY);
                    var afterRotZ = BABYLON.Vector3.TransformCoordinates(BABYLON.Vector3.Up(), rotationZ);
                    var complete = BABYLON.Vector3.TransformCoordinates(afterRotZ, rotationY);
                    var vertex = complete.scale(radius);
                    var normal = BABYLON.Vector3.Normalize(vertex);
                    positions.push(vertex.x, vertex.y, vertex.z);
                    normals.push(normal.x, normal.y, normal.z);
                    uvs.push(normalizedZ, normalizedY);
                }
                if (zRotationStep > 0) {
                    var verticesCount = positions.length / 3;
                    for (var firstIndex = verticesCount - 2 * (totalYRotationSteps + 1);
                    (firstIndex + totalYRotationSteps + 2) < verticesCount; firstIndex++) {
                        indices.push((firstIndex));
                        indices.push((firstIndex + 1));
                        indices.push(firstIndex + totalYRotationSteps + 1);
                        indices.push((firstIndex + totalYRotationSteps + 1));
                        indices.push((firstIndex + 1));
                        indices.push((firstIndex + totalYRotationSteps + 2));
                    }
                }
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateCylinder = function (height, diameterTop, diameterBottom, tessellation, subdivisions) {
            if (typeof subdivisions === "undefined") {
                subdivisions = 1;
            }
            var radiusTop = diameterTop / 2;
            var radiusBottom = diameterBottom / 2;
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            height = height || 1;
            diameterTop = diameterTop || 0.5;
            diameterBottom = diameterBottom || 1;
            tessellation = tessellation || 16;
            subdivisions = subdivisions || 1;
            subdivisions = (subdivisions < 1) ? 1 : subdivisions;
            var getCircleVector = function (i) {
                    var angle = (i * 2.0 * Math.PI / tessellation);
                    var dx = Math.cos(angle);
                    var dz = Math.sin(angle);
                    return new BABYLON.Vector3(dx, 0, dz);
                };
            var createCylinderCap = function (isTop) {
                    var radius = isTop ? radiusTop : radiusBottom;
                    if (radius == 0) {
                        return;
                    }
                    var vbase = positions.length / 3;
                    var offset = new BABYLON.Vector3(0, height / 2, 0);
                    var textureScale = new BABYLON.Vector2(0.5, 0.5);
                    if (!isTop) {
                        offset.scaleInPlace(-1);
                        textureScale.x = -textureScale.x;
                    }
                    for (i = 0; i < tessellation; i++) {
                        var circleVector = getCircleVector(i);
                        var position = circleVector.scale(radius).add(offset);
                        var textureCoordinate = new BABYLON.Vector2(circleVector.x * textureScale.x + 0.5, circleVector.z * textureScale.y + 0.5);
                        positions.push(position.x, position.y, position.z);
                        uvs.push(textureCoordinate.x, textureCoordinate.y);
                    }
                    for (var i = 0; i < tessellation - 2; i++) {
                        if (!isTop) {
                            indices.push(vbase);
                            indices.push(vbase + (i + 2) % tessellation);
                            indices.push(vbase + (i + 1) % tessellation);
                        } else {
                            indices.push(vbase);
                            indices.push(vbase + (i + 1) % tessellation);
                            indices.push(vbase + (i + 2) % tessellation);
                        }
                    }
                };
            var base = new BABYLON.Vector3(0, -1, 0).scale(height / 2);
            var offset = new BABYLON.Vector3(0, 1, 0).scale(height / subdivisions);
            var stride = tessellation + 1;
            for (var i = 0; i <= tessellation; i++) {
                var circleVector = getCircleVector(i);
                var textureCoordinate = new BABYLON.Vector2(i / tessellation, 0);
                var position, radius = radiusBottom;
                for (var s = 0; s <= subdivisions; s++) {
                    position = circleVector.scale(radius);
                    position.addInPlace(base.add(offset.scale(s)));
                    textureCoordinate.y += 1 / subdivisions;
                    radius += (radiusTop - radiusBottom) / subdivisions;
                    positions.push(position.x, position.y, position.z);
                    uvs.push(textureCoordinate.x, textureCoordinate.y);
                }
            }
            subdivisions += 1;
            for (var s = 0; s < subdivisions - 1; s++) {
                for (var i = 0; i <= tessellation; i++) {
                    indices.push(i * subdivisions + s);
                    indices.push((i * subdivisions + (s + subdivisions)) % (stride * subdivisions));
                    indices.push(i * subdivisions + (s + 1));
                    indices.push(i * subdivisions + (s + 1));
                    indices.push((i * subdivisions + (s + subdivisions)) % (stride * subdivisions));
                    indices.push((i * subdivisions + (s + subdivisions + 1)) % (stride * subdivisions));
                }
            }
            createCylinderCap(true);
            createCylinderCap(false);
            BABYLON.VertexData.ComputeNormals(positions, indices, normals);
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateTorus = function (diameter, thickness, tessellation) {
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            diameter = diameter || 1;
            thickness = thickness || 0.5;
            tessellation = tessellation || 16;
            var stride = tessellation + 1;
            for (var i = 0; i <= tessellation; i++) {
                var u = i / tessellation;
                var outerAngle = i * Math.PI * 2.0 / tessellation - Math.PI / 2.0;
                var transform = BABYLON.Matrix.Translation(diameter / 2.0, 0, 0).multiply(BABYLON.Matrix.RotationY(outerAngle));
                for (var j = 0; j <= tessellation; j++) {
                    var v = 1 - j / tessellation;
                    var innerAngle = j * Math.PI * 2.0 / tessellation + Math.PI;
                    var dx = Math.cos(innerAngle);
                    var dy = Math.sin(innerAngle);
                    var normal = new BABYLON.Vector3(dx, dy, 0);
                    var position = normal.scale(thickness / 2);
                    var textureCoordinate = new BABYLON.Vector2(u, v);
                    position = BABYLON.Vector3.TransformCoordinates(position, transform);
                    normal = BABYLON.Vector3.TransformNormal(normal, transform);
                    positions.push(position.x, position.y, position.z);
                    normals.push(normal.x, normal.y, normal.z);
                    uvs.push(textureCoordinate.x, textureCoordinate.y);
                    var nextI = (i + 1) % stride;
                    var nextJ = (j + 1) % stride;
                    indices.push(i * stride + j);
                    indices.push(i * stride + nextJ);
                    indices.push(nextI * stride + j);
                    indices.push(i * stride + nextJ);
                    indices.push(nextI * stride + nextJ);
                    indices.push(nextI * stride + j);
                }
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateLines = function (points) {
            var indices = [];
            var positions = [];
            for (var index = 0; index < points.length; index++) {
                positions.push(points[index].x, points[index].y, points[index].z);
                if (index > 0) {
                    indices.push(index - 1);
                    indices.push(index);
                }
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            return vertexData;
        };
        VertexData.CreateGround = function (width, height, subdivisions) {
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            var row, col;
            width = width || 1;
            height = height || 1;
            subdivisions = subdivisions || 1;
            for (row = 0; row <= subdivisions; row++) {
                for (col = 0; col <= subdivisions; col++) {
                    var position = new BABYLON.Vector3((col * width) / subdivisions - (width / 2.0), 0, ((subdivisions - row) * height) / subdivisions - (height / 2.0));
                    var normal = new BABYLON.Vector3(0, 1.0, 0);
                    positions.push(position.x, position.y, position.z);
                    normals.push(normal.x, normal.y, normal.z);
                    uvs.push(col / subdivisions, 1.0 - row / subdivisions);
                }
            }
            for (row = 0; row < subdivisions; row++) {
                for (col = 0; col < subdivisions; col++) {
                    indices.push(col + 1 + (row + 1) * (subdivisions + 1));
                    indices.push(col + 1 + row * (subdivisions + 1));
                    indices.push(col + row * (subdivisions + 1));
                    indices.push(col + (row + 1) * (subdivisions + 1));
                    indices.push(col + 1 + (row + 1) * (subdivisions + 1));
                    indices.push(col + row * (subdivisions + 1));
                }
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateTiledGround = function (xmin, zmin, xmax, zmax, subdivisions, precision) {
            if (typeof subdivisions === "undefined") {
                subdivisions = {
                    w: 1,
                    h: 1
                };
            }
            if (typeof precision === "undefined") {
                precision = {
                    w: 1,
                    h: 1
                };
            }
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            var row, col, tileRow, tileCol;
            subdivisions.h = (subdivisions.w < 1) ? 1 : subdivisions.h;
            subdivisions.w = (subdivisions.w < 1) ? 1 : subdivisions.w;
            precision.w = (precision.w < 1) ? 1 : precision.w;
            precision.h = (precision.h < 1) ? 1 : precision.h;
            var tileSize = {
                'w': (xmax - xmin) / subdivisions.w,
                'h': (zmax - zmin) / subdivisions.h
            };
            for (tileRow = 0; tileRow < subdivisions.h; tileRow++) {
                for (tileCol = 0; tileCol < subdivisions.w; tileCol++) {
                    applyTile(xmin + tileCol * tileSize.w, zmin + tileRow * tileSize.h, xmin + (tileCol + 1) * tileSize.w, zmin + (tileRow + 1) * tileSize.h);
                }
            }
            function applyTile(xTileMin, zTileMin, xTileMax, zTileMax) {
                var base = positions.length / 3;
                var rowLength = precision.w + 1;
                for (row = 0; row < precision.h; row++) {
                    for (col = 0; col < precision.w; col++) {
                        var square = [base + col + row * rowLength, base + (col + 1) + row * rowLength, base + (col + 1) + (row + 1) * rowLength, base + col + (row + 1) * rowLength];
                        indices.push(square[1]);
                        indices.push(square[2]);
                        indices.push(square[3]);
                        indices.push(square[0]);
                        indices.push(square[1]);
                        indices.push(square[3]);
                    }
                }
                var position = BABYLON.Vector3.Zero();
                var normal = new BABYLON.Vector3(0, 1.0, 0);
                for (row = 0; row <= precision.h; row++) {
                    position.z = (row * (zTileMax - zTileMin)) / precision.h + zTileMin;
                    for (col = 0; col <= precision.w; col++) {
                        position.x = (col * (xTileMax - xTileMin)) / precision.w + xTileMin;
                        position.y = 0;
                        positions.push(position.x, position.y, position.z);
                        normals.push(normal.x, normal.y, normal.z);
                        uvs.push(col / precision.w, row / precision.h);
                    }
                }
            }
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateGroundFromHeightMap = function (width, height, subdivisions, minHeight, maxHeight, buffer, bufferWidth, bufferHeight) {
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            var row, col;
            for (row = 0; row <= subdivisions; row++) {
                for (col = 0; col <= subdivisions; col++) {
                    var position = new BABYLON.Vector3((col * width) / subdivisions - (width / 2.0), 0, ((subdivisions - row) * height) / subdivisions - (height / 2.0));
                    var heightMapX = (((position.x + width / 2) / width) * (bufferWidth - 1)) | 0;
                    var heightMapY = ((1.0 - (position.z + height / 2) / height) * (bufferHeight - 1)) | 0;
                    var pos = (heightMapX + heightMapY * bufferWidth) * 4;
                    var r = buffer[pos] / 255.0;
                    var g = buffer[pos + 1] / 255.0;
                    var b = buffer[pos + 2] / 255.0;
                    var gradient = r * 0.3 + g * 0.59 + b * 0.11;
                    position.y = minHeight + (maxHeight - minHeight) * gradient;
                    positions.push(position.x, position.y, position.z);
                    normals.push(0, 0, 0);
                    uvs.push(col / subdivisions, 1.0 - row / subdivisions);
                }
            }
            for (row = 0; row < subdivisions; row++) {
                for (col = 0; col < subdivisions; col++) {
                    indices.push(col + 1 + (row + 1) * (subdivisions + 1));
                    indices.push(col + 1 + row * (subdivisions + 1));
                    indices.push(col + row * (subdivisions + 1));
                    indices.push(col + (row + 1) * (subdivisions + 1));
                    indices.push(col + 1 + (row + 1) * (subdivisions + 1));
                    indices.push(col + row * (subdivisions + 1));
                }
            }
            BABYLON.VertexData.ComputeNormals(positions, indices, normals);
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreatePlane = function (size) {
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            size = size || 1;
            var halfSize = size / 2.0;
            positions.push(-halfSize, -halfSize, 0);
            normals.push(0, 0, -1.0);
            uvs.push(0.0, 0.0);
            positions.push(halfSize, -halfSize, 0);
            normals.push(0, 0, -1.0);
            uvs.push(1.0, 0.0);
            positions.push(halfSize, halfSize, 0);
            normals.push(0, 0, -1.0);
            uvs.push(1.0, 1.0);
            positions.push(-halfSize, halfSize, 0);
            normals.push(0, 0, -1.0);
            uvs.push(0.0, 1.0);
            indices.push(0);
            indices.push(1);
            indices.push(2);
            indices.push(0);
            indices.push(2);
            indices.push(3);
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.CreateTorusKnot = function (radius, tube, radialSegments, tubularSegments, p, q) {
            var indices = [];
            var positions = [];
            var normals = [];
            var uvs = [];
            radius = radius || 2;
            tube = tube || 0.5;
            radialSegments = radialSegments || 32;
            tubularSegments = tubularSegments || 32;
            p = p || 2;
            q = q || 3;
            var getPos = function (angle) {
                    var cu = Math.cos(angle);
                    var su = Math.sin(angle);
                    var quOverP = q / p * angle;
                    var cs = Math.cos(quOverP);
                    var tx = radius * (2 + cs) * 0.5 * cu;
                    var ty = radius * (2 + cs) * su * 0.5;
                    var tz = radius * Math.sin(quOverP) * 0.5;
                    return new BABYLON.Vector3(tx, ty, tz);
                };
            for (var i = 0; i <= radialSegments; i++) {
                var modI = i % radialSegments;
                var u = modI / radialSegments * 2 * p * Math.PI;
                var p1 = getPos(u);
                var p2 = getPos(u + 0.01);
                var tang = p2.subtract(p1);
                var n = p2.add(p1);
                var bitan = BABYLON.Vector3.Cross(tang, n);
                n = BABYLON.Vector3.Cross(bitan, tang);
                bitan.normalize();
                n.normalize();
                for (var j = 0; j < tubularSegments; j++) {
                    var modJ = j % tubularSegments;
                    var v = modJ / tubularSegments * 2 * Math.PI;
                    var cx = -tube * Math.cos(v);
                    var cy = tube * Math.sin(v);
                    positions.push(p1.x + cx * n.x + cy * bitan.x);
                    positions.push(p1.y + cx * n.y + cy * bitan.y);
                    positions.push(p1.z + cx * n.z + cy * bitan.z);
                    uvs.push(i / radialSegments);
                    uvs.push(j / tubularSegments);
                }
            }
            for (i = 0; i < radialSegments; i++) {
                for (j = 0; j < tubularSegments; j++) {
                    var jNext = (j + 1) % tubularSegments;
                    var a = i * tubularSegments + j;
                    var b = (i + 1) * tubularSegments + j;
                    var c = (i + 1) * tubularSegments + jNext;
                    var d = i * tubularSegments + jNext;
                    indices.push(d);
                    indices.push(b);
                    indices.push(a);
                    indices.push(d);
                    indices.push(c);
                    indices.push(b);
                }
            }
            BABYLON.VertexData.ComputeNormals(positions, indices, normals);
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = indices;
            vertexData.positions = positions;
            vertexData.normals = normals;
            vertexData.uvs = uvs;
            return vertexData;
        };
        VertexData.ComputeNormals = function (positions, indices, normals) {
            var positionVectors = [];
            var facesOfVertices = [];
            var index;
            for (index = 0; index < positions.length; index += 3) {
                var vector3 = new BABYLON.Vector3(positions[index], positions[index + 1], positions[index + 2]);
                positionVectors.push(vector3);
                facesOfVertices.push([]);
            }
            var facesNormals = [];
            for (index = 0; index < indices.length / 3; index++) {
                var i1 = indices[index * 3];
                var i2 = indices[index * 3 + 1];
                var i3 = indices[index * 3 + 2];
                var p1 = positionVectors[i1];
                var p2 = positionVectors[i2];
                var p3 = positionVectors[i3];
                var p1p2 = p1.subtract(p2);
                var p3p2 = p3.subtract(p2);
                facesNormals[index] = BABYLON.Vector3.Normalize(BABYLON.Vector3.Cross(p1p2, p3p2));
                facesOfVertices[i1].push(index);
                facesOfVertices[i2].push(index);
                facesOfVertices[i3].push(index);
            }
            for (index = 0; index < positionVectors.length; index++) {
                var faces = facesOfVertices[index];
                var normal = BABYLON.Vector3.Zero();
                for (var faceIndex = 0; faceIndex < faces.length; faceIndex++) {
                    normal.addInPlace(facesNormals[faces[faceIndex]]);
                }
                normal = BABYLON.Vector3.Normalize(normal.scale(1.0 / faces.length));
                normals[index * 3] = normal.x;
                normals[index * 3 + 1] = normal.y;
                normals[index * 3 + 2] = normal.z;
            }
        };
        return VertexData;
    })();
    BABYLON.VertexData = VertexData;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var buildCamera = function (that, name) {
            that._leftCamera.isIntermediate = true;
            that.subCameras.push(that._leftCamera);
            that.subCameras.push(that._rightCamera);
            that._leftTexture = new BABYLON.PassPostProcess(name + "_leftTexture", 1.0, that._leftCamera);
            that._anaglyphPostProcess = new BABYLON.AnaglyphPostProcess(name + "_anaglyph", 1.0, that._rightCamera);
            that._anaglyphPostProcess.onApply = function (effect) {
                effect.setTextureFromPostProcess("leftSampler", that._leftTexture);
            };
            that._update();
        };
    var AnaglyphArcRotateCamera = (function (_super) {
        __extends(AnaglyphArcRotateCamera, _super);

        function AnaglyphArcRotateCamera(name, alpha, beta, radius, target, eyeSpace, scene) {
            _super.call(this, name, alpha, beta, radius, target, scene);
            this._eyeSpace = BABYLON.Tools.ToRadians(eyeSpace);
            this._leftCamera = new BABYLON.ArcRotateCamera(name + "_left", alpha - this._eyeSpace, beta, radius, target, scene);
            this._rightCamera = new BABYLON.ArcRotateCamera(name + "_right", alpha + this._eyeSpace, beta, radius, target, scene);
            buildCamera(this, name);
        }
        AnaglyphArcRotateCamera.prototype._update = function () {
            this._updateCamera(this._leftCamera);
            this._updateCamera(this._rightCamera);
            this._leftCamera.alpha = this.alpha - this._eyeSpace;
            this._rightCamera.alpha = this.alpha + this._eyeSpace;
            _super.prototype._update.call(this);
        };
        AnaglyphArcRotateCamera.prototype._updateCamera = function (camera) {
            camera.beta = this.beta;
            camera.radius = this.radius;
            camera.minZ = this.minZ;
            camera.maxZ = this.maxZ;
            camera.fov = this.fov;
            camera.target = this.target;
        };
        return AnaglyphArcRotateCamera;
    })(BABYLON.ArcRotateCamera);
    BABYLON.AnaglyphArcRotateCamera = AnaglyphArcRotateCamera;
    var AnaglyphFreeCamera = (function (_super) {
        __extends(AnaglyphFreeCamera, _super);

        function AnaglyphFreeCamera(name, position, eyeSpace, scene) {
            _super.call(this, name, position, scene);
            this._eyeSpace = BABYLON.Tools.ToRadians(eyeSpace);
            this._transformMatrix = new BABYLON.Matrix();
            this._leftCamera = new BABYLON.FreeCamera(name + "_left", position.clone(), scene);
            this._rightCamera = new BABYLON.FreeCamera(name + "_right", position.clone(), scene);
            buildCamera(this, name);
        }
        AnaglyphFreeCamera.prototype._getSubCameraPosition = function (eyeSpace, result) {
            var target = this.getTarget();
            BABYLON.Matrix.Translation(-target.x, -target.y, -target.z).multiplyToRef(BABYLON.Matrix.RotationY(eyeSpace), this._transformMatrix);
            this._transformMatrix = this._transformMatrix.multiply(BABYLON.Matrix.Translation(target.x, target.y, target.z));
            BABYLON.Vector3.TransformCoordinatesToRef(this.position, this._transformMatrix, result);
        };
        AnaglyphFreeCamera.prototype._update = function () {
            this._getSubCameraPosition(-this._eyeSpace, this._leftCamera.position);
            this._getSubCameraPosition(this._eyeSpace, this._rightCamera.position);
            this._updateCamera(this._leftCamera);
            this._updateCamera(this._rightCamera);
            _super.prototype._update.call(this);
        };
        AnaglyphFreeCamera.prototype._updateCamera = function (camera) {
            camera.minZ = this.minZ;
            camera.maxZ = this.maxZ;
            camera.fov = this.fov;
            camera.viewport = this.viewport;
            camera.setTarget(this.getTarget());
        };
        return AnaglyphFreeCamera;
    })(BABYLON.FreeCamera);
    BABYLON.AnaglyphFreeCamera = AnaglyphFreeCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var AnaglyphPostProcess = (function (_super) {
        __extends(AnaglyphPostProcess, _super);

        function AnaglyphPostProcess(name, ratio, camera, samplingMode, engine, reusable) {
            _super.call(this, name, "anaglyph", null, ["leftSampler"], ratio, camera, samplingMode, engine, reusable);
        }
        return AnaglyphPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.AnaglyphPostProcess = AnaglyphPostProcess;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Tags = (function () {
        function Tags() {}
        Tags.EnableFor = function (obj) {
            obj._tags = obj._tags || {};
            obj.hasTags = function () {
                return Tags.HasTags(obj);
            };
            obj.addTags = function (tagsString) {
                return Tags.AddTagsTo(obj, tagsString);
            };
            obj.removeTags = function (tagsString) {
                return Tags.RemoveTagsFrom(obj, tagsString);
            };
            obj.matchesTagsQuery = function (tagsQuery) {
                return Tags.MatchesQuery(obj, tagsQuery);
            };
        };
        Tags.DisableFor = function (obj) {
            delete obj._tags;
            delete obj.hasTags;
            delete obj.addTags;
            delete obj.removeTags;
            delete obj.matchesTagsQuery;
        };
        Tags.HasTags = function (obj) {
            if (!obj._tags) {
                return false;
            }
            return !BABYLON.Tools.IsEmpty(obj._tags);
        };
        Tags.GetTags = function (obj) {
            if (!obj._tags) {
                return null;
            }
            return obj._tags;
        };
        Tags.AddTagsTo = function (obj, tagsString) {
            if (!tagsString) {
                return;
            }
            var tags = tagsString.split(" ");
            for (var t in tags) {
                Tags._AddTagTo(obj, tags[t]);
            }
        };
        Tags._AddTagTo = function (obj, tag) {
            tag = tag.trim();
            if (tag === "" || tag === "true" || tag === "false") {
                return;
            }
            if (tag.match(/[\s]/) || tag.match(/^([!]|([|]|[&]){2})/)) {
                return;
            }
            Tags.EnableFor(obj);
            obj._tags[tag] = true;
        };
        Tags.RemoveTagsFrom = function (obj, tagsString) {
            if (!Tags.HasTags(obj)) {
                return;
            }
            var tags = tagsString.split(" ");
            for (var t in tags) {
                Tags._RemoveTagFrom(obj, tags[t]);
            }
        };
        Tags._RemoveTagFrom = function (obj, tag) {
            delete obj._tags[tag];
        };
        Tags.MatchesQuery = function (obj, tagsQuery) {
            if (tagsQuery === undefined) {
                return true;
            }
            if (tagsQuery === "") {
                return Tags.HasTags(obj);
            }
            return BABYLON.Internals.AndOrNotEvaluator.Eval(tagsQuery, function (r) {
                return Tags.HasTags(obj) && obj._tags[r];
            });
        };
        return Tags;
    })();
    BABYLON.Tags = Tags;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    (function (Internals) {
        var AndOrNotEvaluator = (function () {
            function AndOrNotEvaluator() {}
            AndOrNotEvaluator.Eval = function (query, evaluateCallback) {
                if (!query.match(/\([^\(\)]*\)/g)) {
                    query = AndOrNotEvaluator._HandleParenthesisContent(query, evaluateCallback);
                } else {
                    query = query.replace(/\([^\(\)]*\)/g, function (r) {
                        r = r.slice(1, r.length - 1);
                        return AndOrNotEvaluator._HandleParenthesisContent(r, evaluateCallback);
                    });
                }
                if (query === "true") {
                    return true;
                }
                if (query === "false") {
                    return false;
                }
                return AndOrNotEvaluator.Eval(query, evaluateCallback);
            };
            AndOrNotEvaluator._HandleParenthesisContent = function (parenthesisContent, evaluateCallback) {
                evaluateCallback = evaluateCallback || (function (r) {
                    return r === "true" ? true : false;
                });
                var result;
                var or = parenthesisContent.split("||");
                for (var i in or) {
                    var ori = AndOrNotEvaluator._SimplifyNegation(or[i].trim());
                    var and = ori.split("&&");
                    if (and.length > 1) {
                        for (var j = 0; j < and.length; ++j) {
                            var andj = AndOrNotEvaluator._SimplifyNegation(and[j].trim());
                            if (andj !== "true" && andj !== "false") {
                                if (andj[0] === "!") {
                                    result = !evaluateCallback(andj.substring(1));
                                } else {
                                    result = evaluateCallback(andj);
                                }
                            } else {
                                result = andj === "true" ? true : false;
                            }
                            if (!result) {
                                ori = "false";
                                break;
                            }
                        }
                    }
                    if (result || ori === "true") {
                        result = true;
                        break;
                    }
                    if (ori !== "true" && ori !== "false") {
                        if (ori[0] === "!") {
                            result = !evaluateCallback(ori.substring(1));
                        } else {
                            result = evaluateCallback(ori);
                        }
                    } else {
                        result = ori === "true" ? true : false;
                    }
                }
                return result ? "true" : "false";
            };
            AndOrNotEvaluator._SimplifyNegation = function (booleanString) {
                booleanString = booleanString.replace(/^[\s!]+/, function (r) {
                    r = r.replace(/[\s]/g, function () {
                        return "";
                    });
                    return r.length % 2 ? "!" : "";
                });
                booleanString = booleanString.trim();
                if (booleanString === "!true") {
                    booleanString = "false";
                } else if (booleanString === "!false") {
                    booleanString = "true";
                }
                return booleanString;
            };
            return AndOrNotEvaluator;
        })();
        Internals.AndOrNotEvaluator = AndOrNotEvaluator;
    })(BABYLON.Internals || (BABYLON.Internals = {}));
    var Internals = BABYLON.Internals;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcessRenderPass = (function () {
        function PostProcessRenderPass(scene, name, size, renderList, beforeRender, afterRender) {
            this._enabled = true;
            this._refCount = 0;
            this._name = name;
            this._renderTexture = new BABYLON.RenderTargetTexture(name, size, scene);
            this.setRenderList(renderList);
            this._renderTexture.onBeforeRender = beforeRender;
            this._renderTexture.onAfterRender = afterRender;
            this._scene = scene;
        }
        PostProcessRenderPass.prototype._incRefCount = function () {
            if (this._refCount === 0) {
                this._scene.customRenderTargets.push(this._renderTexture);
            }
            return ++this._refCount;
        };
        PostProcessRenderPass.prototype._decRefCount = function () {
            this._refCount--;
            if (this._refCount <= 0) {
                this._scene.customRenderTargets.splice(this._scene.customRenderTargets.indexOf(this._renderTexture), 1);
            }
            return this._refCount;
        };
        PostProcessRenderPass.prototype._update = function () {
            this.setRenderList(this._renderList);
        };
        PostProcessRenderPass.prototype.setRenderList = function (renderList) {
            this._renderTexture.renderList = renderList;
        };
        PostProcessRenderPass.prototype.getRenderTexture = function () {
            return this._renderTexture;
        };
        return PostProcessRenderPass;
    })();
    BABYLON.PostProcessRenderPass = PostProcessRenderPass;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcessRenderEffect = (function () {
        function PostProcessRenderEffect(engine, name, postProcessType, ratio, samplingMode, singleInstance) {
            this._engine = engine;
            this._name = name;
            this._postProcessType = postProcessType;
            this._ratio = ratio || 1.0;
            this._samplingMode = samplingMode || null;
            this._singleInstance = singleInstance || true;
            this._cameras = [];
            this._postProcesses = [];
            this._indicesForCamera = [];
            this._renderPasses = [];
            this._renderEffectAsPasses = [];
            this.parameters = function (effect) {};
        }
        PostProcessRenderEffect._GetInstance = function (engine, postProcessType, ratio, samplingMode) {
            var postProcess;
            var instance;
            var args = [];
            var parameters = PostProcessRenderEffect._GetParametersNames(postProcessType);
            for (var i = 0; i < parameters.length; i++) {
                switch (parameters[i]) {
                case "name":
                    args[i] = postProcessType.toString();
                    break;
                case "ratio":
                    args[i] = ratio;
                    break;
                case "camera":
                    args[i] = null;
                    break;
                case "samplingMode":
                    args[i] = samplingMode;
                    break;
                case "engine":
                    args[i] = engine;
                    break;
                case "reusable":
                    args[i] = true;
                    break;
                default:
                    args[i] = null;
                    break;
                }
            }
            postProcess = function () {};
            postProcess.prototype = postProcessType.prototype;
            instance = new postProcess();
            postProcessType.apply(instance, args);
            return instance;
        };
        PostProcessRenderEffect._GetParametersNames = function (func) {
            var commentsRegex = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
            var functWithoutComments = func.toString().replace(commentsRegex, '');
            var parameters = functWithoutComments.slice(functWithoutComments.indexOf('(') + 1, functWithoutComments.indexOf(')')).match(/([^\s,]+)/g);
            if (parameters === null) parameters = [];
            return parameters;
        };
        PostProcessRenderEffect.prototype._update = function () {
            for (var renderPassName in this._renderPasses) {
                this._renderPasses[renderPassName]._update();
            }
        };
        PostProcessRenderEffect.prototype.addPass = function (renderPass) {
            this._renderPasses[renderPass._name] = renderPass;
            this._linkParameters();
        };
        PostProcessRenderEffect.prototype.removePass = function (renderPass) {
            delete this._renderPasses[renderPass._name];
            this._linkParameters();
        };
        PostProcessRenderEffect.prototype.addRenderEffectAsPass = function (renderEffect) {
            this._renderEffectAsPasses[renderEffect._name] = renderEffect;
            this._linkParameters();
        };
        PostProcessRenderEffect.prototype.getPass = function (passName) {
            for (var renderPassName in this._renderPasses) {
                if (renderPassName === passName) {
                    return this._renderPasses[passName];
                }
            }
        };
        PostProcessRenderEffect.prototype.emptyPasses = function () {
            this._renderPasses.length = 0;
            this._linkParameters();
        };
        PostProcessRenderEffect.prototype._attachCameras = function (cameras) {
            var cameraKey;
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                if (this._singleInstance) {
                    cameraKey = 0;
                } else {
                    cameraKey = cameraName;
                }
                this._postProcesses[cameraKey] = this._postProcesses[cameraKey] || PostProcessRenderEffect._GetInstance(this._engine, this._postProcessType, this._ratio, this._samplingMode);
                var index = camera.attachPostProcess(this._postProcesses[cameraKey]);
                if (this._indicesForCamera[cameraName] === null) {
                    this._indicesForCamera[cameraName] = [];
                }
                this._indicesForCamera[cameraName].push(index);
                if (this._cameras.indexOf(camera) === -1) {
                    this._cameras[cameraName] = camera;
                }
                for (var passName in this._renderPasses) {
                    this._renderPasses[passName]._incRefCount();
                }
            }
            this._linkParameters();
        };
        PostProcessRenderEffect.prototype._detachCameras = function (cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                camera.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : cameraName], this._indicesForCamera[cameraName]);
                var index = this._cameras.indexOf(cameraName);
                this._indicesForCamera.splice(index, 1);
                this._cameras.splice(index, 1);
                for (var passName in this._renderPasses) {
                    this._renderPasses[passName]._decRefCount();
                }
            }
        };
        PostProcessRenderEffect.prototype._enable = function (cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                for (var j = 0; j < this._indicesForCamera[cameraName].length; j++) {
                    if (camera._postProcesses[this._indicesForCamera[cameraName][j]] === undefined) {
                        cameras[i].attachPostProcess(this._postProcesses[this._singleInstance ? 0 : cameraName], this._indicesForCamera[cameraName][j]);
                    }
                }
                for (var passName in this._renderPasses) {
                    this._renderPasses[passName]._incRefCount();
                }
            }
        };
        PostProcessRenderEffect.prototype._disable = function (cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.Name;
                camera.detachPostProcess(this._postProcesses[this._singleInstance ? 0 : cameraName], this._indicesForCamera[cameraName]);
                for (var passName in this._renderPasses) {
                    this._renderPasses[passName]._decRefCount();
                }
            }
        };
        PostProcessRenderEffect.prototype.getPostProcess = function (camera) {
            if (this._singleInstance) {
                return this._postProcesses[0];
            } else {
                return this._postProcesses[camera.name];
            }
        };
        PostProcessRenderEffect.prototype._linkParameters = function () {
            var _this = this;
            for (var index in this._postProcesses) {
                this._postProcesses[index].onApply = function (effect) {
                    _this.parameters(effect);
                    _this._linkTextures(effect);
                };
            }
        };
        PostProcessRenderEffect.prototype._linkTextures = function (effect) {
            for (var renderPassName in this._renderPasses) {
                effect.setTexture(renderPassName, this._renderPasses[renderPassName].getRenderTexture());
            }
            for (var renderEffectName in this._renderEffectAsPasses) {
                effect.setTextureFromPostProcess(renderEffectName + "Sampler", this._renderEffectAsPasses[renderEffectName].getPostProcess());
            }
        };
        return PostProcessRenderEffect;
    })();
    BABYLON.PostProcessRenderEffect = PostProcessRenderEffect;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcessRenderPipeline = (function () {
        function PostProcessRenderPipeline(engine, name) {
            this._engine = engine;
            this._name = name;
            this._renderEffects = [];
            this._renderEffectsForIsolatedPass = [];
            this._cameras = [];
        }
        PostProcessRenderPipeline.prototype.addEffect = function (renderEffect) {
            this._renderEffects[renderEffect._name] = renderEffect;
        };
        PostProcessRenderPipeline.prototype._enableEffect = function (renderEffectName, cameras) {
            var renderEffects = this._renderEffects[renderEffectName];
            if (!renderEffects) {
                return;
            }
            renderEffects.enable(BABYLON.Tools.MakeArray(cameras || this._cameras));
        };
        PostProcessRenderPipeline.prototype._disableEffect = function (renderEffectName, cameras) {
            var renderEffects = this._renderEffects[renderEffectName];
            if (!renderEffects) {
                return;
            }
            renderEffects.disable(BABYLON.Tools.MakeArray(cameras || this._cameras));
        };
        PostProcessRenderPipeline.prototype._attachCameras = function (cameras, unique) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            var indicesToDelete = [];
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                if (this._cameras.indexOf(camera) === -1) {
                    this._cameras[cameraName] = camera;
                } else if (unique) {
                    indicesToDelete.push(i);
                }
            }
            for (var i = 0; i < indicesToDelete.length; i++) {
                cameras.splice(indicesToDelete[i], 1);
            }
            for (var renderEffectName in this._renderEffects) {
                this._renderEffects[renderEffectName]._attachCameras(_cam);
            }
        };
        PostProcessRenderPipeline.prototype._detachCameras = function (cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var renderEffectName in this._renderEffects) {
                this._renderEffects[renderEffectName]._detachCameras(_cam);
            }
            for (var i = 0; i < _cam.length; i++) {
                this._cameras.splice(this._cameras.indexOf(_cam[i]), 1);
            }
        };
        PostProcessRenderPipeline.prototype._enableDisplayOnlyPass = function (passName, cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            var pass = null;
            for (var renderEffectName in this._renderEffects) {
                pass = this._renderEffects[renderEffectName].getPass(passName);
                if (pass != null) {
                    break;
                }
            }
            if (pass === null) {
                return;
            }
            for (var renderEffectName in this._renderEffects) {
                this._renderEffects[renderEffectName]._disable(_cam);
            }
            pass._name = PostProcessRenderPipeline.PASS_SAMPLER_NAME;
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                this._renderEffectsForIsolatedPass[cameraName] = this._renderEffectsForIsolatedPass[cameraName] || new BABYLON.PostProcessRenderEffect(this._engine, PostProcessRenderPipeline.PASS_EFFECT_NAME, "BABYLON.DisplayPassPostProcess", 1.0, null, null);
                this._renderEffectsForIsolatedPass[cameraName].emptyPasses();
                this._renderEffectsForIsolatedPass[cameraName].addPass(pass);
                this._renderEffectsForIsolatedPass[cameraName]._attachCameras(camera);
            }
        };
        PostProcessRenderPipeline.prototype._disableDisplayOnlyPass = function (cameras) {
            var _cam = BABYLON.Tools.MakeArray(cameras || this._cameras);
            for (var i = 0; i < _cam.length; i++) {
                var camera = _cam[i];
                var cameraName = camera.name;
                this._renderEffectsForIsolatedPass[cameraName] = this._renderEffectsForIsolatedPass[cameraName] || new BABYLON.PostProcessRenderEffect(this._engine, PostProcessRenderPipeline.PASS_EFFECT_NAME, "BABYLON.DisplayPassPostProcess", 1.0, null, null);
                this._renderEffectsForIsolatedPass[cameraName]._disable(camera);
            }
            for (var renderEffectName in this._renderEffects) {
                this._renderEffects[renderEffectName]._enable(_cam);
            }
        };
        PostProcessRenderPipeline.prototype._update = function () {
            for (var renderEffectName in this._renderEffects) {
                this._renderEffects[renderEffectName]._update();
            }
            for (var i = 0; i < this._cameras.length; i++) {
                var cameraName = this._cameras[i].name;
                if (this._renderEffectsForIsolatedPass[cameraName]) {
                    this._renderEffectsForIsolatedPass[cameraName]._update();
                }
            }
        };
        PostProcessRenderPipeline.PASS_EFFECT_NAME = "passEffect";
        PostProcessRenderPipeline.PASS_SAMPLER_NAME = "passSampler";
        return PostProcessRenderPipeline;
    })();
    BABYLON.PostProcessRenderPipeline = PostProcessRenderPipeline;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var PostProcessRenderPipelineManager = (function () {
        function PostProcessRenderPipelineManager() {
            this._renderPipelines = [];
        }
        PostProcessRenderPipelineManager.prototype.addPipeline = function (renderPipeline) {
            this._renderPipelines[renderPipeline._name] = renderPipeline;
        };
        PostProcessRenderPipelineManager.prototype.attachCamerasToRenderPipeline = function (renderPipelineName, cameras, unique) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.attachCameras(cameras, unique);
        };
        PostProcessRenderPipelineManager.prototype.detachCamerasFromRenderPipeline = function (renderPipelineName, cameras) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.detachCameras(cameras);
        };
        PostProcessRenderPipelineManager.prototype.enableEffectInPipeline = function (renderPipelineName, renderEffectName, cameras) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.enableEffect(renderEffectName, cameras);
        };
        PostProcessRenderPipelineManager.prototype.disableEffectInPipeline = function (renderPipelineName, renderEffectName, cameras) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.disableEffect(renderEffectName, cameras);
        };
        PostProcessRenderPipelineManager.prototype.enableDisplayOnlyPassInPipeline = function (renderPipelineName, passName, cameras) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.enableDisplayOnlyPass(passName, cameras);
        };
        PostProcessRenderPipelineManager.prototype.disableDisplayOnlyPassInPipeline = function (renderPipelineName, cameras) {
            var renderPipeline = this._renderPipelines[renderPipelineName];
            if (!renderPipeline) {
                return;
            }
            renderPipeline.disableDisplayOnlyPass(cameras);
        };
        PostProcessRenderPipelineManager.prototype.update = function () {
            for (var renderPipelineName in this._renderPipelines) {
                this._renderPipelines[renderPipelineName]._update();
            }
        };
        return PostProcessRenderPipelineManager;
    })();
    BABYLON.PostProcessRenderPipelineManager = PostProcessRenderPipelineManager;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var DisplayPassPostProcess = (function (_super) {
        __extends(DisplayPassPostProcess, _super);

        function DisplayPassPostProcess(name, ratio, camera, samplingMode, engine, reusable) {
            _super.call(this, name, "displayPass", ["passSampler"], ["passSampler"], ratio, camera, samplingMode, engine, reusable);
        }
        return DisplayPassPostProcess;
    })(BABYLON.PostProcess);
    BABYLON.DisplayPassPostProcess = DisplayPassPostProcess;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var BoundingBoxRenderer = (function () {
        function BoundingBoxRenderer(scene) {
            this.frontColor = new BABYLON.Color3(1, 1, 1);
            this.backColor = new BABYLON.Color3(0.1, 0.1, 0.1);
            this.showBackLines = true;
            this.renderList = new BABYLON.SmartArray(32);
            this._scene = scene;
            this._colorShader = new BABYLON.ShaderMaterial("colorShader", scene, "color", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "color"]
            });
            var engine = this._scene.getEngine();
            var boxdata = BABYLON.VertexData.CreateBox(1.0);
            this._vb = new BABYLON.VertexBuffer(engine, boxdata.positions, BABYLON.VertexBuffer.PositionKind, false);
            this._ib = engine.createIndexBuffer([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 7, 1, 6, 2, 5, 3, 4]);
        }
        BoundingBoxRenderer.prototype.reset = function () {
            this.renderList.reset();
        };
        BoundingBoxRenderer.prototype.render = function () {
            if (this.renderList.length == 0 || !this._colorShader.isReady()) {
                return;
            }
            var engine = this._scene.getEngine();
            engine.setDepthWrite(false);
            this._colorShader._preBind();
            for (var boundingBoxIndex = 0; boundingBoxIndex < this.renderList.length; boundingBoxIndex++) {
                var boundingBox = this.renderList.data[boundingBoxIndex];
                var min = boundingBox.minimum;
                var max = boundingBox.maximum;
                var diff = max.subtract(min);
                var median = min.add(diff.scale(0.5));
                var worldMatrix = BABYLON.Matrix.Scaling(diff.x, diff.y, diff.z).multiply(BABYLON.Matrix.Translation(median.x, median.y, median.z)).multiply(boundingBox.getWorldMatrix());
                engine.bindBuffers(this._vb.getBuffer(), this._ib, [3], 3 * 4, this._colorShader.getEffect());
                if (this.showBackLines) {
                    engine.setDepthFunctionToGreaterOrEqual();
                    this._colorShader.setColor3("color", this.backColor);
                    this._colorShader.bind(worldMatrix);
                    engine.draw(false, 0, 24);
                }
                engine.setDepthFunctionToLess();
                this._colorShader.setColor3("color", this.frontColor);
                this._colorShader.bind(worldMatrix);
                engine.draw(false, 0, 24);
            }
            this._colorShader.unbind();
            engine.setDepthFunctionToLessOrEqual();
            engine.setDepthWrite(true);
        };
        BoundingBoxRenderer.prototype.dispose = function () {
            this._colorShader.dispose();
            this._vb.dispose();
            this._scene.getEngine()._releaseBuffer(this._ib);
        };
        return BoundingBoxRenderer;
    })();
    BABYLON.BoundingBoxRenderer = BoundingBoxRenderer;
})(BABYLON || (BABYLON = {})); /***Based on jsTGALoader-Javascript loader for TGA file*By Vincent Thibault*@blog http://blog.robrowser.com/javascript-tga-loader.html*/
var BABYLON;
(function (BABYLON) {
    (function (Internals) {
        var TGATools = (function () {
            function TGATools() {}
            TGATools.GetTGAHeader = function (data) {
                var offset = 0;
                var header = {
                    id_length: data[offset++],
                    colormap_type: data[offset++],
                    image_type: data[offset++],
                    colormap_index: data[offset++] | data[offset++] << 8,
                    colormap_length: data[offset++] | data[offset++] << 8,
                    colormap_size: data[offset++],
                    origin: [data[offset++] | data[offset++] << 8, data[offset++] | data[offset++] << 8],
                    width: data[offset++] | data[offset++] << 8,
                    height: data[offset++] | data[offset++] << 8,
                    pixel_size: data[offset++],
                    flags: data[offset++]
                };
                return header;
            };
            TGATools.UploadContent = function (gl, data) {
                if (data.length < 19) {
                    BABYLON.Tools.Error("Unable to load TGA file - Not enough data to contain header");
                    return;
                }
                var offset = 18;
                var header = TGATools.GetTGAHeader(data);
                if (header.id_length + offset > data.length) {
                    BABYLON.Tools.Error("Unable to load TGA file - Not enough data");
                    return;
                }
                offset += header.id_length;
                var use_rle = false;
                var use_pal = false;
                var use_rgb = false;
                var use_grey = false;
                switch (header.image_type) {
                case TGATools._TYPE_RLE_INDEXED:
                    use_rle = true;
                case TGATools._TYPE_INDEXED:
                    use_pal = true;
                    break;
                case TGATools._TYPE_RLE_RGB:
                    use_rle = true;
                case TGATools._TYPE_RGB:
                    use_rgb = true;
                    break;
                case TGATools._TYPE_RLE_GREY:
                    use_rle = true;
                case TGATools._TYPE_GREY:
                    use_grey = true;
                    break;
                }
                var pixel_data;
                var numAlphaBits = header.flags & 0xf;
                var pixel_size = header.pixel_size >> 3;
                var pixel_total = header.width * header.height * pixel_size;
                var palettes;
                if (use_pal) {
                    palettes = data.subarray(offset, offset += header.colormap_length * (header.colormap_size >> 3));
                }
                if (use_rle) {
                    pixel_data = new Uint8Array(pixel_total);
                    var c, count, i;
                    var localOffset = 0;
                    var pixels = new Uint8Array(pixel_size);
                    while (offset < pixel_total) {
                        c = data[offset++];
                        count = (c & 0x7f) + 1;
                        if (c & 0x80) {
                            for (i = 0; i < pixel_size; ++i) {
                                pixels[i] = data[offset++];
                            }
                            for (i = 0; i < count; ++i) {
                                pixel_data.set(pixels, localOffset + i * pixel_size);
                            }
                            localOffset += pixel_size * count;
                        } else {
                            count *= pixel_size;
                            for (i = 0; i < count; ++i) {
                                pixel_data[localOffset + i] = data[offset++];
                            }
                            localOffset += count;
                        }
                    }
                } else {
                    pixel_data = data.subarray(offset, offset += (use_pal ? header.width * header.height : pixel_total));
                }
                var x_start, y_start, x_step, y_step, y_end, x_end;
                switch ((header.flags & TGATools._ORIGIN_MASK) >> TGATools._ORIGIN_SHIFT) {
                default:
                case TGATools._ORIGIN_UL:
                    x_start = 0;
                    x_step = 1;
                    x_end = header.width;
                    y_start = 0;
                    y_step = 1;
                    y_end = header.height;
                    break;
                case TGATools._ORIGIN_BL:
                    x_start = 0;
                    x_step = 1;
                    x_end = header.width;
                    y_start = header.height - 1;
                    y_step = -1;
                    y_end = -1;
                    break;
                case TGATools._ORIGIN_UR:
                    x_start = header.width - 1;
                    x_step = -1;
                    x_end = -1;
                    y_start = 0;
                    y_step = 1;
                    y_end = header.height;
                    break;
                case TGATools._ORIGIN_BR:
                    x_start = header.width - 1;
                    x_step = -1;
                    x_end = -1;
                    y_start = header.height - 1;
                    y_step = -1;
                    y_end = -1;
                    break;
                }
                var func = '_getImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
                var imageData = TGATools[func](header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, header.width, header.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
            };
            TGATools._getImageData8bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data,
                    colormap = palettes;
                var width = header.width,
                    height = header.height;
                var color, i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = colormap[(color * 3) + 0];
                        imageData[(x + width * y) * 4 + 1] = colormap[(color * 3) + 1];
                        imageData[(x + width * y) * 4 + 0] = colormap[(color * 3) + 2];
                    }
                }
                return imageData;
            };
            TGATools._getImageData16bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data;
                var width = header.width,
                    height = header.height;
                var color, i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        color = image[i + 0] + (image[i + 1] << 8);
                        imageData[(x + width * y) * 4 + 0] = (color & 0x7C00) >> 7;
                        imageData[(x + width * y) * 4 + 1] = (color & 0x03E0) >> 2;
                        imageData[(x + width * y) * 4 + 2] = (color & 0x001F) >> 3;
                        imageData[(x + width * y) * 4 + 3] = (color & 0x8000) ? 0 : 255;
                    }
                }
                return imageData;
            };
            TGATools._getImageData24bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data;
                var width = header.width,
                    height = header.height;
                var i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 3) {
                        imageData[(x + width * y) * 4 + 3] = 255;
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                    }
                }
                return imageData;
            };
            TGATools._getImageData32bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data;
                var width = header.width,
                    height = header.height;
                var i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 4) {
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 1];
                        imageData[(x + width * y) * 4 + 0] = image[i + 2];
                        imageData[(x + width * y) * 4 + 3] = image[i + 3];
                    }
                }
                return imageData;
            };
            TGATools._getImageDataGrey8bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data;
                var width = header.width,
                    height = header.height;
                var color, i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i++) {
                        color = image[i];
                        imageData[(x + width * y) * 4 + 0] = color;
                        imageData[(x + width * y) * 4 + 1] = color;
                        imageData[(x + width * y) * 4 + 2] = color;
                        imageData[(x + width * y) * 4 + 3] = 255;
                    }
                }
                return imageData;
            };
            TGATools._getImageDataGrey16bits = function (header, palettes, pixel_data, y_start, y_step, y_end, x_start, x_step, x_end) {
                var image = pixel_data;
                var width = header.width,
                    height = header.height;
                var i = 0,
                    x, y;
                var imageData = new Uint8Array(width * height * 4);
                for (y = y_start; y !== y_end; y += y_step) {
                    for (x = x_start; x !== x_end; x += x_step, i += 2) {
                        imageData[(x + width * y) * 4 + 0] = image[i + 0];
                        imageData[(x + width * y) * 4 + 1] = image[i + 0];
                        imageData[(x + width * y) * 4 + 2] = image[i + 0];
                        imageData[(x + width * y) * 4 + 3] = image[i + 1];
                    }
                }
                return imageData;
            };
            TGATools._TYPE_NO_DATA = 0;
            TGATools._TYPE_INDEXED = 1;
            TGATools._TYPE_RGB = 2;
            TGATools._TYPE_GREY = 3;
            TGATools._TYPE_RLE_INDEXED = 9;
            TGATools._TYPE_RLE_RGB = 10;
            TGATools._TYPE_RLE_GREY = 11;
            TGATools._ORIGIN_MASK = 0x30;
            TGATools._ORIGIN_SHIFT = 0x04;
            TGATools._ORIGIN_BL = 0x00;
            TGATools._ORIGIN_BR = 0x01;
            TGATools._ORIGIN_UL = 0x02;
            TGATools._ORIGIN_UR = 0x03;
            return TGATools;
        })();
        Internals.TGATools = TGATools;
    })(BABYLON.Internals || (BABYLON.Internals = {}));
    var Internals = BABYLON.Internals;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    (function (Internals) {
        var DDS_MAGIC = 0x20534444;
        var DDSD_CAPS = 0x1,
            DDSD_HEIGHT = 0x2,
            DDSD_WIDTH = 0x4,
            DDSD_PITCH = 0x8,
            DDSD_PIXELFORMAT = 0x1000,
            DDSD_MIPMAPCOUNT = 0x20000,
            DDSD_LINEARSIZE = 0x80000,
            DDSD_DEPTH = 0x800000;
        var DDSCAPS_COMPLEX = 0x8,
            DDSCAPS_MIPMAP = 0x400000,
            DDSCAPS_TEXTURE = 0x1000;
        var DDSCAPS2_CUBEMAP = 0x200,
            DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
            DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
            DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
            DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
            DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
            DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
            DDSCAPS2_VOLUME = 0x200000;
        var DDPF_ALPHAPIXELS = 0x1,
            DDPF_ALPHA = 0x2,
            DDPF_FOURCC = 0x4,
            DDPF_RGB = 0x40,
            DDPF_YUV = 0x200,
            DDPF_LUMINANCE = 0x20000;

        function FourCCToInt32(value) {
            return value.charCodeAt(0) + (value.charCodeAt(1) << 8) + (value.charCodeAt(2) << 16) + (value.charCodeAt(3) << 24);
        }
        function Int32ToFourCC(value) {
            return String.fromCharCode(value & 0xff, (value >> 8) & 0xff, (value >> 16) & 0xff, (value >> 24) & 0xff);
        }
        var FOURCC_DXT1 = FourCCToInt32("DXT1");
        var FOURCC_DXT3 = FourCCToInt32("DXT3");
        var FOURCC_DXT5 = FourCCToInt32("DXT5");
        var headerLengthInt = 31;
        var off_magic = 0;
        var off_size = 1;
        var off_flags = 2;
        var off_height = 3;
        var off_width = 4;
        var off_mipmapCount = 7;
        var off_pfFlags = 20;
        var off_pfFourCC = 21;
        var off_RGBbpp = 22;
        var off_RMask = 23;
        var off_GMask = 24;
        var off_BMask = 25;
        var off_AMask = 26;
        var off_caps1 = 27;
        var off_caps2 = 28;;
        var DDSTools = (function () {
            function DDSTools() {}
            DDSTools.GetDDSInfo = function (arrayBuffer) {
                var header = new Int32Array(arrayBuffer, 0, headerLengthInt);
                var mipmapCount = 1;
                if (header[off_flags] & DDSD_MIPMAPCOUNT) {
                    mipmapCount = Math.max(1, header[off_mipmapCount]);
                }
                return {
                    width: header[off_width],
                    height: header[off_height],
                    mipmapCount: mipmapCount,
                    isFourCC: (header[off_pfFlags] & DDPF_FOURCC) === DDPF_FOURCC,
                    isRGB: (header[off_pfFlags] & DDPF_RGB) === DDPF_RGB,
                    isLuminance: (header[off_pfFlags] & DDPF_LUMINANCE) === DDPF_LUMINANCE,
                    isCube: (header[off_caps2] & DDSCAPS2_CUBEMAP) === DDSCAPS2_CUBEMAP
                };
            };
            DDSTools.GetRGBAArrayBuffer = function (width, height, dataOffset, dataLength, arrayBuffer) {
                var byteArray = new Uint8Array(dataLength);
                var srcData = new Uint8Array(arrayBuffer);
                var index = 0;
                for (var y = height - 1; y >= 0; y--) {
                    for (var x = 0; x < width; x++) {
                        var srcPos = dataOffset + (x + y * width) * 4;
                        byteArray[index + 2] = srcData[srcPos];
                        byteArray[index + 1] = srcData[srcPos + 1];
                        byteArray[index] = srcData[srcPos + 2];
                        byteArray[index + 3] = srcData[srcPos + 3];
                        index += 4;
                    }
                }
                return byteArray;
            };
            DDSTools.GetRGBArrayBuffer = function (width, height, dataOffset, dataLength, arrayBuffer) {
                var byteArray = new Uint8Array(dataLength);
                var srcData = new Uint8Array(arrayBuffer);
                var index = 0;
                for (var y = height - 1; y >= 0; y--) {
                    for (var x = 0; x < width; x++) {
                        var srcPos = dataOffset + (x + y * width) * 3;
                        byteArray[index + 2] = srcData[srcPos];
                        byteArray[index + 1] = srcData[srcPos + 1];
                        byteArray[index] = srcData[srcPos + 2];
                        index += 3;
                    }
                }
                return byteArray;
            };
            DDSTools.GetLuminanceArrayBuffer = function (width, height, dataOffset, dataLength, arrayBuffer) {
                var byteArray = new Uint8Array(dataLength);
                var srcData = new Uint8Array(arrayBuffer);
                var index = 0;
                for (var y = height - 1; y >= 0; y--) {
                    for (var x = 0; x < width; x++) {
                        var srcPos = dataOffset + (x + y * width);
                        byteArray[index] = srcData[srcPos];
                        index++;
                    }
                }
                return byteArray;
            };
            DDSTools.UploadDDSLevels = function (gl, ext, arrayBuffer, info, loadMipmaps, faces) {
                var header = new Int32Array(arrayBuffer, 0, headerLengthInt),
                    fourCC, blockBytes, internalFormat, width, height, dataLength, dataOffset, byteArray, mipmapCount, i;
                if (header[off_magic] != DDS_MAGIC) {
                    BABYLON.Tools.Error("Invalid magic number in DDS header");
                    return;
                }
                if (!info.isFourCC && !info.isRGB && !info.isLuminance) {
                    BABYLON.Tools.Error("Unsupported format, must contain a FourCC, RGB or LUMINANCE code");
                    return;
                }
                if (info.isFourCC) {
                    fourCC = header[off_pfFourCC];
                    switch (fourCC) {
                    case FOURCC_DXT1:
                        blockBytes = 8;
                        internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                        break;
                    case FOURCC_DXT3:
                        blockBytes = 16;
                        internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                        break;
                    case FOURCC_DXT5:
                        blockBytes = 16;
                        internalFormat = ext.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                        break;
                    default:
                        console.error("Unsupported FourCC code:", Int32ToFourCC(fourCC));
                        return;
                    }
                }
                mipmapCount = 1;
                if (header[off_flags] & DDSD_MIPMAPCOUNT && loadMipmaps !== false) {
                    mipmapCount = Math.max(1, header[off_mipmapCount]);
                }
                var bpp = header[off_RGBbpp];
                for (var face = 0; face < faces; face++) {
                    var sampler = faces == 1 ? gl.TEXTURE_2D : (gl.TEXTURE_CUBE_MAP_POSITIVE_X + face);
                    width = header[off_width];
                    height = header[off_height];
                    dataOffset = header[off_size] + 4;
                    for (i = 0; i < mipmapCount; ++i) {
                        if (info.isRGB) {
                            if (bpp == 24) {
                                dataLength = width * height * 3;
                                byteArray = DDSTools.GetRGBArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
                                gl.texImage2D(sampler, i, gl.RGB, width, height, 0, gl.RGB, gl.UNSIGNED_BYTE, byteArray);
                            } else {
                                dataLength = width * height * 4;
                                byteArray = DDSTools.GetRGBAArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
                                gl.texImage2D(sampler, i, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, byteArray);
                            }
                        } else if (info.isLuminance) {
                            var unpackAlignment = gl.getParameter(gl.UNPACK_ALIGNMENT);
                            var unpaddedRowSize = width;
                            var paddedRowSize = Math.floor((width + unpackAlignment - 1) / unpackAlignment) * unpackAlignment;
                            dataLength = paddedRowSize * (height - 1) + unpaddedRowSize;
                            byteArray = DDSTools.GetLuminanceArrayBuffer(width, height, dataOffset, dataLength, arrayBuffer);
                            gl.texImage2D(sampler, i, gl.LUMINANCE, width, height, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, byteArray);
                        } else {
                            dataLength = Math.max(4, width) / 4 * Math.max(4, height) / 4 * blockBytes;
                            byteArray = new Uint8Array(arrayBuffer, dataOffset, dataLength);
                            gl.compressedTexImage2D(sampler, i, internalFormat, width, height, 0, byteArray);
                        }
                        dataOffset += dataLength;
                        width *= 0.5;
                        height *= 0.5;
                        width = Math.max(1.0, width);
                        height = Math.max(1.0, height);
                    }
                }
            };
            return DDSTools;
        })();
        Internals.DDSTools = DDSTools;
    })(BABYLON.Internals || (BABYLON.Internals = {}));
    var Internals = BABYLON.Internals;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var SmartArray = (function () {
        function SmartArray(capacity) {
            this.length = 0;
            this._duplicateId = 0;
            this.data = new Array(capacity);
            this._id = SmartArray._GlobalId++;
        }
        SmartArray.prototype.push = function (value) {
            this.data[this.length++] = value;
            if (this.length > this.data.length) {
                this.data.length *= 2;
            }
            if (!value.__smartArrayFlags) {
                value.__smartArrayFlags = {};
            }
            value.__smartArrayFlags[this._id] = this._duplicateId;
        };
        SmartArray.prototype.pushNoDuplicate = function (value) {
            if (value.__smartArrayFlags && value.__smartArrayFlags[this._id] === this._duplicateId) {
                return;
            }
            this.push(value);
        };
        SmartArray.prototype.sort = function (compareFn) {
            this.data.sort(compareFn);
        };
        SmartArray.prototype.reset = function () {
            this.length = 0;
            this._duplicateId++;
        };
        SmartArray.prototype.concat = function (array) {
            if (array.length === 0) {
                return;
            }
            if (this.length + array.length > this.data.length) {
                this.data.length = (this.length + array.length) * 2;
            }
            for (var index = 0; index < array.length; index++) {
                this.data[this.length++] = (array.data || array)[index];
            }
        };
        SmartArray.prototype.concatWithNoDuplicate = function (array) {
            if (array.length === 0) {
                return;
            }
            if (this.length + array.length > this.data.length) {
                this.data.length = (this.length + array.length) * 2;
            }
            for (var index = 0; index < array.length; index++) {
                var item = (array.data || array)[index];
                this.pushNoDuplicate(item);
            }
        };
        SmartArray.prototype.indexOf = function (value) {
            var position = this.data.indexOf(value);
            if (position >= this.length) {
                return -1;
            }
            return position;
        };
        SmartArray._GlobalId = 0;
        return SmartArray;
    })();
    BABYLON.SmartArray = SmartArray;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var CannonJSPlugin = (function () {
        function CannonJSPlugin() {
            this._registeredMeshes = [];
            this._physicsMaterials = [];
            this.updateBodyPosition = function (mesh) {
                for (var index = 0; index < this._registeredMeshes.length; index++) {
                    var registeredMesh = this._registeredMeshes[index];
                    if (registeredMesh.mesh === mesh || registeredMesh.mesh === mesh.parent) {
                        var body = registeredMesh.body.body;
                        body.position.set(mesh.position.x, mesh.position.z, mesh.position.y);
                        body.quaternion.x = mesh.rotationQuaternion.x;
                        body.quaternion.z = mesh.rotationQuaternion.y;
                        body.quaternion.y = mesh.rotationQuaternion.z;
                        body.quaternion.w = -mesh.rotationQuaternion.w;
                        return;
                    }
                }
            };
        }
        CannonJSPlugin.prototype.initialize = function (iterations) {
            if (typeof iterations === "undefined") {
                iterations = 10;
            }
            this._world = new CANNON.World();
            this._world.broadphase = new CANNON.NaiveBroadphase();
            this._world.solver.iterations = iterations;
        };
        CannonJSPlugin.prototype._checkWithEpsilon = function (value) {
            return value < BABYLON.PhysicsEngine.Epsilon ? BABYLON.PhysicsEngine.Epsilon : value;
        };
        CannonJSPlugin.prototype.runOneStep = function (delta) {
            this._world.step(delta);
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.isChild) {
                    continue;
                }
                registeredMesh.mesh.position.x = registeredMesh.body.position.x;
                registeredMesh.mesh.position.y = registeredMesh.body.position.z;
                registeredMesh.mesh.position.z = registeredMesh.body.position.y;
                if (!registeredMesh.mesh.rotationQuaternion) {
                    registeredMesh.mesh.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
                }
                registeredMesh.mesh.rotationQuaternion.x = registeredMesh.body.quaternion.x;
                registeredMesh.mesh.rotationQuaternion.y = registeredMesh.body.quaternion.z;
                registeredMesh.mesh.rotationQuaternion.z = registeredMesh.body.quaternion.y;
                registeredMesh.mesh.rotationQuaternion.w = -registeredMesh.body.quaternion.w;
            }
        };
        CannonJSPlugin.prototype.setGravity = function (gravity) {
            this._world.gravity.set(gravity.x, gravity.z, gravity.y);
        };
        CannonJSPlugin.prototype.registerMesh = function (mesh, impostor, options) {
            this.unregisterMesh(mesh);
            mesh.computeWorldMatrix(true);
            switch (impostor) {
            case BABYLON.PhysicsEngine.SphereImpostor:
                var bbox = mesh.getBoundingInfo().boundingBox;
                var radiusX = bbox.maximumWorld.x - bbox.minimumWorld.x;
                var radiusY = bbox.maximumWorld.y - bbox.minimumWorld.y;
                var radiusZ = bbox.maximumWorld.z - bbox.minimumWorld.z;
                return this._createSphere(Math.max(this._checkWithEpsilon(radiusX), this._checkWithEpsilon(radiusY), this._checkWithEpsilon(radiusZ)) / 2, mesh, options);
            case BABYLON.PhysicsEngine.BoxImpostor:
                bbox = mesh.getBoundingInfo().boundingBox;
                var min = bbox.minimumWorld;
                var max = bbox.maximumWorld;
                var box = max.subtract(min).scale(0.5);
                return this._createBox(this._checkWithEpsilon(box.x), this._checkWithEpsilon(box.y), this._checkWithEpsilon(box.z), mesh, options);
            case BABYLON.PhysicsEngine.PlaneImpostor:
                return this._createPlane(mesh, options);
            case BABYLON.PhysicsEngine.MeshImpostor:
                var rawVerts = mesh.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                var rawFaces = mesh.getIndices();
                return this._createConvexPolyhedron(rawVerts, rawFaces, mesh, options);
            }
            return null;
        };
        CannonJSPlugin.prototype._createSphere = function (radius, mesh, options) {
            var shape = new CANNON.Sphere(radius);
            if (!options) {
                return shape;
            }
            return this._createRigidBodyFromShape(shape, mesh, options.mass, options.friction, options.restitution);
        };
        CannonJSPlugin.prototype._createBox = function (x, y, z, mesh, options) {
            var shape = new CANNON.Box(new CANNON.Vec3(x, z, y));
            if (!options) {
                return shape;
            }
            return this._createRigidBodyFromShape(shape, mesh, options.mass, options.friction, options.restitution);
        };
        CannonJSPlugin.prototype._createPlane = function (mesh, options) {
            var shape = new CANNON.Plane();
            if (!options) {
                return shape;
            }
            return this._createRigidBodyFromShape(shape, mesh, options.mass, options.friction, options.restitution);
        };
        CannonJSPlugin.prototype._createConvexPolyhedron = function (rawVerts, rawFaces, mesh, options) {
            var verts = [],
                faces = [];
            mesh.computeWorldMatrix(true);
            for (var i = 0; i < rawVerts.length; i += 3) {
                var transformed = BABYLON.Vector3.Zero();
                BABYLON.Vector3.TransformNormalFromFloatsToRef(rawVerts[i], rawVerts[i + 1], rawVerts[i + 2], mesh.getWorldMatrix(), transformed);
                verts.push(new CANNON.Vec3(transformed.x, transformed.z, transformed.y));
            }
            for (var j = 0; j < rawFaces.length; j += 3) {
                faces.push([rawFaces[j], rawFaces[j + 2], rawFaces[j + 1]]);
            }
            var shape = new CANNON.ConvexPolyhedron(verts, faces);
            if (!options) {
                return shape;
            }
            return this._createRigidBodyFromShape(shape, mesh, options.mass, options.friction, options.restitution);
        };
        CannonJSPlugin.prototype._addMaterial = function (friction, restitution) {
            var index;
            var mat;
            for (index = 0; index < this._physicsMaterials.length; index++) {
                mat = this._physicsMaterials[index];
                if (mat.friction === friction && mat.restitution === restitution) {
                    return mat;
                }
            }
            var currentMat = new CANNON.Material();
            currentMat.friction = friction;
            currentMat.restitution = restitution;
            this._physicsMaterials.push(currentMat);
            for (index = 0; index < this._physicsMaterials.length; index++) {
                mat = this._physicsMaterials[index];
                var contactMaterial = new CANNON.ContactMaterial(mat, currentMat, mat.friction * currentMat.friction, mat.restitution * currentMat.restitution);
                contactMaterial.contactEquationStiffness = 1e10;
                contactMaterial.contactEquationRegularizationTime = 10;
                this._world.addContactMaterial(contactMaterial);
            }
            return currentMat;
        };
        CannonJSPlugin.prototype._createRigidBodyFromShape = function (shape, mesh, mass, friction, restitution) {
            var initialRotation = null;
            if (mesh.rotationQuaternion) {
                initialRotation = mesh.rotationQuaternion.clone();
                mesh.rotationQuaternion = new BABYLON.Quaternion(0, 0, 0, 1);
            }
            var material = this._addMaterial(friction, restitution);
            var body = new CANNON.RigidBody(mass, shape, material);
            if (initialRotation) {
                body.quaternion.x = initialRotation.x;
                body.quaternion.z = initialRotation.y;
                body.quaternion.y = initialRotation.z;
                body.quaternion.w = -initialRotation.w;
            }
            body.position.set(mesh.position.x, mesh.position.z, mesh.position.y);
            this._world.add(body);
            this._registeredMeshes.push({
                mesh: mesh,
                body: body,
                material: material
            });
            return body;
        };
        CannonJSPlugin.prototype.registerMeshesAsCompound = function (parts, options) {
            var compoundShape = new CANNON.Compound();
            for (var index = 0; index < parts.length; index++) {
                var mesh = parts[index].mesh;
                var shape = this.registerMesh(mesh, parts[index].impostor);
                if (index == 0) {
                    compoundShape.addChild(shape, new CANNON.Vec3(0, 0, 0));
                } else {
                    compoundShape.addChild(shape, new CANNON.Vec3(mesh.position.x, mesh.position.z, mesh.position.y));
                }
            }
            var initialMesh = parts[0].mesh;
            var body = this._createRigidBodyFromShape(compoundShape, initialMesh, options.mass, options.friction, options.restitution);
            body.parts = parts;
            return body;
        };
        CannonJSPlugin.prototype._unbindBody = function (body) {
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.body === body) {
                    registeredMesh.body = null;
                }
            }
        };
        CannonJSPlugin.prototype.unregisterMesh = function (mesh) {
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh) {
                    if (registeredMesh.body) {
                        this._world.remove(registeredMesh.body);
                        this._unbindBody(registeredMesh.body);
                    }
                    this._registeredMeshes.splice(index, 1);
                    return;
                }
            }
        };
        CannonJSPlugin.prototype.applyImpulse = function (mesh, force, contactPoint) {
            var worldPoint = new CANNON.Vec3(contactPoint.x, contactPoint.z, contactPoint.y);
            var impulse = new CANNON.Vec3(force.x, force.z, force.y);
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh) {
                    registeredMesh.body.applyImpulse(impulse, worldPoint);
                    return;
                }
            }
        };
        CannonJSPlugin.prototype.createLink = function (mesh1, mesh2, pivot1, pivot2) {
            var body1 = null,
                body2 = null;
            for (var index = 0; index < this._registeredMeshes.length; index++) {
                var registeredMesh = this._registeredMeshes[index];
                if (registeredMesh.mesh === mesh1) {
                    body1 = registeredMesh.body;
                } else if (registeredMesh.mesh === mesh2) {
                    body2 = registeredMesh.body;
                }
            }
            if (!body1 || !body2) {
                return false;
            }
            var constraint = new CANNON.PointToPointConstraint(body1, new CANNON.Vec3(pivot1.x, pivot1.z, pivot1.y), body2, new CANNON.Vec3(pivot2.x, pivot2.z, pivot2.y));
            this._world.addConstraint(constraint);
            return true;
        };
        CannonJSPlugin.prototype.dispose = function () {
            while (this._registeredMeshes.length) {
                this.unregisterMesh(this._registeredMeshes[0].mesh);
            }
        };
        CannonJSPlugin.prototype.isSupported = function () {
            return window.CANNON !== undefined;
        };
        return CannonJSPlugin;
    })();
    BABYLON.CannonJSPlugin = CannonJSPlugin;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Condition = (function () {
        function Condition(actionManager) {
            this._actionManager = actionManager;
        }
        Condition.prototype.isValid = function () {
            return true;
        };
        Condition.prototype._getProperty = function (propertyPath) {
            return this._actionManager._getProperty(propertyPath);
        };
        Condition.prototype._getEffectiveTarget = function (target, propertyPath) {
            return this._actionManager._getEffectiveTarget(target, propertyPath);
        };
        return Condition;
    })();
    BABYLON.Condition = Condition;
    var ValueCondition = (function (_super) {
        __extends(ValueCondition, _super);

        function ValueCondition(actionManager, target, propertyPath, value, operator) {
            if (typeof operator === "undefined") {
                operator = ValueCondition.IsEqual;
            }
            _super.call(this, actionManager);
            this.propertyPath = propertyPath;
            this.value = value;
            this.operator = operator;
            this._target = this._getEffectiveTarget(target, this.propertyPath);
            this._property = this._getProperty(this.propertyPath);
        }
        Object.defineProperty(ValueCondition, "IsEqual", {
            get: function () {
                return ValueCondition._IsEqual;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueCondition, "IsDifferent", {
            get: function () {
                return ValueCondition._IsDifferent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueCondition, "IsGreater", {
            get: function () {
                return ValueCondition._IsGreater;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ValueCondition, "IsLesser", {
            get: function () {
                return ValueCondition._IsLesser;
            },
            enumerable: true,
            configurable: true
        });
        ValueCondition.prototype.isValid = function () {
            switch (this.operator) {
            case ValueCondition.IsGreater:
                return this._target[this._property] > this.value;
            case ValueCondition.IsLesser:
                return this._target[this._property] < this.value;
            case ValueCondition.IsEqual:
            case ValueCondition.IsDifferent:
                var check;
                if (this.value.equals) {
                    check = this.value.equals(this._target[this._property]);
                } else {
                    check = this.value === this._target[this._property];
                }
                return this.operator === ValueCondition.IsEqual ? check : !check;
            }
            return false;
        };
        ValueCondition._IsEqual = 0;
        ValueCondition._IsDifferent = 1;
        ValueCondition._IsGreater = 2;
        ValueCondition._IsLesser = 3;
        return ValueCondition;
    })(Condition);
    BABYLON.ValueCondition = ValueCondition;
    var PredicateCondition = (function (_super) {
        __extends(PredicateCondition, _super);

        function PredicateCondition(actionManager, predicate) {
            _super.call(this, actionManager);
            this.predicate = predicate;
        }
        PredicateCondition.prototype.isValid = function () {
            return this.predicate();
        };
        return PredicateCondition;
    })(Condition);
    BABYLON.PredicateCondition = PredicateCondition;
    var StateCondition = (function (_super) {
        __extends(StateCondition, _super);

        function StateCondition(actionManager, target, value) {
            _super.call(this, actionManager);
            this.value = value;
            this._target = target;
        }
        StateCondition.prototype.isValid = function () {
            return this._target.state === this.value;
        };
        return StateCondition;
    })(Condition);
    BABYLON.StateCondition = StateCondition;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var Action = (function () {
        function Action(triggerOptions, condition) {
            this.triggerOptions = triggerOptions;
            if (triggerOptions.parameter) {
                this.trigger = triggerOptions.trigger;
                this._triggerParameter = triggerOptions.parameter;
            } else {
                this.trigger = triggerOptions;
            }
            this._nextActiveAction = this;
            this._condition = condition;
        }
        Action.prototype._prepare = function () {};
        Action.prototype.getTriggerParameter = function () {
            return this._triggerParameter;
        };
        Action.prototype._executeCurrent = function (evt) {
            if (this._condition) {
                var currentRenderId = this._actionManager.getScene().getRenderId();
                if (this._condition._evaluationId === currentRenderId) {
                    if (!this._condition._currentResult) {
                        return;
                    }
                } else {
                    this._condition._evaluationId = currentRenderId;
                    if (!this._condition.isValid()) {
                        this._condition._currentResult = false;
                        return;
                    }
                    this._condition._currentResult = true;
                }
            }
            this._nextActiveAction.execute(evt);
            if (this._nextActiveAction._child) {
                this._nextActiveAction = this._nextActiveAction._child;
            } else {
                this._nextActiveAction = this;
            }
        };
        Action.prototype.execute = function (evt) {};
        Action.prototype.then = function (action) {
            this._child = action;
            action._actionManager = this._actionManager;
            action._prepare();
            return action;
        };
        Action.prototype._getProperty = function (propertyPath) {
            return this._actionManager._getProperty(propertyPath);
        };
        Action.prototype._getEffectiveTarget = function (target, propertyPath) {
            return this._actionManager._getEffectiveTarget(target, propertyPath);
        };
        return Action;
    })();
    BABYLON.Action = Action;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var ActionEvent = (function () {
        function ActionEvent(source, pointerX, pointerY, meshUnderPointer, sourceEvent) {
            this.source = source;
            this.pointerX = pointerX;
            this.pointerY = pointerY;
            this.meshUnderPointer = meshUnderPointer;
            this.sourceEvent = sourceEvent;
        }
        ActionEvent.CreateNew = function (source) {
            var scene = source.getScene();
            return new ActionEvent(source, scene.pointerX, scene.pointerY, scene.meshUnderPointer);
        };
        ActionEvent.CreateNewFromScene = function (scene, evt) {
            return new ActionEvent(null, scene.pointerX, scene.pointerY, scene.meshUnderPointer, evt);
        };
        return ActionEvent;
    })();
    BABYLON.ActionEvent = ActionEvent;
    var ActionManager = (function () {
        function ActionManager(scene) {
            this.actions = new Array();
            this._scene = scene;
            scene._actionManagers.push(this);
        }
        Object.defineProperty(ActionManager, "NothingTrigger", {
            get: function () {
                return ActionManager._NothingTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnPickTrigger", {
            get: function () {
                return ActionManager._OnPickTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnLeftPickTrigger", {
            get: function () {
                return ActionManager._OnLeftPickTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnRightPickTrigger", {
            get: function () {
                return ActionManager._OnRightPickTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnCenterPickTrigger", {
            get: function () {
                return ActionManager._OnCenterPickTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnPointerOverTrigger", {
            get: function () {
                return ActionManager._OnPointerOverTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnPointerOutTrigger", {
            get: function () {
                return ActionManager._OnPointerOutTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnEveryFrameTrigger", {
            get: function () {
                return ActionManager._OnEveryFrameTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnIntersectionEnterTrigger", {
            get: function () {
                return ActionManager._OnIntersectionEnterTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnIntersectionExitTrigger", {
            get: function () {
                return ActionManager._OnIntersectionExitTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnKeyDownTrigger", {
            get: function () {
                return ActionManager._OnKeyDownTrigger;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager, "OnKeyUpTrigger", {
            get: function () {
                return ActionManager._OnKeyUpTrigger;
            },
            enumerable: true,
            configurable: true
        });
        ActionManager.prototype.dispose = function () {
            var index = this._scene._actionManagers.indexOf(this);
            if (index > -1) {
                this._scene._actionManagers.splice(index, 1);
            }
        };
        ActionManager.prototype.getScene = function () {
            return this._scene;
        };
        ActionManager.prototype.hasSpecificTriggers = function (triggers) {
            for (var index = 0; index < this.actions.length; index++) {
                var action = this.actions[index];
                if (triggers.indexOf(action.trigger) > -1) {
                    return true;
                }
            }
            return false;
        };
        Object.defineProperty(ActionManager.prototype, "hasPointerTriggers", {
            get: function () {
                for (var index = 0; index < this.actions.length; index++) {
                    var action = this.actions[index];
                    if (action.trigger >= ActionManager._OnPickTrigger && action.trigger <= ActionManager._OnPointerOutTrigger) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ActionManager.prototype, "hasPickTriggers", {
            get: function () {
                for (var index = 0; index < this.actions.length; index++) {
                    var action = this.actions[index];
                    if (action.trigger >= ActionManager._OnPickTrigger && action.trigger <= ActionManager._OnCenterPickTrigger) {
                        return true;
                    }
                }
                return false;
            },
            enumerable: true,
            configurable: true
        });
        ActionManager.prototype.registerAction = function (action) {
            if (action.trigger === ActionManager.OnEveryFrameTrigger) {
                if (this.getScene().actionManager !== this) {
                    BABYLON.Tools.Warn("OnEveryFrameTrigger can only be used with scene.actionManager");
                    return null;
                }
            }
            this.actions.push(action);
            action._actionManager = this;
            action._prepare();
            return action;
        };
        ActionManager.prototype.processTrigger = function (trigger, evt) {
            for (var index = 0; index < this.actions.length; index++) {
                var action = this.actions[index];
                if (action.trigger === trigger) {
                    if (trigger == ActionManager.OnKeyUpTrigger || trigger == ActionManager.OnKeyDownTrigger) {
                        var parameter = action.getTriggerParameter();
                        if (parameter) {
                            if (evt.sourceEvent.key !== parameter) {
                                continue;
                            }
                        }
                    }
                    action._executeCurrent(evt);
                }
            }
        };
        ActionManager.prototype._getEffectiveTarget = function (target, propertyPath) {
            var properties = propertyPath.split(".");
            for (var index = 0; index < properties.length - 1; index++) {
                target = target[properties[index]];
            }
            return target;
        };
        ActionManager.prototype._getProperty = function (propertyPath) {
            var properties = propertyPath.split(".");
            return properties[properties.length - 1];
        };
        ActionManager._NothingTrigger = 0;
        ActionManager._OnPickTrigger = 1;
        ActionManager._OnLeftPickTrigger = 2;
        ActionManager._OnRightPickTrigger = 3;
        ActionManager._OnCenterPickTrigger = 4;
        ActionManager._OnPointerOverTrigger = 5;
        ActionManager._OnPointerOutTrigger = 6;
        ActionManager._OnEveryFrameTrigger = 7;
        ActionManager._OnIntersectionEnterTrigger = 8;
        ActionManager._OnIntersectionExitTrigger = 9;
        ActionManager._OnKeyDownTrigger = 10;
        ActionManager._OnKeyUpTrigger = 11;
        return ActionManager;
    })();
    BABYLON.ActionManager = ActionManager;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var InterpolateValueAction = (function (_super) {
        __extends(InterpolateValueAction, _super);

        function InterpolateValueAction(triggerOptions, target, propertyPath, value, duration, condition, stopOtherAnimations) {
            if (typeof duration === "undefined") {
                duration = 1000;
            }
            _super.call(this, triggerOptions, condition);
            this.propertyPath = propertyPath;
            this.value = value;
            this.duration = duration;
            this.stopOtherAnimations = stopOtherAnimations;
            this._target = target;
        }
        InterpolateValueAction.prototype._prepare = function () {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath);
            this._property = this._getProperty(this.propertyPath);
        };
        InterpolateValueAction.prototype.execute = function () {
            var scene = this._actionManager.getScene();
            var keys = [{
                frame: 0,
                value: this._target[this._property]
            }, {
                frame: 100,
                value: this.value
            }];
            var dataType;
            if (typeof this.value === "number") {
                dataType = BABYLON.Animation.ANIMATIONTYPE_FLOAT;
            } else if (this.value instanceof BABYLON.Color3) {
                dataType = BABYLON.Animation.ANIMATIONTYPE_COLOR3;
            } else if (this.value instanceof BABYLON.Vector3) {
                dataType = BABYLON.Animation.ANIMATIONTYPE_VECTOR3;
            } else if (this.value instanceof BABYLON.Matrix) {
                dataType = BABYLON.Animation.ANIMATIONTYPE_MATRIX;
            } else if (this.value instanceof BABYLON.Quaternion) {
                dataType = BABYLON.Animation.ANIMATIONTYPE_QUATERNION;
            } else {
                BABYLON.Tools.Warn("InterpolateValueAction: Unsupported type (" + typeof this.value + ")");
                return;
            }
            var animation = new BABYLON.Animation("InterpolateValueAction", this._property, 100 * (1000.0 / this.duration), dataType, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            animation.setKeys(keys);
            if (this.stopOtherAnimations) {
                scene.stopAnimation(this._target);
            }
            scene.beginDirectAnimation(this._target, [animation], 0, 100);
        };
        return InterpolateValueAction;
    })(BABYLON.Action);
    BABYLON.InterpolateValueAction = InterpolateValueAction;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var SwitchBooleanAction = (function (_super) {
        __extends(SwitchBooleanAction, _super);

        function SwitchBooleanAction(triggerOptions, target, propertyPath, condition) {
            _super.call(this, triggerOptions, condition);
            this.propertyPath = propertyPath;
            this._target = target;
        }
        SwitchBooleanAction.prototype._prepare = function () {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath);
            this._property = this._getProperty(this.propertyPath);
        };
        SwitchBooleanAction.prototype.execute = function () {
            this._target[this._property] = !this._target[this._property];
        };
        return SwitchBooleanAction;
    })(BABYLON.Action);
    BABYLON.SwitchBooleanAction = SwitchBooleanAction;
    var SetStateAction = (function (_super) {
        __extends(SetStateAction, _super);

        function SetStateAction(triggerOptions, target, value, condition) {
            _super.call(this, triggerOptions, condition);
            this.value = value;
            this._target = target;
        }
        SetStateAction.prototype.execute = function () {
            this._target.state = this.value;
        };
        return SetStateAction;
    })(BABYLON.Action);
    BABYLON.SetStateAction = SetStateAction;
    var SetValueAction = (function (_super) {
        __extends(SetValueAction, _super);

        function SetValueAction(triggerOptions, target, propertyPath, value, condition) {
            _super.call(this, triggerOptions, condition);
            this.propertyPath = propertyPath;
            this.value = value;
            this._target = target;
        }
        SetValueAction.prototype._prepare = function () {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath);
            this._property = this._getProperty(this.propertyPath);
        };
        SetValueAction.prototype.execute = function () {
            this._target[this._property] = this.value;
        };
        return SetValueAction;
    })(BABYLON.Action);
    BABYLON.SetValueAction = SetValueAction;
    var IncrementValueAction = (function (_super) {
        __extends(IncrementValueAction, _super);

        function IncrementValueAction(triggerOptions, target, propertyPath, value, condition) {
            _super.call(this, triggerOptions, condition);
            this.propertyPath = propertyPath;
            this.value = value;
            this._target = target;
        }
        IncrementValueAction.prototype._prepare = function () {
            this._target = this._getEffectiveTarget(this._target, this.propertyPath);
            this._property = this._getProperty(this.propertyPath);
            if (typeof this._target[this._property] !== "number") {
                BABYLON.Tools.Warn("Warning: IncrementValueAction can only be used with number values");
            }
        };
        IncrementValueAction.prototype.execute = function () {
            this._target[this._property] += this.value;
        };
        return IncrementValueAction;
    })(BABYLON.Action);
    BABYLON.IncrementValueAction = IncrementValueAction;
    var PlayAnimationAction = (function (_super) {
        __extends(PlayAnimationAction, _super);

        function PlayAnimationAction(triggerOptions, target, from, to, loop, condition) {
            _super.call(this, triggerOptions, condition);
            this.from = from;
            this.to = to;
            this.loop = loop;
            this._target = target;
        }
        PlayAnimationAction.prototype._prepare = function () {};
        PlayAnimationAction.prototype.execute = function () {
            var scene = this._actionManager.getScene();
            scene.beginAnimation(this._target, this.from, this.to, this.loop);
        };
        return PlayAnimationAction;
    })(BABYLON.Action);
    BABYLON.PlayAnimationAction = PlayAnimationAction;
    var StopAnimationAction = (function (_super) {
        __extends(StopAnimationAction, _super);

        function StopAnimationAction(triggerOptions, target, condition) {
            _super.call(this, triggerOptions, condition);
            this._target = target;
        }
        StopAnimationAction.prototype._prepare = function () {};
        StopAnimationAction.prototype.execute = function () {
            var scene = this._actionManager.getScene();
            scene.stopAnimation(this._target);
        };
        return StopAnimationAction;
    })(BABYLON.Action);
    BABYLON.StopAnimationAction = StopAnimationAction;
    var DoNothingAction = (function (_super) {
        __extends(DoNothingAction, _super);

        function DoNothingAction(triggerOptions, condition) {
            if (typeof triggerOptions === "undefined") {
                triggerOptions = BABYLON.ActionManager.NothingTrigger;
            }
            _super.call(this, triggerOptions, condition);
        }
        DoNothingAction.prototype.execute = function () {};
        return DoNothingAction;
    })(BABYLON.Action);
    BABYLON.DoNothingAction = DoNothingAction;
    var CombineAction = (function (_super) {
        __extends(CombineAction, _super);

        function CombineAction(triggerOptions, children, condition) {
            _super.call(this, triggerOptions, condition);
            this.children = children;
        }
        CombineAction.prototype._prepare = function () {
            for (var index = 0; index < this.children.length; index++) {
                this.children[index]._actionManager = this._actionManager;
                this.children[index]._prepare();
            }
        };
        CombineAction.prototype.execute = function (evt) {
            for (var index = 0; index < this.children.length; index++) {
                this.children[index].execute(evt);
            }
        };
        return CombineAction;
    })(BABYLON.Action);
    BABYLON.CombineAction = CombineAction;
    var ExecuteCodeAction = (function (_super) {
        __extends(ExecuteCodeAction, _super);

        function ExecuteCodeAction(triggerOptions, func, condition) {
            _super.call(this, triggerOptions, condition);
            this.func = func;
        }
        ExecuteCodeAction.prototype.execute = function (evt) {
            this.func(evt);
        };
        return ExecuteCodeAction;
    })(BABYLON.Action);
    BABYLON.ExecuteCodeAction = ExecuteCodeAction;
    var SetParentAction = (function (_super) {
        __extends(SetParentAction, _super);

        function SetParentAction(triggerOptions, target, parent, condition) {
            _super.call(this, triggerOptions, condition);
            this._target = target;
            this._parent = parent;
        }
        SetParentAction.prototype._prepare = function () {};
        SetParentAction.prototype.execute = function () {
            if (this._target.parent === this._parent) {
                return;
            }
            var invertParentWorldMatrix = this._parent.getWorldMatrix().clone();
            invertParentWorldMatrix.invert();
            this._target.position = BABYLON.Vector3.TransformCoordinates(this._target.position, invertParentWorldMatrix);
            this._target.parent = this._parent;
        };
        return SetParentAction;
    })(BABYLON.Action);
    BABYLON.SetParentAction = SetParentAction;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Geometry = (function () {
        function Geometry(id, scene, vertexData, updatable, mesh) {
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NONE;
            this._totalVertices = 0;
            this._indices = [];
            this.id = id;
            this._engine = scene.getEngine();
            this._meshes = [];
            this._scene = scene;
            if (vertexData) {
                this.setAllVerticesData(vertexData, updatable);
            } else {
                this._totalVertices = 0;
                this._indices = [];
            }
            if (mesh) {
                this.applyToMesh(mesh);
            }
        }
        Geometry.prototype.getScene = function () {
            return this._scene;
        };
        Geometry.prototype.getEngine = function () {
            return this._engine;
        };
        Geometry.prototype.isReady = function () {
            return this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADED || this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_NONE;
        };
        Geometry.prototype.setAllVerticesData = function (vertexData, updatable) {
            vertexData.applyToGeometry(this, updatable);
        };
        Geometry.prototype.setVerticesData = function (kind, data, updatable) {
            this._vertexBuffers = this._vertexBuffers || {};
            if (this._vertexBuffers[kind]) {
                this._vertexBuffers[kind].dispose();
            }
            this._vertexBuffers[kind] = new BABYLON.VertexBuffer(this._engine, data, kind, updatable, this._meshes.length === 0);
            if (kind === BABYLON.VertexBuffer.PositionKind) {
                var stride = this._vertexBuffers[kind].getStrideSize();
                this._totalVertices = data.length / stride;
                var extend = BABYLON.Tools.ExtractMinAndMax(data, 0, this._totalVertices);
                var meshes = this._meshes;
                var numOfMeshes = meshes.length;
                for (var index = 0; index < numOfMeshes; index++) {
                    var mesh = meshes[index];
                    mesh._resetPointsArrayCache();
                    mesh._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
                    mesh._createGlobalSubMesh();
                    mesh.computeWorldMatrix(true);
                }
            }
        };
        Geometry.prototype.updateVerticesData = function (kind, data, updateExtends) {
            var vertexBuffer = this.getVertexBuffer(kind);
            if (!vertexBuffer) {
                return;
            }
            vertexBuffer.update(data);
            if (kind === BABYLON.VertexBuffer.PositionKind) {
                var extend;
                if (updateExtends) {
                    var stride = vertexBuffer.getStrideSize();
                    this._totalVertices = data.length / stride;
                    extend = BABYLON.Tools.ExtractMinAndMax(data, 0, this._totalVertices);
                }
                var meshes = this._meshes;
                var numOfMeshes = meshes.length;
                for (var index = 0; index < numOfMeshes; index++) {
                    var mesh = meshes[index];
                    mesh._resetPointsArrayCache();
                    if (updateExtends) {
                        mesh._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
                    }
                }
            }
        };
        Geometry.prototype.getTotalVertices = function () {
            if (!this.isReady()) {
                return 0;
            }
            return this._totalVertices;
        };
        Geometry.prototype.getVerticesData = function (kind) {
            var vertexBuffer = this.getVertexBuffer(kind);
            if (!vertexBuffer) {
                return null;
            }
            return vertexBuffer.getData();
        };
        Geometry.prototype.getVertexBuffer = function (kind) {
            if (!this.isReady()) {
                return null;
            }
            return this._vertexBuffers[kind];
        };
        Geometry.prototype.getVertexBuffers = function () {
            if (!this.isReady()) {
                return null;
            }
            return this._vertexBuffers;
        };
        Geometry.prototype.isVerticesDataPresent = function (kind) {
            if (!this._vertexBuffers) {
                if (this._delayInfo) {
                    return this._delayInfo.indexOf(kind) !== -1;
                }
                return false;
            }
            return this._vertexBuffers[kind] !== undefined;
        };
        Geometry.prototype.getVerticesDataKinds = function () {
            var result = [];
            if (!this._vertexBuffers && this._delayInfo) {
                for (var kind in this._delayInfo) {
                    result.push(kind);
                }
            } else {
                for (kind in this._vertexBuffers) {
                    result.push(kind);
                }
            }
            return result;
        };
        Geometry.prototype.setIndices = function (indices) {
            if (this._indexBuffer) {
                this._engine._releaseBuffer(this._indexBuffer);
            }
            this._indices = indices;
            if (this._meshes.length !== 0 && this._indices) {
                this._indexBuffer = this._engine.createIndexBuffer(this._indices);
            }
            var meshes = this._meshes;
            var numOfMeshes = meshes.length;
            for (var index = 0; index < numOfMeshes; index++) {
                meshes[index]._createGlobalSubMesh();
            }
        };
        Geometry.prototype.getTotalIndices = function () {
            if (!this.isReady()) {
                return 0;
            }
            return this._indices.length;
        };
        Geometry.prototype.getIndices = function () {
            if (!this.isReady()) {
                return null;
            }
            return this._indices;
        };
        Geometry.prototype.getIndexBuffer = function () {
            if (!this.isReady()) {
                return null;
            }
            return this._indexBuffer;
        };
        Geometry.prototype.releaseForMesh = function (mesh, shouldDispose) {
            var meshes = this._meshes;
            var index = meshes.indexOf(mesh);
            if (index === -1) {
                return;
            }
            for (var kind in this._vertexBuffers) {
                this._vertexBuffers[kind].dispose();
            }
            if (this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer)) {
                this._indexBuffer = null;
            }
            meshes.splice(index, 1);
            mesh._geometry = null;
            if (meshes.length == 0 && shouldDispose) {
                this.dispose();
            }
        };
        Geometry.prototype.applyToMesh = function (mesh) {
            if (mesh._geometry === this) {
                return;
            }
            var previousGeometry = mesh._geometry;
            if (previousGeometry) {
                previousGeometry.releaseForMesh(mesh);
            }
            var meshes = this._meshes;
            mesh._geometry = this;
            this._scene.pushGeometry(this);
            meshes.push(mesh);
            if (this.isReady()) {
                this._applyToMesh(mesh);
            } else {
                mesh._boundingInfo = this._boundingInfo;
            }
        };
        Geometry.prototype._applyToMesh = function (mesh) {
            var numOfMeshes = this._meshes.length;
            for (var kind in this._vertexBuffers) {
                if (numOfMeshes === 1) {
                    this._vertexBuffers[kind].create();
                }
                this._vertexBuffers[kind]._buffer.references = numOfMeshes;
                if (kind === BABYLON.VertexBuffer.PositionKind) {
                    mesh._resetPointsArrayCache();
                    var extend = BABYLON.Tools.ExtractMinAndMax(this._vertexBuffers[kind].getData(), 0, this._totalVertices);
                    mesh._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
                    mesh._createGlobalSubMesh();
                }
            }
            if (numOfMeshes === 1 && this._indices) {
                this._indexBuffer = this._engine.createIndexBuffer(this._indices);
            }
            if (this._indexBuffer) {
                this._indexBuffer.references = numOfMeshes;
            }
        };
        Geometry.prototype.load = function (scene, onLoaded) {
            var _this = this;
            if (this.delayLoadState === BABYLON.Engine.DELAYLOADSTATE_LOADING) {
                return;
            }
            if (this.isReady()) {
                if (onLoaded) {
                    onLoaded();
                }
                return;
            }
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADING;
            scene._addPendingData(this);
            BABYLON.Tools.LoadFile(this.delayLoadingFile, function (data) {
                _this._delayLoadingFunction(JSON.parse(data), _this);
                _this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_LOADED;
                _this._delayInfo = [];
                scene._removePendingData(_this);
                var meshes = _this._meshes;
                var numOfMeshes = meshes.length;
                for (var index = 0; index < numOfMeshes; index++) {
                    _this._applyToMesh(meshes[index]);
                }
                if (onLoaded) {
                    onLoaded();
                }
            }, function () {}, scene.database);
        };
        Geometry.prototype.dispose = function () {
            var meshes = this._meshes;
            var numOfMeshes = meshes.length;
            for (var index = 0; index < numOfMeshes; index++) {
                this.releaseForMesh(meshes[index]);
            }
            this._meshes = [];
            for (var kind in this._vertexBuffers) {
                this._vertexBuffers[kind].dispose();
            }
            this._vertexBuffers = [];
            this._totalVertices = 0;
            if (this._indexBuffer) {
                this._engine._releaseBuffer(this._indexBuffer);
            }
            this._indexBuffer = null;
            this._indices = [];
            this.delayLoadState = BABYLON.Engine.DELAYLOADSTATE_NONE;
            this.delayLoadingFile = null;
            this._delayLoadingFunction = null;
            this._delayInfo = [];
            this._boundingInfo = null;
            var geometries = this._scene.getGeometries();
            index = geometries.indexOf(this);
            if (index > -1) {
                geometries.splice(index, 1);
            }
        };
        Geometry.prototype.copy = function (id) {
            var vertexData = new BABYLON.VertexData();
            vertexData.indices = [];
            var indices = this.getIndices();
            for (var index = 0; index < indices.length; index++) {
                vertexData.indices.push(indices[index]);
            }
            var updatable = false;
            var stopChecking = false;
            for (var kind in this._vertexBuffers) {
                vertexData.set(this.getVerticesData(kind), kind);
                if (!stopChecking) {
                    updatable = this.getVertexBuffer(kind).isUpdatable();
                    stopChecking = !updatable;
                }
            }
            var geometry = new BABYLON.Geometry(id, this._scene, vertexData, updatable, null);
            geometry.delayLoadState = this.delayLoadState;
            geometry.delayLoadingFile = this.delayLoadingFile;
            geometry._delayLoadingFunction = this._delayLoadingFunction;
            for (kind in this._delayInfo) {
                geometry._delayInfo = geometry._delayInfo || [];
                geometry._delayInfo.push(kind);
            }
            var extend = BABYLON.Tools.ExtractMinAndMax(this.getVerticesData(BABYLON.VertexBuffer.PositionKind), 0, this.getTotalVertices());
            geometry._boundingInfo = new BABYLON.BoundingInfo(extend.minimum, extend.maximum);
            return geometry;
        };
        Geometry.ExtractFromMesh = function (mesh, id) {
            var geometry = mesh._geometry;
            if (!geometry) {
                return null;
            }
            return geometry.copy(id);
        };
        Geometry.RandomId = function () {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        return Geometry;
    })();
    BABYLON.Geometry = Geometry;
    (function (Geometry) {
        (function (Primitives) {
            var _Primitive = (function (_super) {
                __extends(_Primitive, _super);

                function _Primitive(id, scene, vertexData, canBeRegenerated, mesh) {
                    this._beingRegenerated = true;
                    this._canBeRegenerated = canBeRegenerated;
                    _super.call(this, id, scene, vertexData, false, mesh);
                    this._beingRegenerated = false;
                }
                _Primitive.prototype.canBeRegenerated = function () {
                    return this._canBeRegenerated;
                };
                _Primitive.prototype.regenerate = function () {
                    if (!this._canBeRegenerated) {
                        return;
                    }
                    this._beingRegenerated = true;
                    this.setAllVerticesData(this._regenerateVertexData(), false);
                    this._beingRegenerated = false;
                };
                _Primitive.prototype.asNewGeometry = function (id) {
                    return _super.prototype.copy.call(this, id);
                };
                _Primitive.prototype.setAllVerticesData = function (vertexData, updatable) {
                    if (!this._beingRegenerated) {
                        return;
                    }
                    _super.prototype.setAllVerticesData.call(this, vertexData, false);
                };
                _Primitive.prototype.setVerticesData = function (kind, data, updatable) {
                    if (!this._beingRegenerated) {
                        return;
                    }
                    _super.prototype.setVerticesData.call(this, kind, data, false);
                };
                _Primitive.prototype._regenerateVertexData = function () {
                    throw new Error("Abstract method");
                };
                _Primitive.prototype.copy = function (id) {
                    throw new Error("Must be overriden in sub-classes.");
                };
                return _Primitive;
            })(Geometry);
            Primitives._Primitive = _Primitive;
            var Box = (function (_super) {
                __extends(Box, _super);

                function Box(id, scene, size, canBeRegenerated, mesh) {
                    this.size = size;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Box.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateBox(this.size);
                };
                Box.prototype.copy = function (id) {
                    return new Box(id, this.getScene(), this.size, this.canBeRegenerated(), null);
                };
                return Box;
            })(_Primitive);
            Primitives.Box = Box;
            var Sphere = (function (_super) {
                __extends(Sphere, _super);

                function Sphere(id, scene, segments, diameter, canBeRegenerated, mesh) {
                    this.segments = segments;
                    this.diameter = diameter;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Sphere.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateSphere(this.segments, this.diameter);
                };
                Sphere.prototype.copy = function (id) {
                    return new Sphere(id, this.getScene(), this.segments, this.diameter, this.canBeRegenerated(), null);
                };
                return Sphere;
            })(_Primitive);
            Primitives.Sphere = Sphere;
            var Cylinder = (function (_super) {
                __extends(Cylinder, _super);

                function Cylinder(id, scene, height, diameterTop, diameterBottom, tessellation, subdivisions, canBeRegenerated, mesh) {
                    if (typeof subdivisions === "undefined") {
                        subdivisions = 1;
                    }
                    this.height = height;
                    this.diameterTop = diameterTop;
                    this.diameterBottom = diameterBottom;
                    this.tessellation = tessellation;
                    this.subdivisions = subdivisions;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Cylinder.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateCylinder(this.height, this.diameterTop, this.diameterBottom, this.tessellation, this.subdivisions);
                };
                Cylinder.prototype.copy = function (id) {
                    return new Cylinder(id, this.getScene(), this.height, this.diameterTop, this.diameterBottom, this.tessellation, this.subdivisions, this.canBeRegenerated(), null);
                };
                return Cylinder;
            })(_Primitive);
            Primitives.Cylinder = Cylinder;
            var Torus = (function (_super) {
                __extends(Torus, _super);

                function Torus(id, scene, diameter, thickness, tessellation, canBeRegenerated, mesh) {
                    this.diameter = diameter;
                    this.thickness = thickness;
                    this.tessellation = tessellation;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Torus.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateTorus(this.diameter, this.thickness, this.tessellation);
                };
                Torus.prototype.copy = function (id) {
                    return new Torus(id, this.getScene(), this.diameter, this.thickness, this.tessellation, this.canBeRegenerated(), null);
                };
                return Torus;
            })(_Primitive);
            Primitives.Torus = Torus;
            var Ground = (function (_super) {
                __extends(Ground, _super);

                function Ground(id, scene, width, height, subdivisions, canBeRegenerated, mesh) {
                    this.width = width;
                    this.height = height;
                    this.subdivisions = subdivisions;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Ground.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateGround(this.width, this.height, this.subdivisions);
                };
                Ground.prototype.copy = function (id) {
                    return new Ground(id, this.getScene(), this.width, this.height, this.subdivisions, this.canBeRegenerated(), null);
                };
                return Ground;
            })(_Primitive);
            Primitives.Ground = Ground;
            var TiledGround = (function (_super) {
                __extends(TiledGround, _super);

                function TiledGround(id, scene, xmin, zmin, xmax, zmax, subdivisions, precision, canBeRegenerated, mesh) {
                    this.xmin = xmin;
                    this.zmin = zmin;
                    this.xmax = xmax;
                    this.zmax = zmax;
                    this.subdivisions = subdivisions;
                    this.precision = precision;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                TiledGround.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateTiledGround(this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision);
                };
                TiledGround.prototype.copy = function (id) {
                    return new TiledGround(id, this.getScene(), this.xmin, this.zmin, this.xmax, this.zmax, this.subdivisions, this.precision, this.canBeRegenerated(), null);
                };
                return TiledGround;
            })(_Primitive);
            Primitives.TiledGround = TiledGround;
            var Plane = (function (_super) {
                __extends(Plane, _super);

                function Plane(id, scene, size, canBeRegenerated, mesh) {
                    this.size = size;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                Plane.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreatePlane(this.size);
                };
                Plane.prototype.copy = function (id) {
                    return new Plane(id, this.getScene(), this.size, this.canBeRegenerated(), null);
                };
                return Plane;
            })(_Primitive);
            Primitives.Plane = Plane;
            var TorusKnot = (function (_super) {
                __extends(TorusKnot, _super);

                function TorusKnot(id, scene, radius, tube, radialSegments, tubularSegments, p, q, canBeRegenerated, mesh) {
                    this.radius = radius;
                    this.tube = tube;
                    this.radialSegments = radialSegments;
                    this.tubularSegments = tubularSegments;
                    this.p = p;
                    this.q = q;
                    _super.call(this, id, scene, this._regenerateVertexData(), canBeRegenerated, mesh);
                }
                TorusKnot.prototype._regenerateVertexData = function () {
                    return BABYLON.VertexData.CreateTorusKnot(this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q);
                };
                TorusKnot.prototype.copy = function (id) {
                    return new TorusKnot(id, this.getScene(), this.radius, this.tube, this.radialSegments, this.tubularSegments, this.p, this.q, this.canBeRegenerated(), null);
                };
                return TorusKnot;
            })(_Primitive);
            Primitives.TorusKnot = TorusKnot;
        })(Geometry.Primitives || (Geometry.Primitives = {}));
        var Primitives = Geometry.Primitives;
    })(BABYLON.Geometry || (BABYLON.Geometry = {}));
    var Geometry = BABYLON.Geometry;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var Gamepads = (function () {
        function Gamepads(ongamedpadconnected) {
            var _this = this;
            this.babylonGamepads = [];
            this.oneGamepadConnected = false;
            this.isMonitoring = false;
            this.gamepadEventSupported = 'GamepadEvent' in window;
            this.gamepadSupportAvailable = (navigator.getGamepads || !! navigator.webkitGetGamepads || !! navigator.msGetGamepads || !! navigator.webkitGamepads);
            this.buttonADataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAA9aSURBVHja7FtpbBzneX7m3otcihSpm9Z9UJalxPKhVLZlp6ktNzEaxE0CtAnQAgnSoPWPBi3syuiPwordFi5Qt2haFygCoylSV4Vby6os1I3kOLYrS65kXXQoypJJSaFEUTyXy925+rzfzC6HFFlL1kpAIe7i5czO7H7zPs97ft8MtTAMcSu/dNzirxkCZgiYIWCGgBkCZgi4hV/mDR5fSxAt+0ZiX0ucDxMSTJLK+f83BFSA6TFgK75OclshouKBFbA+xaV4k7Z+fD6sNRlmjYFXQMu4NiUVS/oHe5/ecnHo3MYxd7QthN9UcsdW6FqEPwgDOFbqpAajL2VlTrTULzj4Ow8+s4+nipSxWMoxIUkyrl/pGswFtIR7WzHgDCX77K7vfHNkbOA+AryjYZadb27OIJdzCNZBKmXw4kbk35qPsTEfJbeEkZESentHMdBfGtY142gu1bDvqV/925f4tQJlNCaj4hXX7RHXS0AFuJEAXvfHr/zmk67vPjir0V68aFEe8xtuQ6O1FHlrEXLmHBiaDUtzYBlpNYjrF+GFZfhhCcPeBQy53ehzT+H8QBe6uwfRf7l8xjKsvX/y5X98jl8fThDhJ4i46QQkrS5I6v7oX7/++77vPtLUlFnZtnIRlubvxRxnHbJmE79sxD/SqG0oZk8MFarRqufUkQAFrxcXSkfx0eB+nOggKX2jHYZhvf79r/z4L2IiipO84aYRkASfefnAX695p3P3c9mM/UufuaMVdzRvxVx7A0xaWdOMqVULJ6Z3TZv6KmHo0ztK6CkfxpHe3Th0pAuF0fLbn1u+9cmv3vW77bE3fGoSPi0BVfAvvPEHm9rPv//iooWz5m9Z/wCWZx+Go9UrN48QTD9IGMZ1cJIzTPisRQclPMrhME4W9mDfB2+i+2z/+TXz7/z2E7/85+9OIuGGE6BV3H77zm/d33nx6Ktr18zFg2t+DQude2n1tLJ8tcJ90vDhpG5Am7qTkJAQErywiLOld7G3/d9xvL0Hy1vWPbbtS3//00Q4hDeaAFXintrx1fu7+jp2r13bgofX/gaazbVkJQdLT9P6VqRFDSu2hIgXlBUBLgtCr3cce47/CMePX0Rr08qtzz7+8k8TpfKGtcKq1jPZre7oObyjdWkGd628l7AXwvMCeL7HjO6qrS8S1E5kTE9tfbiur665ccU9EB1EF9Ep0WXesEZIJb9j5/b/XUtzNrt29Rw0og2lchmBVqLo8LSAHlCixbTpddGm8Y7pjkttCCUP+JQy3FiatNuxdvUx9F4ayopO/OL9sQeEN4oA/eHn577oWPbGVes11PsrUBxjDafze1Te1VzouqnK2TgmLQljQqmrnAsT+iaPVb5b2co7EC+QhBgUeM1R1AcrsGp9Jy6+4W8U3fZ8r+e3EnOI2uaAX3l+zgNB4O9rW5/B8tY5WGo9BtOrJ4uMfUl+uj0B8HTmPXj8Pex86xVEnTDBBSE2r78fX9i09RPyZfT2A5ceIMSPwDOH8JH7Kk5+fAHtR0Zh6MZ9e7534Wc3wgO0sXLhD9OpFOa0egjGMhguD8BgTJooMfPbV1h/umz25ondcFP90IzY2iTgrfY9uH31aqSc9CeSEHkBEyITv28M8XMGc2/z0HGCpWCs8BS/9sWrDYOrJuCBZ+vu5sUfXbicia5kYGzUw4DWTwJKbApSjHuTBBjT2H68zg0MD4KlEwabZi0Y7wd85u/3O9/B6sVrPlEXeiF9nMmRxPt6Qf4y/HyIbh3HwkdF1zefGt5fUwK8wP2WAGwh02MFE/5ogYr3Qg/STL0W3d8aB1ppa+Pw0uI2Tz6/134Mg+UoIGZlZ2HMLaJYHkPICr6//RBamvPj/UA4dYKsegGrXqAXMaqNsDT6SreOY5Gu/FptCeBFN+caAphGiKFiGaOjA3AJHoGt6r7GgNbjqjo5yQkBUVHQ8PaJExjiaZ2yue12nO27gCNdHSptvf/xGdw11I2UZSmvCIJgQiJMhoEfeqpNDvUSRvUB5hMX9fUecg0aBi+Hm2uaAz633bmbm1VN8+h07LfKJdkOkQB2fL4BTlsj8No4YLG2putMSjwjp3QNvZdH8YsiExV501isFjU30lpF7D8dVfCA8sFHp7BuWYtaIwiCsCrCSDVhh9IX8k0CoHsoMQ84FrfFAE3zQAK0VaLzO9tK79XKAxSj+aYALt3XLfNipZD1v492YexrE/sP0zBgUIQIoYaflAXbz16CzyY6YKqYl8uheTarRioD7xAxCQHUpv18L1Yud+Iloujtk4zQo9WZcKURqjbHclzKvj0Gvcw8UA6oY2WqonSuGQGb5I+TJgEFEsB4daXzc0eopabcX13W0BXwgAnRZL4Q62s8ppnR/pFz/QjF+tRvxeIsY/cizGwRt83P4czACL8HdA1JUivCNGVogvdkNkgaGDNe4CvXFyJ8n+B5XGLJ1FmJXJ53AzjZKgGbatkKL5c/liNWIPO8uM/4VO2uKCQZjLmBqQAGJ4EmI8NMabDTOuyUobYXmPlCEpiqA1IkYdWSBpjpEDl6wsrF9aAjqHNOPXDyXAGprAknY5B0btOGGk/GlfE1taqofCNuuYNIJ+omOiZ1rpUHtEYWjkpWoP5EWV2sb5isA7aIQTHHxaIniNADui8PIs0Eb6SY/Z0UQc+j+mXYuoM7Vy/Age7zkBUyCZGLhRLSOYcWpfXFA1wPhqup8JNKq5UkKeoqSHxPLSoqnUQtw5ioc60IyE/VkOji8mYE2nZELNgCXLaOkGDFJBg4OzCMDEcxCfAzS1pQX5fHSNDLClLGwmwzls6vQ09hGFJYegdZ1hha2bqIBNelB5Qjog02TzpFNVEquYpMuTSYr/lcQPKPJHoRQ8W1GYO3lDgpO9pPWTEZEQGnuodg5Hyk66Lyd8fKOQQ6gqyWict7GeuWz8HQyWEFw+bB7ksF3Nk2V1nfpZTLQqSLslzXlDmHpsQ1osVoy/Solwf/GpdErpaAQUqjWxL2GWcWaSfAMIis7RBwiuCdtD1OgmNHBJCg7r4uZBnbdjaaq+3YewB+USYicY8juYPnMtloqdCjG3f39eO+3JKIAFadSiiZigBdgdcqItMxsmZbIbvUIKlzzQjoEgLGRjU2KTp8AjRCkzEnAG0mtQh8Ku0oAqok8JzP+Lw0MkB3jpKjKpapaL5WKZxafDdBqoC6O8LtyMAQhoZdzG7MwLU8FUYKPINcl+qimismRj26v2I71I3jDxfdpM41I6CTsmG4X0djKyc8RYu9t0Vl2QJbBJ5xFPiICJIg1hdhR3fs5HnWeldleZXABLA98b7Y5HtjkgwNEtbTN4iFC5oI3I1CTsAbsfVjAizJB3Qbx9HphRp6eqr3TDprSYA0FI/3ntOxbpUNM2OjpEcE6HYEWkhIKw+ICeBxi+T09F1WZU+iJq2n8fRDf4Ymu3XSrcOIgg8H9uOFn31fNUVC0oddZ7B5YxtDwlTgo66SEici2fokwCJjju0hw7J54WypQsB7tSRAza+H+nld30Y+m2b7SS+Qn9PKFl1egRciHIfWpxC8x+7tdA97+3zUcNyWX4Ci/THOoD2x/hmlQTox+3gDjWYeg/4gmF853xjBpUsjaGnJR24fu36FNzX5pmfY7EPStlSLIgb6gwk616QRYk8tS88/l/2PT/loyqbQkEmhPpNGNp1CmvtieQHvONGtL4sdy9Hjp5kkpTWmSzM7L529hErHs0cCpt2qW00BymDV3JXSU8HkAXKIjtNnedxS48m4Mr5cR9YlMrx+XTqNRmbP2ZkMOjvHKir/PNa5pouiitFjH44iZ6YwO5tFAy+eo6SdpOUJyhBQTJR+HT9HYLJaFve0PqQmTQLaVOCdmIRIWE+wrmWTzG8iAugF7qgWjSWkGbYa32EjJQTkGFv5dBZNJKCeHdb77UPXZP1rWhKLZ4Rqjv2Fz86lLMNlpusCY9BnqTNUIyTgrVhhs7rVq2KoW2TSxWlXLOCqWX4svmpzZdEjWvgQcdVWPnu+i4ClUS+HyLIFnsVf/9eBduw8eKYy2D1XMxO8Jg+IB9wl+3s/uAC3qKMpXY88m/ecnUHaSis3Na8Ab1UtaCh3j1y+sm8m9o0J+9Fv9MR4Zhw6DufTWasOebsOs+xZKHJOtvtQtertulrwV+0BtH5yWvyW7CxubsCTX9+KUQZ4ga7qmdGUFmrya8QWHwcxlReMF8Mw4QETrR8oy7tq2ivH5Tvya8n8aXZMGc4An/nRDpy52FfR8b5KCJCImt8YkYF/KDtnegfwz3sPodGajQajCTk9z/4mQ6iphMWv9AA9IeMWdyYdn+gBkVc5amwHWV6lHvVaI2YZzfinN95Ngv/htcT/p31CRNbdV8l8e++xD5HPNeHxhx5Bgf18kTN5T1kvjBfEjGjBJCai4gnjHqAnlvqS8e9NeujEjEul/NokDbai4V/2voafHD1S0evdWLeb8ojMNyly5fS//ffbcD0L33j4K4RX4rtMh/UUGLXmr6BWXN9MEFAhYfzmZ6hcXI+TpISRH8061Ui68gTWGUJP4aU9P8ZrB39S+Xkx1ummPSMkbebnJcxU1jm4D5eGhvB7j32HJcpUJHhxLIfxTZpxwGa8eKrHC51a9Tmp+N5P1RsQ01cJAwEflHw8/+pfYn/HgaQ+n7/a1vd6k+BUS2XvVD401TXhu488gQ0r71QUuLJsrWT8mSYtfkBMm0BAmFhNrgDX4oRqqeaJMw4c6TyIv/qPP0Xf8KUJ6sXuP1XluuEEyGsD5TXKgsqBNQvW4RtbnkDb4ttJQlGt/IQqLMJE7tWqOSBZCSrL6dFSqq3AnzhzDC/tewHt5w4nr3suvgN0+P8o3TeegFe3vYDHtj+xhLt/Q3kkeW5d693YuuHXsWHZPcixW4tCwo+trVU9QEs8G6HFqW5kdBiHTu3H64dfxpGuK8r665Tv7tz2D6e/tP23cT0E1OA5QR2iiIbs1i9u/9qTPPC12CtwlIofjZVvW/BZ3LVsC5bPW4u5DQuxaPay2NpRIuy61IkLA+dw8hdHceDUPpw49z9TXUysvWPXtl3bQ4yQtMJ1a18DAsbvRO/atvM5DXXPPbp9yzP8+GXBXTkngKYBdTWvE5RXdm87+HQEfLh2T57UIAdM95Js9+04LKSDbLzG31+Omxpx9xfxKR6AukkhMP0aKuUHsag5VEzE3fGSddsUVu6KFzIE+H/iJry0mX+bu8VfMwTMEDBDwAwBMwTMEHALv/5XgAEASpR5N6rB30UAAAAASUVORK5CYII=";
            this._callbackGamepadConnected = ongamedpadconnected;
            if (this.gamepadSupportAvailable) {
                if (this.gamepadEventSupported) {
                    window.addEventListener('gamepadconnected', function (evt) {
                        _this._onGamepadConnected(evt);
                    }, false);
                    window.addEventListener('gamepaddisconnected', function (evt) {
                        _this._onGamepadDisconnected(evt);
                    }, false);
                } else {
                    this._startMonitoringGamepads();
                }
                if (!this.oneGamepadConnected) {
                    this._insertGamepadDOMInstructions();
                }
            } else {
                this._insertGamepadDOMNotSupported();
            }
        }
        Gamepads.prototype._insertGamepadDOMInstructions = function () {
            Gamepads.gamepadDOMInfo = document.createElement("div");
            var buttonAImage = document.createElement("img");
            buttonAImage.src = this.buttonADataURL;
            var spanMessage = document.createElement("span");
            spanMessage.innerHTML = "<strong>to activate gamepad</strong>";
            Gamepads.gamepadDOMInfo.appendChild(buttonAImage);
            Gamepads.gamepadDOMInfo.appendChild(spanMessage);
            Gamepads.gamepadDOMInfo.style.position = "absolute";
            Gamepads.gamepadDOMInfo.style.width = "100%";
            Gamepads.gamepadDOMInfo.style.height = "48px";
            Gamepads.gamepadDOMInfo.style.bottom = "0px";
            Gamepads.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)";
            Gamepads.gamepadDOMInfo.style.textAlign = "center";
            Gamepads.gamepadDOMInfo.style.zIndex = "10";
            buttonAImage.style.position = "relative";
            buttonAImage.style.bottom = "8px";
            spanMessage.style.position = "relative";
            spanMessage.style.fontSize = "32px";
            spanMessage.style.bottom = "32px";
            spanMessage.style.color = "green";
            document.body.appendChild(Gamepads.gamepadDOMInfo);
        };
        Gamepads.prototype._insertGamepadDOMNotSupported = function () {
            Gamepads.gamepadDOMInfo = document.createElement("div");
            var spanMessage = document.createElement("span");
            spanMessage.innerHTML = "<strong>gamepad not supported</strong>";
            Gamepads.gamepadDOMInfo.appendChild(spanMessage);
            Gamepads.gamepadDOMInfo.style.position = "absolute";
            Gamepads.gamepadDOMInfo.style.width = "100%";
            Gamepads.gamepadDOMInfo.style.height = "40px";
            Gamepads.gamepadDOMInfo.style.bottom = "0px";
            Gamepads.gamepadDOMInfo.style.backgroundColor = "rgba(1, 1, 1, 0.15)";
            Gamepads.gamepadDOMInfo.style.textAlign = "center";
            Gamepads.gamepadDOMInfo.style.zIndex = "10";
            spanMessage.style.position = "relative";
            spanMessage.style.fontSize = "32px";
            spanMessage.style.color = "red";
            document.body.appendChild(Gamepads.gamepadDOMInfo);
        };
        Gamepads.prototype.dispose = function () {
            document.body.removeChild(Gamepads.gamepadDOMInfo);
        };
        Gamepads.prototype._onGamepadConnected = function (evt) {
            var newGamepad = this._addNewGamepad(evt.gamepad);
            if (this._callbackGamepadConnected) this._callbackGamepadConnected(newGamepad);
            this._startMonitoringGamepads();
        };
        Gamepads.prototype._addNewGamepad = function (gamepad) {
            if (!this.oneGamepadConnected) {
                this.oneGamepadConnected = true;
                if (Gamepads.gamepadDOMInfo) {
                    document.body.removeChild(Gamepads.gamepadDOMInfo);
                    Gamepads.gamepadDOMInfo = null;
                }
            }
            var newGamepad;
            if (gamepad.id.search("Xbox 360") !== -1 || gamepad.id.search("xinput") !== -1) {
                newGamepad = new BABYLON.Xbox360Pad(gamepad.id, gamepad.index, gamepad);
            } else {
                newGamepad = new BABYLON.GenericPad(gamepad.id, gamepad.index, gamepad);
            }
            this.babylonGamepads.push(newGamepad);
            return newGamepad;
        };
        Gamepads.prototype._onGamepadDisconnected = function (evt) {
            for (var i in this.babylonGamepads) {
                if (this.babylonGamepads[i].index == evt.gamepad.index) {
                    this.babylonGamepads.splice(i, 1);
                    break;
                }
            }
            if (this.babylonGamepads.length == 0) {
                this._stopMonitoringGamepads();
            }
        };
        Gamepads.prototype._startMonitoringGamepads = function () {
            if (!this.isMonitoring) {
                this.isMonitoring = true;
                this._checkGamepadsStatus();
            }
        };
        Gamepads.prototype._stopMonitoringGamepads = function () {
            this.isMonitoring = false;
        };
        Gamepads.prototype._checkGamepadsStatus = function () {
            var _this = this;
            this._updateGamepadObjects();
            for (var i in this.babylonGamepads) {
                this.babylonGamepads[i].update();
            }
            if (this.isMonitoring) {
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(function () {
                        _this._checkGamepadsStatus();
                    });
                } else if (window.mozRequestAnimationFrame) {
                    window.mozRequestAnimationFrame(function () {
                        _this._checkGamepadsStatus();
                    });
                } else if (window.webkitRequestAnimationFrame) {
                    window.webkitRequestAnimationFrame(function () {
                        _this._checkGamepadsStatus();
                    });
                }
            }
        };
        Gamepads.prototype._updateGamepadObjects = function () {
            var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
            for (var i = 0; i < gamepads.length; i++) {
                if (gamepads[i]) {
                    if (!(gamepads[i].index in this.babylonGamepads)) {
                        var newGamepad = this._addNewGamepad(gamepads[i]);
                        if (this._callbackGamepadConnected) {
                            this._callbackGamepadConnected(newGamepad);
                        }
                    } else {
                        this.babylonGamepads[i].browserGamepad = gamepads[i];
                    }
                }
            }
        };
        return Gamepads;
    })();
    BABYLON.Gamepads = Gamepads;
    var StickValues = (function () {
        function StickValues(x, y) {
            this.x = x;
            this.y = y;
        }
        return StickValues;
    })();
    BABYLON.StickValues = StickValues;
    var Gamepad = (function () {
        function Gamepad(id, index, browserGamepad) {
            this.id = id;
            this.index = index;
            this.browserGamepad = browserGamepad;
            if (this.browserGamepad.axes.length >= 2) {
                this._leftStick = {
                    x: this.browserGamepad.axes[0],
                    y: this.browserGamepad.axes[1]
                };
            }
            if (this.browserGamepad.axes.length >= 4) {
                this._rightStick = {
                    x: this.browserGamepad.axes[2],
                    y: this.browserGamepad.axes[3]
                };
            }
        }
        Gamepad.prototype.onleftstickchanged = function (callback) {
            this._onleftstickchanged = callback;
        };
        Gamepad.prototype.onrightstickchanged = function (callback) {
            this._onrightstickchanged = callback;
        };
        Object.defineProperty(Gamepad.prototype, "leftStick", {
            get: function () {
                return this._leftStick;
            },
            set: function (newValues) {
                if (this._onleftstickchanged && (this._leftStick.x !== newValues.x || this._leftStick.y !== newValues.y)) {
                    this._onleftstickchanged(newValues);
                }
                this._leftStick = newValues;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Gamepad.prototype, "rightStick", {
            get: function () {
                return this._rightStick;
            },
            set: function (newValues) {
                if (this._onrightstickchanged && (this._rightStick.x !== newValues.x || this._rightStick.y !== newValues.y)) {
                    this._onrightstickchanged(newValues);
                }
                this._rightStick = newValues;
            },
            enumerable: true,
            configurable: true
        });
        Gamepad.prototype.update = function () {
            if (this._leftStick) {
                this.leftStick = {
                    x: this.browserGamepad.axes[0],
                    y: this.browserGamepad.axes[1]
                };
            }
            if (this._rightStick) {
                this.rightStick = {
                    x: this.browserGamepad.axes[2],
                    y: this.browserGamepad.axes[3]
                };
            }
        };
        return Gamepad;
    })();
    BABYLON.Gamepad = Gamepad;
    var GenericPad = (function (_super) {
        __extends(GenericPad, _super);

        function GenericPad(id, index, gamepad) {
            _super.call(this, id, index, gamepad);
            this.id = id;
            this.index = index;
            this.gamepad = gamepad;
            this._buttons = new Array(gamepad.buttons.length);
        }
        GenericPad.prototype.onbuttondown = function (callback) {
            this._onbuttondown = callback;
        };
        GenericPad.prototype.onbuttonup = function (callback) {
            this._onbuttonup = callback;
        };
        GenericPad.prototype._setButtonValue = function (newValue, currentValue, buttonIndex) {
            if (newValue !== currentValue) {
                if (this._onbuttondown && newValue === 1) {
                    this._onbuttondown(buttonIndex);
                }
                if (this._onbuttonup && newValue === 0) {
                    this._onbuttonup(buttonIndex);
                }
            }
            return newValue;
        };
        GenericPad.prototype.update = function () {
            _super.prototype.update.call(this);
            for (var index = 0; index < this._buttons.length; index++) {
                this._buttons[index] = this._setButtonValue(this.gamepad.buttons[index].value, this._buttons[index], index);
            }
        };
        return GenericPad;
    })(Gamepad);
    BABYLON.GenericPad = GenericPad;
    (function (Xbox360Button) {
        Xbox360Button[Xbox360Button["A"] = 0] = "A";
        Xbox360Button[Xbox360Button["B"] = 1] = "B";
        Xbox360Button[Xbox360Button["X"] = 2] = "X";
        Xbox360Button[Xbox360Button["Y"] = 3] = "Y";
        Xbox360Button[Xbox360Button["Start"] = 4] = "Start";
        Xbox360Button[Xbox360Button["Back"] = 5] = "Back";
        Xbox360Button[Xbox360Button["LB"] = 6] = "LB";
        Xbox360Button[Xbox360Button["RB"] = 7] = "RB";
        Xbox360Button[Xbox360Button["LeftStick"] = 8] = "LeftStick";
        Xbox360Button[Xbox360Button["RightStick"] = 9] = "RightStick";
    })(BABYLON.Xbox360Button || (BABYLON.Xbox360Button = {}));
    var Xbox360Button = BABYLON.Xbox360Button;
    (function (Xbox360Dpad) {
        Xbox360Dpad[Xbox360Dpad["Up"] = 0] = "Up";
        Xbox360Dpad[Xbox360Dpad["Down"] = 1] = "Down";
        Xbox360Dpad[Xbox360Dpad["Left"] = 2] = "Left";
        Xbox360Dpad[Xbox360Dpad["Right"] = 3] = "Right";
    })(BABYLON.Xbox360Dpad || (BABYLON.Xbox360Dpad = {}));
    var Xbox360Dpad = BABYLON.Xbox360Dpad;
    var Xbox360Pad = (function (_super) {
        __extends(Xbox360Pad, _super);

        function Xbox360Pad() {
            _super.apply(this, arguments);
            this._leftTrigger = 0;
            this._rightTrigger = 0;
            this._buttonA = 0;
            this._buttonB = 0;
            this._buttonX = 0;
            this._buttonY = 0;
            this._buttonBack = 0;
            this._buttonStart = 0;
            this._buttonLB = 0;
            this._buttonRB = 0;
            this._buttonLeftStick = 0;
            this._buttonRightStick = 0;
            this._dPadUp = 0;
            this._dPadDown = 0;
            this._dPadLeft = 0;
            this._dPadRight = 0;
        }
        Xbox360Pad.prototype.onlefttriggerchanged = function (callback) {
            this._onlefttriggerchanged = callback;
        };
        Xbox360Pad.prototype.onrighttriggerchanged = function (callback) {
            this._onrighttriggerchanged = callback;
        };
        Object.defineProperty(Xbox360Pad.prototype, "leftTrigger", {
            get: function () {
                return this._leftTrigger;
            },
            set: function (newValue) {
                if (this._onlefttriggerchanged && this._leftTrigger !== newValue) {
                    this._onlefttriggerchanged(newValue);
                }
                this._leftTrigger = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "rightTrigger", {
            get: function () {
                return this._rightTrigger;
            },
            set: function (newValue) {
                if (this._onrighttriggerchanged && this._rightTrigger !== newValue) {
                    this._onrighttriggerchanged(newValue);
                }
                this._rightTrigger = newValue;
            },
            enumerable: true,
            configurable: true
        });
        Xbox360Pad.prototype.onbuttondown = function (callback) {
            this._onbuttondown = callback;
        };
        Xbox360Pad.prototype.onbuttonup = function (callback) {
            this._onbuttonup = callback;
        };
        Xbox360Pad.prototype.ondpaddown = function (callback) {
            this._ondpaddown = callback;
        };
        Xbox360Pad.prototype.ondpadup = function (callback) {
            this._ondpadup = callback;
        };
        Xbox360Pad.prototype._setButtonValue = function (newValue, currentValue, buttonType) {
            if (newValue !== currentValue) {
                if (this._onbuttondown && newValue === 1) {
                    this._onbuttondown(buttonType);
                }
                if (this._onbuttonup && newValue === 0) {
                    this._onbuttonup(buttonType);
                }
            }
            return newValue;
        };
        Xbox360Pad.prototype._setDPadValue = function (newValue, currentValue, buttonType) {
            if (newValue !== currentValue) {
                if (this._ondpaddown && newValue === 1) {
                    this._ondpaddown(buttonType);
                }
                if (this._ondpadup && newValue === 0) {
                    this._ondpadup(buttonType);
                }
            }
            return newValue;
        };
        Object.defineProperty(Xbox360Pad.prototype, "buttonA", {
            get: function () {
                return this._buttonA;
            },
            set: function (value) {
                this._buttonA = this._setButtonValue(value, this._buttonA, 0 /*A*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonB", {
            get: function () {
                return this._buttonB;
            },
            set: function (value) {
                this._buttonB = this._setButtonValue(value, this._buttonB, 1 /*B*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonX", {
            get: function () {
                return this._buttonX;
            },
            set: function (value) {
                this._buttonX = this._setButtonValue(value, this._buttonX, 2 /*X*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonY", {
            get: function () {
                return this._buttonY;
            },
            set: function (value) {
                this._buttonY = this._setButtonValue(value, this._buttonY, 3 /*Y*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonStart", {
            get: function () {
                return this._buttonStart;
            },
            set: function (value) {
                this._buttonStart = this._setButtonValue(value, this._buttonStart, 4 /*Start*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonBack", {
            get: function () {
                return this._buttonBack;
            },
            set: function (value) {
                this._buttonBack = this._setButtonValue(value, this._buttonBack, 5 /*Back*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonLB", {
            get: function () {
                return this._buttonLB;
            },
            set: function (value) {
                this._buttonLB = this._setButtonValue(value, this._buttonLB, 6 /*LB*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonRB", {
            get: function () {
                return this._buttonRB;
            },
            set: function (value) {
                this._buttonRB = this._setButtonValue(value, this._buttonRB, 7 /*RB*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonLeftStick", {
            get: function () {
                return this._buttonLeftStick;
            },
            set: function (value) {
                this._buttonLeftStick = this._setButtonValue(value, this._buttonLeftStick, 8 /*LeftStick*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "buttonRightStick", {
            get: function () {
                return this._buttonRightStick;
            },
            set: function (value) {
                this._buttonRightStick = this._setButtonValue(value, this._buttonRightStick, 9 /*RightStick*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "dPadUp", {
            get: function () {
                return this._dPadUp;
            },
            set: function (value) {
                this._dPadUp = this._setDPadValue(value, this._dPadUp, 0 /*Up*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "dPadDown", {
            get: function () {
                return this._dPadDown;
            },
            set: function (value) {
                this._dPadDown = this._setDPadValue(value, this._dPadDown, 1 /*Down*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "dPadLeft", {
            get: function () {
                return this._dPadLeft;
            },
            set: function (value) {
                this._dPadLeft = this._setDPadValue(value, this._dPadLeft, 2 /*Left*/ );
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Xbox360Pad.prototype, "dPadRight", {
            get: function () {
                return this._dPadRight;
            },
            set: function (value) {
                this._dPadRight = this._setDPadValue(value, this._dPadRight, 3 /*Right*/ );
            },
            enumerable: true,
            configurable: true
        });
        Xbox360Pad.prototype.update = function () {
            _super.prototype.update.call(this);
            this.buttonA = this.browserGamepad.buttons[0].value;
            this.buttonB = this.browserGamepad.buttons[1].value;
            this.buttonX = this.browserGamepad.buttons[2].value;
            this.buttonY = this.browserGamepad.buttons[3].value;
            this.buttonLB = this.browserGamepad.buttons[4].value;
            this.buttonRB = this.browserGamepad.buttons[5].value;
            this.leftTrigger = this.browserGamepad.buttons[6].value;
            this.rightTrigger = this.browserGamepad.buttons[7].value;
            this.buttonBack = this.browserGamepad.buttons[8].value;
            this.buttonStart = this.browserGamepad.buttons[9].value;
            this.buttonLeftStick = this.browserGamepad.buttons[10].value;
            this.buttonRightStick = this.browserGamepad.buttons[11].value;
            this.dPadUp = this.browserGamepad.buttons[12].value;
            this.dPadDown = this.browserGamepad.buttons[13].value;
            this.dPadLeft = this.browserGamepad.buttons[14].value;
            this.dPadRight = this.browserGamepad.buttons[15].value;
        };
        return Xbox360Pad;
    })(Gamepad);
    BABYLON.Xbox360Pad = Xbox360Pad;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var GamepadCamera = (function (_super) {
        __extends(GamepadCamera, _super);

        function GamepadCamera(name, position, scene) {
            var _this = this;
            _super.call(this, name, position, scene);
            this.angularSensibility = 200;
            this.moveSensibility = 75;
            this._gamepads = new BABYLON.Gamepads(function (gamepad) {
                _this._onNewGameConnected(gamepad);
            });
        }
        GamepadCamera.prototype._onNewGameConnected = function (gamepad) {
            if (gamepad.index === 0) {
                this._gamepad = gamepad;
            }
        };
        GamepadCamera.prototype._checkInputs = function () {
            if (!this._gamepad) {
                return;
            }
            var LSValues = this._gamepad.leftStick;
            var normalizedLX = LSValues.x / this.moveSensibility;
            var normalizedLY = LSValues.y / this.moveSensibility;
            LSValues.x = Math.abs(normalizedLX) > 0.005 ? 0 + normalizedLX : 0;
            LSValues.y = Math.abs(normalizedLY) > 0.005 ? 0 + normalizedLY : 0;
            var RSValues = this._gamepad.rightStick;
            var normalizedRX = RSValues.x / this.angularSensibility;
            var normalizedRY = RSValues.y / this.angularSensibility;
            RSValues.x = Math.abs(normalizedRX) > 0.001 ? 0 + normalizedRX : 0;
            RSValues.y = Math.abs(normalizedRY) > 0.001 ? 0 + normalizedRY : 0;;
            var cameraTransform = BABYLON.Matrix.RotationYawPitchRoll(this.rotation.y, this.rotation.x, 0);
            var deltaTransform = BABYLON.Vector3.TransformCoordinates(new BABYLON.Vector3(LSValues.x, 0, -LSValues.y), cameraTransform);
            this.cameraDirection = this.cameraDirection.add(deltaTransform);
            this.cameraRotation = this.cameraRotation.add(new BABYLON.Vector3(RSValues.y, RSValues.x, 0));
        };
        GamepadCamera.prototype.dispose = function () {
            this._gamepads.dispose();
        };
        return GamepadCamera;
    })(BABYLON.FreeCamera);
    BABYLON.GamepadCamera = GamepadCamera;
})(BABYLON || (BABYLON = {}));
var __extends = this.__extends ||
function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var BABYLON;
(function (BABYLON) {
    var LinesMesh = (function (_super) {
        __extends(LinesMesh, _super);

        function LinesMesh(name, scene, updatable) {
            if (typeof updatable === "undefined") {
                updatable = false;
            }
            _super.call(this, name, scene);
            this.color = new BABYLON.Color3(1, 1, 1);
            this._indices = new Array();
            this._colorShader = new BABYLON.ShaderMaterial("colorShader", scene, "color", {
                attributes: ["position"],
                uniforms: ["worldViewProjection", "color"]
            });
        }
        Object.defineProperty(LinesMesh.prototype, "material", {
            get: function () {
                return this._colorShader;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinesMesh.prototype, "isPickable", {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LinesMesh.prototype, "checkCollisions", {
            get: function () {
                return false;
            },
            enumerable: true,
            configurable: true
        });
        LinesMesh.prototype._bind = function (subMesh, effect, wireframe) {
            var engine = this.getScene().getEngine();
            var indexToBind = this._geometry.getIndexBuffer();
            engine.bindBuffers(this._geometry.getVertexBuffer(BABYLON.VertexBuffer.PositionKind).getBuffer(), indexToBind, [3], 3 * 4, this._colorShader.getEffect());
            this._colorShader.setColor3("color", this.color);
        };
        LinesMesh.prototype._draw = function (subMesh, useTriangles, instancesCount) {
            if (!this._geometry || !this._geometry.getVertexBuffers() || !this._geometry.getIndexBuffer()) {
                return;
            }
            var engine = this.getScene().getEngine();
            engine.draw(false, subMesh.indexStart, subMesh.indexCount);
        };
        LinesMesh.prototype.intersects = function (ray, fastCheck) {
            return null;
        };
        LinesMesh.prototype.dispose = function (doNotRecurse) {
            this._colorShader.dispose();
            _super.prototype.dispose.call(this, doNotRecurse);
        };
        return LinesMesh;
    })(BABYLON.Mesh);
    BABYLON.LinesMesh = LinesMesh;
})(BABYLON || (BABYLON = {}));
var BABYLON;
(function (BABYLON) {
    var OutlineRenderer = (function () {
        function OutlineRenderer(scene) {
            this._scene = scene;
        }
        OutlineRenderer.prototype.render = function (subMesh, batch) {
            var scene = this._scene;
            var engine = this._scene.getEngine();
            var hardwareInstancedRendering = (engine.getCaps().instancedArrays !== null) && (batch.visibleInstances !== null);
            if (!this.isReady(subMesh, hardwareInstancedRendering)) {
                return;
            }
            var mesh = subMesh.getRenderingMesh();
            var material = subMesh.getMaterial();
            engine.enableEffect(this._effect);
            this._effect.setFloat("offset", mesh.outlineWidth);
            this._effect.setColor3("color", mesh.outlineColor);
            this._effect.setMatrix("viewProjection", scene.getTransformMatrix());
            var useBones = mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind);
            if (useBones) {
                this._effect.setMatrices("mBones", mesh.skeleton.getTransformMatrices());
            }
            mesh._bind(subMesh, this._effect, false);
            if (material && material.needAlphaTesting()) {
                var alphaTexture = material.getAlphaTestTexture();
                this._effect.setTexture("diffuseSampler", alphaTexture);
                this._effect.setMatrix("diffuseMatrix", alphaTexture.getTextureMatrix());
            }
            if (hardwareInstancedRendering) {
                mesh._renderWithInstances(subMesh, false, batch, this._effect, engine);
            } else {
                if (batch.renderSelf[subMesh._id]) {
                    this._effect.setMatrix("world", mesh.getWorldMatrix());
                    mesh._draw(subMesh, true);
                }
                if (batch.visibleInstances[subMesh._id]) {
                    for (var instanceIndex = 0; instanceIndex < batch.visibleInstances[subMesh._id].length; instanceIndex++) {
                        var instance = batch.visibleInstances[subMesh._id][instanceIndex];
                        this._effect.setMatrix("world", instance.getWorldMatrix());
                        mesh._draw(subMesh, true);
                    }
                }
            }
        };
        OutlineRenderer.prototype.isReady = function (subMesh, useInstances) {
            var defines = [];
            var attribs = [BABYLON.VertexBuffer.PositionKind, BABYLON.VertexBuffer.NormalKind];
            var mesh = subMesh.getMesh();
            var material = subMesh.getMaterial();
            if (material && material.needAlphaTesting()) {
                defines.push("#define ALPHATEST");
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UVKind)) {
                    attribs.push(BABYLON.VertexBuffer.UVKind);
                    defines.push("#define UV1");
                }
                if (mesh.isVerticesDataPresent(BABYLON.VertexBuffer.UV2Kind)) {
                    attribs.push(BABYLON.VertexBuffer.UV2Kind);
                    defines.push("#define UV2");
                }
            }
            if (mesh.skeleton && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesIndicesKind) && mesh.isVerticesDataPresent(BABYLON.VertexBuffer.MatricesWeightsKind)) {
                attribs.push(BABYLON.VertexBuffer.MatricesIndicesKind);
                attribs.push(BABYLON.VertexBuffer.MatricesWeightsKind);
                defines.push("#define BONES");
                defines.push("#define BonesPerMesh " + (mesh.skeleton.bones.length + 1));
            }
            if (useInstances) {
                defines.push("#define INSTANCES");
                attribs.push("world0");
                attribs.push("world1");
                attribs.push("world2");
                attribs.push("world3");
            }
            var join = defines.join("\n");
            if (this._cachedDefines != join) {
                this._cachedDefines = join;
                this._effect = this._scene.getEngine().createEffect("outline", attribs, ["world", "mBones", "viewProjection", "diffuseMatrix", "offset", "color"], ["diffuseSampler"], join);
            }
            return this._effect.isReady();
        };
        return OutlineRenderer;
    })();
    BABYLON.OutlineRenderer = OutlineRenderer;
})(BABYLON || (BABYLON = {}));