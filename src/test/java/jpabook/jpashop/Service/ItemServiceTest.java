package jpabook.jpashop.Service;

import jpabook.jpashop.domain.item.Album;
import jpabook.jpashop.domain.item.Book;
import jpabook.jpashop.domain.item.Item;
import jpabook.jpashop.repository.ItemRepository;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class) //Junit4에서 spring test할때 필요
@SpringBootTest //Junit4에서 spring test할때 필요
@Transactional // 자동으로 테스트가 끝나면 rollback. 만약 rollback이 싫다면 em이나 @Rollback이용
public class ItemServiceTest {
    @Autowired
    ItemService itemService;
    @Autowired
    ItemRepository itemRepository;

    @Test
    public void 상품_저장() {
        //given
        Album album = new Album();
        album.setArtist("artistA");
        album.setName("albumA");
        //when
        Long savedItemId = itemService.saveItem(album);
        //then
        assertEquals(album, itemRepository.findOne(savedItemId));
        //System.out.println("album name = "+ album.getName());
        //System.out.println("album artist = "+ album.getArtist());

    }

    @Test
    public void 상품_찾기() { //위 예제로 확인가능
    }

    @Test
    public void 상품_전체조회() {
        Book book = new Book();
        book.setName("bookA");
        book.setAuthor("authorA");
        Album album = new Album();
        album.setArtist("artistA");
        album.setName("albumA");
        Long savedBookId = itemService.saveItem(book);
        Long savedItemId = itemService.saveItem(album);
        List<Item> itemList = itemRepository.findAll();
        Assertions.assertThat(itemList.size()).isEqualTo(2);
        //System.out.println("itemList = " + itemList);
    }
}