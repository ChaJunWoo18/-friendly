package jpabook.jpashop.Service;

import jpabook.jpashop.domain.Member;
import jpabook.jpashop.repository.MemberRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class) //Junit4에서 spring test할때 필요
@SpringBootTest //Junit4에서 spring test할때 필요
@Transactional // 자동으로 테스트가 끝나면 rollback. 만약 rollback이 싫다면 em이나 @Rollback이용
public class MemberServiceTest {

    @Autowired
    MemberService memberService;
    @Autowired
    MemberRepository memberRepository;
    //@Autowired
    //EntityManager em;

    @Test
    //@Rollback(value = false)
    public void 회원가입() throws Exception {
        //given
        Member member = new Member();
        member.setName("kim");

        //when
        Long savedId = memberService.join(member);

        //then
        //em.flush()
        assertEquals(member, memberRepository.findOne(savedId));
    }

    @Test(expected = IllegalStateException.class) //try, catch문을 대체한다
    public void 회원_중복_예외() throws Exception {
        //given
        Member member1 = new Member();
        member1.setName("kim");

        Member member2 = new Member();
        member2.setName("kim");

        //when
        memberService.join(member1);
//        try {
            memberService.join(member2); //예외 발생해야함
//        } catch (IllegalStateException e) {
//            return;
//        }

        //then
        fail("예외가 발생해야 합니다."); //위에서 예외가 발생하지 않고 이 줄까지 내려온 경우를 위해 작성

    }
}