import { encode,decode } from "../js/cipher";


// write your unit tests here


  describe("encode", () => {
    it("should be a function", () => {
      expect(typeof encode).toBe("function");
    });

    it("should return 'hijklmnopqrstuvwxyz !@#$%^' for 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with offset 33", () => {
      expect(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33)).toBe(
        "hijklmnopqrstuvwxyz !@#$%^"
      );
    });

    it("should return 'HIJKLMNOPQRSTUVWXYZabcdefg' for 'IJKLMNOPQRSTUVWXYZabcdefgh' with offset -1", () => {
        expect(encode("IJKLMNOPQRSTUVWXYZabcdefgh", -1)).toBe(
          "HIJKLMNOPQRSTUVWXYZabcdefg"
        );
    });

    it("should return 'HIJKLMNOPQRSTUVWXYZABCDEFG' for 'ABCDEFGHIJKLMNOPQRS3456789' with offset 7", () => {
        expect(encode("ABCDEFGHIJKLMNOPQRS3456789", 7)).toBe(
          "HIJKLMNOPQRSTUVWXYZABCDEFG"
        );
    });
    it ("should return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' for ' !@#$%^&*()-_+=[]{}|;:\"',.' with offset 52", () => {
        expect(encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 52)).toBe(
            " !@#$%^&*()-_+=[]{}|;:\"',."
        );
    });
    it ("should return 'SAMUEL' for 'ZHTbLS' with offset -7", () => {
        expect(encode("ZHTbLS", -7)).toBe(
            "SAMUEL"
        );
    });

    
      describe("decode", () => {
     it("should be a function", () => {
        expect(typeof decode).toBe("function");
     });
    
     it("should return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' for 'hijklmnopqrstuvwxyz !@#$%^' with offset 33", () => {
        expect(decode("hijklmnopqrstuvwxyz !@#$%^", 33)).toBe(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        );
     });

        it("should return 'ABCDEFGHIJKLMNOPQRStuvwxyz' for 'HIJKLMNOPQRSTUVWXYZABCDEFG' with offset 7", () => {
            expect(decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 7)).toBe(
            "ABCDEFGHIJKLMNOPQRS3456789"
            );
      });

      it("should return 'IJKLMNOPQRSTUVWXYZabcdefgh' for 'HIJKLMNOPQRSTUVWXYZabcdefg' with offset -1", () => {
        expect(decode("HIJKLMNOPQRSTUVWXYZabcdefg", -1)).toBe(
          "IJKLMNOPQRSTUVWXYZabcdefgh"
        );
      });
    });

    it ("should return 'qrstuvwxyz !@#$%^&*()-_+=[' for 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' with offset 52", () => {
        expect(decode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 52)).toBe(
            "qrstuvwxyz !@#$%^&*()-_+=["
        );
    });

    it ("should return 'ZHTbLS' for 'SAMUEL' with offset 7", () => {
        expect(decode("ZHTbLS",7)).toBe(
            "SAMUEL"
        );
    });
});

